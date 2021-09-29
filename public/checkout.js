var addBtns = document.querySelectorAll(".add");
var subBtns = document.querySelectorAll(".remove");
var quantaty = document.querySelectorAll(".quantaty")
total()

function total() {
	var sizes = document.querySelectorAll(".size")
	var quantaties = document.querySelectorAll(".quantaty")
	var total = 0;
	for(var i = 0; i < sizes.length; i++){
	 total = total + parseInt(sizes[i].textContent) * parseInt(quantaties[i].textContent)
	}
	document.querySelector(".total").textContent = total
}


addBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        add(i)
		total()
    })
})

subBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sub(i)
		total()
    })
})

function sub(index){
    var num = parseInt(quantaty[index].innerText)
    if(num == 0){
        alert("Subtraction Limit!")
    } else {
    quantaty[index].innerText = num - 1
    }
}

function add(index){
    var num = parseInt(quantaty[index].innerText)
    quantaty[index].innerText = num + 1
}

function success() {
	alert("Successfully Checked Out")
}