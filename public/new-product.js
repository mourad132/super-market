var btn = document.querySelector("button")

btn.addEventListener("click", () => {
	var name = document.querySelector("#name");
	var image = document.querySelector("#image");
	var varaities = document.querySelector("#varaities");
	var size = document.querySelector("#sizes").value;
	var stock = document.querySelector("#stock").value
	var select = document.querySelector("select")
	var category;
	
	if(select.selectedIndex == 0){
		category = "No Category Chosen"
	} else if(select.selectedIndex == 1){
		category = "Sweets"
	}  else if(select.selectedIndex == 2){
		category = "Drinks"
	}  else if(select.selectedIndex == 3){
		category = "Food"
	}  else if(select.selectedIndex == 4){
		category = "Ingredients"
	}  else if(select.selectedIndex == 5){
		category = "Cleaning"
	}  else if(select.selectedIndex == 6){
		category = "Other"
	}
	
	function getVaraity(){
		var obj = [] 
		varaities.value.split(",").forEach(varaity => {
			obj.push({
				varaity: varaity,
				stock: true,
			})
		})
		return obj
	}
	
	var obj = {
		name: name.value,
		image: image.value.split(","),
		varaities: getVaraity(),
		size: size,
		stock: stock,
		category: category
	}
	
$.ajax({
    url: '/new-product/asdrepeatasd123',
    data: obj,
    type: 'POST'
})
	console.log(obj)
	.then(res => alert("Successfully Added"))
	.catch(err => alert(err))
	
})