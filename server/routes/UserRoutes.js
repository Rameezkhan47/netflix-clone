const { addtoLikedMovies } = require("../controllers/userController");

const router = require("express").Router();

router.post("/add", addtoLikedMovies);

module.exports = router;
