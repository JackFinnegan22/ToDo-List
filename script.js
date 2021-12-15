var count = 1;

var moon = document.getElementById('moon');
var sun = document.getElementById('sun');

function add() {
    var btn = document.getElementById('btn');
    var lab = document.getElementById('lab');

    var newcount = count++;
    var task = document.getElementById('task');

    if (newcount % 2 == 0) {
        btn.style.background = "linear-gradient(#57ddff, #c058f3)";
        task.style.textDecoration = "line-through";
        task.style.textDecorationThickness = "2px";

    } else {
        task.style.textDecoration = "none";
        btn.style.background = "linear-gradient(#57ddff, #c058f3)";
    }
}


function nightMode() {
    moon.style.display = "none";
    sun.style.display = "block";

    document.getElementById('background').src = "images/bg-desktop-dark.jpg";
    document.getElementById('body').style.backgroundColor = "black";
    document.getElementById('box').style.backgroundColor = "#25273c";
    document.getElementById('btn').style.backgroundColor = "#25273c";
}
function dayMode() {
    moon.style.display = "block";
    sun.style.display = "none";
    
    document.getElementById('background').src = "images/bg-desktop-light.jpg";
    document.getElementById('body').style.backgroundColor = "white";
    document.getElementById('box').style.backgroundColor = "white";
    document.getElementById('btn').style.backgroundColor = "white";
}