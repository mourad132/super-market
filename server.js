// Node Dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// --------- Local Modules ---------
const Sweets = require("./models/Sweets.js");
const Food = require("./models/Food.js");
const Drinks = require("./models/Drinks.js");
const Ingredients = require("./models/Ingredients.js");
const Cleaning = require("./models/Cleaning.js");
const Other = require("./models/Other.js");
const Cart = require("./models/cart.js");
const Order = require("./models/order.js");

// -------- Configrations ---------

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://Mourad:Momo2005@super-market.yokvp.mongodb.net/Products?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true})
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.set("view engine", "ejs");


// ------- Routes -------

// --- Stock ---
app.get("/stock", (req, res) => {
	Sweets.find({}, (err, sweets) => {
		if(err){
			console.log(err)
		} else {
			Drinks.find({}, (err, drinks) => {
				if(err){
					console.log(err)
				} else {
					Food.find({}, (err, food) => {
						if(err){
							console.log(err)
						} else {
							Ingredients.find({}, (err, ingredients) => {
								if(err){
									console.log(err)
								} else {
								  Cleaning.find({}, (err, cleaning) => {
								if(err){
									console.log(err)
								} else {
									Other.find({}, (err, other) => {
								if(err){
									console.log(err)
								} else {
									res.render("stock", { sweets: sweets, drinks: drinks, food: food, ingredients: ingredients, cleaning: cleaning, other: other})
								}
							})
								}
							})
								}
							})
						}
					})
				}
			})
		}
	})
})

// --- Categories ---
app.get("/categories", (req, res) => {
	res.render("categories")
})

// --- Add/remove To Stock ---
app.post("/stock/sweets", (req, res) => {
		Sweets.findById({_id: req.body.id}, (err, found) => {
			if(err){
				console.log(err)
			} else {
					if(found.stock.split('').indexOf('/') == -1){
						var splited = found.stock.split('.')
						splited.splice(req.body.stockIndex, 1);
						splited.splice(req.body.stockIndex, 0, req.body.stock)
						console.log(splited)
						found.stock = splited.join('.')
						found.save() 
						console.log(found)
						res.send(JSON.stringify(found)) 
					} else {
						var splited = found.stock.split('/')
						console.log(req.body.varaity)
						var change = splited.splice(req.body.varaity, 1)
						console.log(change)
						if(change[0].length > 1){
							var changed = change[0].split('.')
							changed[req.body.stockIndex] = String(req.body.stock)
							splited.splice(req.body.varaity, 0, changed.join('.'))
						} else {
							change[req.body.stockIndex] = String(req.body.stock);
							splited.splice(req.body.varaity, 0, change.join('.'))
						}
						found.stock = splited.join('/')
						found.save()
						console.log(found)
						res.send(JSON.stringify(found)) 
					}
			}
		})
	}
)

app.post("/stock/cleaning", (req, res) => {
		Cleaning.findById({_id: req.body.id}, (err, found) => {
			if(err){
				console.log(err)
			} else {
					if(found.stock.split('').indexOf('/') == -1){
						var splited = found.stock.split('.')
						splited.splice(req.body.stockIndex, 1);
						splited.splice(req.body.stockIndex, 0, req.body.stock)
						console.log(splited)
						found.stock = splited.join('.')
						found.save() 
						console.log(found)
						res.send(JSON.stringify(found)) 
					} else {
						var splited = found.stock.split('/')
						console.log(req.body.varaity)
						var change = splited.splice(req.body.varaity, 1)
						console.log(change)
						if(change[0].length > 1){
							var changed = change[0].split('.')
							changed[req.body.stockIndex] = String(req.body.stock)
							splited.splice(req.body.varaity, 0, changed.join('.'))
						} else {
							change[req.body.stockIndex] = String(req.body.stock);
							splited.splice(req.body.varaity, 0, change.join('.'))
						}
						found.stock = splited.join('/')
						found.save()
						console.log(found)
						res.send(JSON.stringify(found)) 
					}
			}
		})
	}
)

app.post("/stock/food", (req, res) => {
		Food.findById({_id: req.body.id}, (err, found) => {
			if(err){
				console.log(err)
			} else {
					if(found.stock.split('').indexOf('/') == -1){
						var splited = found.stock.split('.')
						splited.splice(req.body.stockIndex, 1);
						splited.splice(req.body.stockIndex, 0, req.body.stock)
						console.log(splited)
						found.stock = splited.join('.')
						found.save() 
						console.log(found)
						res.send(JSON.stringify(found)) 
					} else {
						var splited = found.stock.split('/')
						console.log(req.body.varaity)
						var change = splited.splice(req.body.varaity, 1)
						console.log(change)
						if(change[0].length > 1){
							var changed = change[0].split('.')
							changed[req.body.stockIndex] = String(req.body.stock)
							splited.splice(req.body.varaity, 0, changed.join('.'))
						} else {
							change[req.body.stockIndex] = String(req.body.stock);
							splited.splice(req.body.varaity, 0, change.join('.'))
						}
						found.stock = splited.join('/')
						found.save()
						console.log(found)
						res.send(JSON.stringify(found)) 
					}
			}
		})
	}
)

