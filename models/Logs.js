const mongoose = require("mongoose")

const schema = mongoose.Schema({
	timestamp: String,
    type: String,
    user_id: String,
    revenue: String
})

module.exports = mongoose.model("Logs", schema)