const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    name: String,
    varaity: Array,
    size: String,
    image: Array,
	stock: String,
})

module.exports = mongoose.model("Sweets", Schema)