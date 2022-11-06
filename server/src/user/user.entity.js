const mongoose = require("mongoose");
const { v4, stringify } = require("uuid");
const UserEntity = mongoose.model('user', {
    userId: { type: String, default: () => v4() },
    username: String,
    password: String,
    name: String,
})
module.exports = UserEntity