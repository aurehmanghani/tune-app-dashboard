const mongoose = require("mongoose")

const schema = mongoose.Schema({
	avatar: String,
    id: String,
    name: String,
    occupation: String
})

module.exports = mongoose.model("Users", schema)