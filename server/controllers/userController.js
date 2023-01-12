const NetflixUsers = require("../models/UserModel");
const User = require("../models/UserModel");

module.exports.addtoLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await NetflixUsers.findOne({ email });
    if (user) {
      const { favoriteContent } = user;
      const contentAlreadyLiked = favoriteContent.find(
        ({ id }) => (id = data.id)
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
