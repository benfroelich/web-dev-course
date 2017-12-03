var colorIndex = 0;
var colors = ["orange", "purple", "grey", "black"];
var buttonMultiColor = document.querySelector("#multiple-colors");
buttonMultiColor.addEventListener("click", function(){
	document.body.style.backgroundColor = colors[colorIndex];
	colorIndex = (colorIndex + 1) % colors.length;
});

var buttonToggleColor = document.querySelector("#toggle-color");
buttonToggleColor.addEventListener("click", function(){
	document.body.removeAttribute("style");
	document.body.classList.toggle("state1");
});