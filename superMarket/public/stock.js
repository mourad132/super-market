// Image Setter
var imgs = document.querySelectorAll(".header-image")
var indexes = document.querySelectorAll("select");
var images = document.querySelectorAll(".img");
var stocked = document.querySelectorAll(".stocked");
var ids = document.querySelectorAll(".id");
var names = document.querySelectorAll(".name");
var sizeArr = document.querySelectorAll(".sizeArr")
var sizeContain = document.querySelectorAll(".size-contain")
var stockArr = document.querySelectorAll(".stockArr")
var addToStockBtn = document.querySelectorAll(".add-to-cart")


indexes.forEach((index, i) => {
	index.addEventListener("change", () => {
		getImage(index, i)
		getSizes(index.selectedIndex, i)
		reset(i, index.selectedIndex)
	})
})

// Identifies The Image
function getImage(index, i){
	var attr = images[i].textContent.split(",");
	if(index.selectedIndex == 0){
		imgs[i].setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEXx8/XCy9K/yND09vfw8vTP1tzp7O/i5ure4+fO1dvJ0dfT2d/EzNPt7/Lb4OXo6+4FeM7UAAAFL0lEQVR4nO2c24KrIAxFLdha7///t0dxOlWDSiAKztnrbR4G6SoJBKHZA6zJYncgQeCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ocEKBEwqcUOCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ot3Oi1KMq64FnWTVq+EueWzlRquqKVn/J+/ezEfdyHydKPYtc62yF1m1Xymq5ixPVdDnx8eslf1eCVu7hRFXFppAfLW39kNJyByeqOTJirGTvRsbKDZyozsHIpKUQsZK8E1Vu55GTrKTuRL0ZRoyVLviZaTtRVctUMuaVOnCoJO1E1WwjxsorbGZO2Qk7br5WuhApKTvpfZWMy5WAoZKuk6b1NhI4VJJ10uRBSsas0ng+OlUnVaARw9NvqCTqRERJpt9eUtJ0IqPEN36SdNIIKRnIPeafFJ0Ep9c5mr+qTdFJ2CRMpLAn5fScqJeokrFWZkoRdaImwtpw2T9iSnnxuiDoRFXda6hK28JzWTA14ryBxKFlTT9iTlT1W57o3Lta96yED8krRieknCw/DDuEP1TnKBlgzMlCTtZDXr+8pIjOwitK5x7JOKFD3mukiE85ix45S5FxYll46prdiv8ekpsU19wv4kS9LV1ouQPlrPzKliIzTuw9YDYiVfgFSxFx8rR+wcyMomSX9HYpTjlFwonqrB3gBc/JyYQjRcRJYe8Ay4l9rMlLcVi8iTjp7Y/nOBHcMjngWEoi4+TUlcmKw9rnxHzCWMqeU/ltkB9JEZl3SusnYmwQn1fm2GgPeiOzZrM9WZfu/3/BNDznYATLOLENffep+JppeMZBMSZUF9N6ljFM7KF3qpTduBZyQj4W53XTiRsEm1L2dr2k9k9W9Rtjq2BrJj9Zyk7pI7bP9lw8kfH+4KIFLGF77Sa3R90Un0POvHNCcYzsLVMk9+2buni1bd9xjMSJHMPmjCz7zov/fidW5GQ7OS/2e8BoRrLtrBfXScTIMVLsk09cJxEjZ8I6+cR1EmG1tsRaDsZ0EjlyDL0leuxOpulD4JTALtfXORRbnqVO1LDOePdtpoclWPsqulL+wt0P0SNnxFKrrp2opmuXl+5OuHA3PSmByDGQ9ezSydYdM+ELd4YUIsdANnoWTva2RSUv3JlnJRE5I2RbY+6kee1+dTrrhC7cPTZeMUdivZnydaIc3tdqqWuI6USOYZlSfp0oxzVlJxNByUSOYZlSPk6cDzqEXy17JDTn/LBMKRlTSRZ4X2giep2zZnEwZHLiGjifFt6BTtKKHMMspUxO2BkvDzoDm1jkGGa7bsaJx0t9XfgrOfuMlhezwsc48RrKufvhyiXXHatg8T2Zkm0eHzluxO8W4pXHKljkXycBt3h9blFdeqyCx2fPOguLbn6qTWsBu+Czxs/CopsdP4kmkx+mcZ8FRrfuWUqSTSYT005keDucW4iXnzRhMg17iYacC6A0VyZzzIQs0pBrUrn22JoXY4Us0pDjaZMzb+dIMX6/Qi0dHSU0XHySz48heqSaOs60vsvlq2mtpzj9OCh/Trgjew7afgLar63d6ec2SmTZm37+UyV7048K+Gmkm7O10A/8aaSbY7sEr8rYvYoNnX4Sr3EuYJVpVc35Ccu/innZbryMJ1n4v9f4N9FZ39XPZ931GYzMGH9VPHYfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADp8Q9+nG9anuOrfAAAAABJRU5ErkJggg==")
				} else {
					imgs[i].setAttribute("src", attr[index.selectedIndex - 1])
				}
			}

