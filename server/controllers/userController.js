const NetflixUsers = require("../models/UserModel");

module.exports.addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await NetflixUsers.findOne({ email });
    if (user) {
      const { favoriteContent } = user;
      const contentAlreadyLiked = favoriteContent.find(
        ({ id }) => id === data.id
      );
      if (!contentAlreadyLiked) {
        await NetflixUsers.findByIdAndUpdate(
          user._id,
          {
            favoriteContent: [...user.favoriteContent, data],
          },
          { new: true }
        );
      } else return res.json({ msg: "Content already added to favorites" });
    } else NetflixUsers.create({ email, favoriteContent: [data] });
    return res.json({ msg: "Content added to favorites", payload: data });
  } catch (error) {
    return res.json({ msg: "Error Adding Content" });
  }
};

module.exports.getLikedMovies = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await NetflixUsers.findOne({ email });
    if (user) {
      return res.json({ msg: "success", movies: user.favoriteContent });
    } else return res.json({ msg: "user with given email not found" });
  } catch (error) {
    return res.json({ msg: "Error Adding Content" });
  }
};

module.exports.removeFromLikedMovies = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    const user = await NetflixUsers.findOne({ email });
    if (user) {
      const movies = user.favoriteContent;
      const movieIndex = movies.findIndex(({ id }) => id === movieId);
      if (movieIndex!==0) {
        res.status(400).send({ msg: "Movie not found." });
      }

        movies.splice(movieIndex, 1);


      await NetflixUsers.findByIdAndUpdate(
        user._id,
        {
          favoriteContent: movies,
        },
        { new: true }
      );
      return res.json({ msg: "Movie successfully removed.", movies });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error removing movie to the liked list" });
  }
};