app.post("/stock/drinks", (req, res) => {
		Drinks.findById({_id: req.body.id}, (err, found) => {
			if(err){
				console.log(err)
			} else {
					if(found.stock.split('').indexOf('/') == -1){
						var splited = found.stock.split('.')
						splited.splice(req.body.stockIndex, 1);
						splited.splice(req.body.stockIndex, 0, req.body.stock)
						console.log(splited)
						found.stock = splited.join('.')
						found.save() 
						console.log(found)
						res.send(JSON.stringify(found)) 
					} else {
						var splited = found.stock.split('/')
						console.log(req.body.varaity)
						var change = splited.splice(req.body.varaity, 1)
						console.log(change)
						if(change[0].length > 1){
							var changed = change[0].split('.')
							changed[req.body.stockIndex] = String(req.body.stock)
							splited.splice(req.body.varaity, 0, changed.join('.'))
						} else {
							change[req.body.stockIndex] = String(req.body.stock);
							splited.splice(req.body.varaity, 0, change.join('.'))
						}
						found.stock = splited.join('/')
						found.save()
						console.log(found)
						res.send(JSON.stringify(found)) 
					}
			}
		})
	}
)

app.post("/stock/ingredients", (req, res) => {
		Ingredients.findById({_id: req.body.id}, (err, found) => {
			if(err){
				console.log(err)
			} else {
					if(found.stock.split('').indexOf('/') == -1){
						var splited = found.stock.split('.')
						splited.splice(req.body.stockIndex, 1);
						splited.splice(req.body.stockIndex, 0, req.body.stock)
						console.log(splited)
						found.stock = splited.join('.')
						found.save() 
						console.log(found)
						res.send(JSON.stringify(found)) 
					} else {
						var splited = found.stock.split('/')
						console.log(req.body.varaity)
						var change = splited.splice(req.body.varaity, 1)
						console.log(change)
						if(change[0].length > 1){
							var changed = change[0].split('.')
							changed[req.body.stockIndex] = String(req.body.stock)
							splited.splice(req.body.varaity, 0, changed.join('.'))
						} else {
							change[req.body.stockIndex] = String(req.body.stock);
							splited.splice(req.body.varaity, 0, change.join('.'))
						}
						found.stock = splited.join('/')
						found.save()
						console.log(found)
						res.send(JSON.stringify(found)) 
					}
			}
		})
	}
)

app.post("/stock/other", (req, res) => {
		Other.findById({_id: req.body.id}, (err, found) => {
			if(err){
				console.log(err)
			} else {
					if(found.stock.split('').indexOf('/') == -1){
						var splited = found.stock.split('.')
						splited.splice(req.body.stockIndex, 1);
						splited.splice(req.body.stockIndex, 0, req.body.stock)
						console.log(splited)
						found.stock = splited.join('.')
						found.save() 
						console.log(found)
						res.send(JSON.stringify(found)) 
					} else {
						var splited = found.stock.split('/')
						console.log(req.body.varaity)
						var change = splited.splice(req.body.varaity, 1)
						console.log(change)
						if(change[0].length > 1){
							var changed = change[0].split('.')
							changed[req.body.stockIndex] = String(req.body.stock)
							splited.splice(req.body.varaity, 0, changed.join('.'))
						} else {
							change[req.body.stockIndex] = String(req.body.stock);
							splited.splice(req.body.varaity, 0, change.join('.'))
						}
						found.stock = splited.join('/')
						found.save()
						console.log(found)
						res.send(JSON.stringify(found)) 
					}
			}
		})
	}
)

// Redirect to Category Page
app.get("/", (req, res) => {
	res.redirect("/categories")
})

