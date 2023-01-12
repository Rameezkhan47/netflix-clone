const mongoose = require("mongoose");

const netflixUsersSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        max: 100
    },
    favoriteContent: Array,
})

const NetflixUsers = mongoose.model(
    "NetflixUsers",
    netflixUsersSchema
  );

module.exports = NetflixUsers;