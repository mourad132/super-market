const mongoose = require("mongoose");
const Schema = mongoose.Schema({
	unit: String,
    order: Array
})

module.exports = mongoose.model("Order", Schema)