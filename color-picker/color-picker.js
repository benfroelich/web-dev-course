var colors = ["rgb(255, 0, 0)", 
			  "rgb(0, 255, 0)", 
			  "rgb(0, 0, 255)",
			  "rgb(0, 0, 0)",
			  "rgb(0, 255, 255)",
			  "rgb(255, 255, 0)"];
var colorTiles = document.querySelectorAll(".color-tile");
var body = document.querySelector("body");
var bodyColor = window.getComputedStyle(body, null).backgroundColor;
// color chosen for the game as the correct color
var pickedColor = pickColor();
var won = false;
var colorTitle = document.querySelector("#color-display");
var winMessage = document.querySelector("#status-message");

// set up the title
colorTitle.textContent = pickedColor.toUpperCase();

for(var i = 0; i < colorTiles.length && i < colors.length; i++) {
	// style the background
	colorTiles[i].style.backgroundColor = colors[i];
	// add event listener to check for a match upon clicking
	colorTiles[i].addEventListener("click", function (event) {
		if(!won) {
			if(event.target.style.backgroundColor === pickedColor) {
				won = true;
				winMessage.textContent = "You Won";
			}
			// wrong tile, blank it out
			else {
				event.target.style.visibility = "hidden";
			}		
		}
	});
}


function pickColor() {
	return colors[Math.round(Math.random()*(colors.length-1))];
}
