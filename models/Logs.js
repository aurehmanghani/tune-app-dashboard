const mongoose = require("mongoose")

const schema = mongoose.Schema({
	time: String,
    type: String,
    user_id: String,
    revenue: String
})

module.exports = mongoose.model("Logs", schema)