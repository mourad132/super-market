const mongoose = require("mongoose");
const Schema = mongoose.Schema({
	cart: [],
    unit: String,
})
//     name: String,
//     category: String,
//     varaity: String,
//     size: String,
//     image: String,
//     quantaty: Number,

module.exports = mongoose.model("Cart", Schema)