// Add functionality to Add products directly according to their categories
app.post("/new-product/asdrepeatasd123", (req, res) => {
	if(req.body.category == "Sweets"){
		Sweets.create({
			name: req.body.name,
			varaity: req.body.varaities,
			size: req.body.size,
			image: req.body.image,
		})
	} else if(req.body.category == "Drinks"){
		Drinks.create({
			name: req.body.name,
			varaity: req.body.varaities,
			size: req.body.size,
			image: req.body.image,
		})
	} else if(req.body.category == "Food"){
		Food.create({
			name: req.body.name,
			varaity: req.body.varaities,
			size: req.body.size,
			image: req.body.image,
		})
	} else if(req.body.category == "Ingredients"){
		Ingredients.create({
			name: req.body.name,
			varaity: req.body.varaities,
			size: req.body.size,
			image: req.body.image,
		})
	} else if(req.body.category == "Cleaning"){
		Cleaning.create({
			name: req.body.name,
			varaity: req.body.varaities,
			size: req.body.size,
			image: req.body.image,
		})
	} else if(req.body.category == "Other"){
		Other.create({
			name: req.body.name,
			varaity: req.body.varaities,
			size: req.body.size,
			image: req.body.image,
		})
	}
})

// --- Products ---

app.get("/sweets", (req, res) => {
	Sweets.find({}, (err, found) => {
            if(err){
                console.log(err)
            } else {
                res.render("products", {products: found, category: "Sweets"})
            }
    })
})

app.get("/drinks", (req, res) => {
	Drinks.find({}, (err, found) => {
            if(err){
                console.log(err)
            } else {
                res.render("products", {products: found, category: "Drinks"})
            }
    })
})

app.get("/food", (req, res) => {
	Food.find({}, (err, found) => {
            if(err){
                console.log(err)
            } else {
                res.render("products", {products: found, category: "Food"})
            }
    })
});

app.get("/ingredients", (req, res) => {
	Ingredients.find({}, (err, found) => {
            if(err){
                console.log(err)
            } else {
                res.render("products", {products: found, category: "Ingredients"})
            }
    })
})

app.get("/new-product", (req, res) => {
	res.render('new-product')
})

app.get("/cleaning", (req, res) => {
	Cleaning.find({}, (err, found) => {
            if(err){
                console.log(err)
            } else {
                res.render("products", {products: found, category: "Cleaning"})
            }
    })
})

app.get("/other", (req, res) => {
	Other.find({}, (err, found) => {
            if(err){
                console.log(err)
            } else {
                res.render("products", {products: found, category: "Other"})
            }
    })
})


// --- Add To Cart -- 
app.post("/add", (req, res) => {
	Cart.findOne({ unit: req.body.unit }, (err, found) => { //req.user.unit
		if(err){
			console.log(err)
		} else if(found == null){
			Cart.create({
				cart: [{
				name: req.body.name,
				quantaty: req.body.quantaty,
				size: req.body.size,
				image: req.body.image,
				varaity: req.body.varaity,
				}],
			unit: req.body.unit, //req.user.unit
			}, (err, created) => {
				if(err){
					console.log(err)
				} else {
					res.redirect("/" + req.body.category)
				}
			})
		} else {
			found.cart.push({
				name: req.body.name,
				quantaty: req.body.quantaty,
				size: req.body.size,
				image: req.body.image,
				varaity: req.body.varaity,
			})
			found.save()
		}
	}) 
})


// --- Checkout -- 
app.get("/checkout", (req, res) => {
	Cart.findOne({}, (err, found) => {
        if(err){
            res.redirect('/error')
        } else {
            res.render("checkout", {orders: found})
			console.log(found)
        }
    })
})

app.get("/checkout/:id", (req, res) => {
    Cart.findOneAndDelete({_id: req.params.id}, (err, deleted) => {
        if(err){
            res.redirect("/error")
        } else {
			Order.create({
				unit: deleted.unit,
				order: deleted.cart
			}, (err, created) => {
				if(err){
					console.log(err)
				} else {
					res.redirect("/checkout")
				}
			})
        }
    })
})

// --- Orders ---

app.get("/orders/asdrepeatasd123", (req, res) => {
    Order.find({}, (err, found) => {
        if(err){
            console.log(err)
        } else {
			var orders = []
			found.forEach(order => {
				orders.push({ unit: order.unit, id: order._id })
			})
			res.render("orders", {orders: found})

        }
    })
})

app.get("/map/:id", (req, res) => {
	Order.findById(req.params.id, (err, found) => {
		if(err){
			console.log(err)
		} else {
			res.render("map", {order: found})
		}
	})
})

app.get("/order/asdrepeatasd123/:id", (req, res) => {
    Order.findById({_id: req.params.id}, (err, found) => {
        if(err){
            console.log(err) 
        } else {
            res.render("order", {cart: found})
        }
    })
})



// --- Order Done ---
app.get("/order/done/:id", (req, res) => {
	Order.findOneAndDelete({_id: req.params.id}, (err, deleted) => {
		if(err){
			console.log(err)
		} else {
			res.redirect("/orders/asdrepeatasd123")
		}
	})
})

//SERVER LISTENER
app.listen(process.env.PORT || 80, function(){
    console.log('server started')
})