function checked(size, i, stock, j) {
	document.querySelector(".chosenSize").textContent = size
	document.querySelectorAll(".num")[i].value = stock;
	document.querySelector('.chosenSize').setAttribute('index', j)
}

function getStock(index, i){
	var splited = stockArr[i].textContent.split("/");
	var stock = splited[index - 1].split(".")
	const input = document.querySelectorAll(".num")[i]
}



// Indentifies The Sizes
function getSizes(index, i) {
	if(index > 0){
		//Stock
		var splitedStock = stockArr[i].textContent.split("/");
		var stocks = splitedStock[index - 1].split(".")

		//Size
		var splitedSize = sizeArr[i].textContent.split("/");
		var sizes = splitedSize[index - 1].split(".")
		$('.size-container').remove()
		sizes.forEach((size, j) => {
			var id = "#" + sizeContain[i].getAttribute("id")
			d3.select(String(id))
			  .append("div")
			  .attr("class", "size-container")
				  .append("label")
				  .text(size)
				  .attr("stockIndex", j)
					  .append("input")
					  .attr("type", "radio")
					  .attr("name", i)
					  .attr("stock", stocks[j])
					  .on("change", () => {
						checked(size, i, stocks[j], j)
					  })
					.style("margin-left", "5px")	
		})
} else {
		var id = "#" + sizeContain[i].getAttribute("id")
		d3.select(id)
		  .selectAll(".size-container")
		  .remove()
	}
}

function reset(i, index){
	numDiv[i].textContent = "0";
	chosenSize.textContent = "";
	document.querySelectorAll('select')
		.forEach(item => item.selectedIndex = 0)
	document.querySelectorAll('select')[i].selectedIndex = index
}

addToStockBtn.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		if(document.querySelector(".chosenSize").textContent == ""){
			alert("please select a size first!")
		} else {
			addToStock(i)			
		}
	})
})

// Add to Cart

// Add To Cart Func.
function addToStock(i, stock) {
	var obj = {
		id: document.querySelectorAll(".id")[i].textContent,
		varaity: document.querySelectorAll("select")[i].selectedIndex - 1,
		size: document.querySelector(".chosenSize").textContent,
		stock: document.querySelectorAll(".num")[i].value,
		stockIndex: document.querySelector('.chosenSize').getAttribute('index')
	}
	axios.post('/stock/sweets', obj)
	.then(res => { document.querySelectorAll('.card')[i]
						 .setAttribute('style', 'border: 5px dashed green')
						 setTimeout(() => {
					document.querySelectorAll('.card')[i]
							.setAttribute('style', 'border: none')
				}, 3000)
				 }
				
		)
	.catch(err => { document.querySelectorAll('.card')[i]
						 .setAttribute('style', 'border: 5px dashed red')
						 setTimeout(() => {
					document.querySelectorAll('.card')[i]
							.setAttribute('style', 'border: none')
				}, 3000)
				 })
}
