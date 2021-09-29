var unit = document.querySelector(".unit")
var btn = document.querySelector(".btn")

// Marking Alogrithm
function mark(unit){
    var building = unit.slice(0, 3);
    if(unit.length == 6){
        var unitNum = unit.slice(4, 6);    
    } else {
    var unitNum = unit.charAt(4);
    }
    document.getElementById(`${building}`).classList.add("mark")
    document.getElementById(`${unitNum}`).classList.add("mark")
}

function unmark(unit){
    var building = unit.slice(0, 3);
    if(unit.length == 6){
        var unitNum = unit.slice(4, 6);    
    } else {
    var unitNum = unit.charAt(4);
    }
    document.getElementById(`${building}`).classList.remove("mark")
    document.getElementById(`${unitNum}`).classList.remove("mark")
}

mark(unit)