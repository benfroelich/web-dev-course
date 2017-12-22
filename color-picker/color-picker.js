var hardNumColors = 6;
var easyNumColors = 3;
var numColors = hardNumColors;
var colorTiles = document.querySelectorAll(".color-tile");
var body = document.querySelector("body");
var bodyColor = window.getComputedStyle(body, null).backgroundColor;
// color chosen for the game as the correct color
var colors = generateRandomColors(numColors);
var pickedColor = pickColor();
var won = false;
var colorTitle = document.querySelector("#color-display");
var winMessage = document.querySelector("#status-message");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");

// initialize the game
reset();
// create event handlers
for(var i = 0; i < colorTiles.length && i < colors.length; i++) {
	// add event listener to check for a match upon clicking
	colorTiles[i].addEventListener("click", function (event) {
		if(!won) {
			if(event.target.style.backgroundColor === pickedColor) {
				setWon();
			}
			// wrong tile, blank it out
			else {
				winMessage.textContent = "Try Again"
				event.target.style.visibility = "hidden";
			}		
		}
	});
}
// call the reset function at page load and also here, 
// when the button is pressed
resetButton.addEventListener("click", reset);
// set up the easy and hard mode listeners
easyButton.addEventListener("click", function () { 
	difficultyChange(easyNumColors);
});
hardButton.addEventListener("click", function () {
	difficultyChange(hardNumColors);
});
function difficultyChange(newNumColors)
{
	if(newNumColors != numColors)
	{
		easyButton.classList.toggle("selected");
		hardButton.classList.toggle("selected");
	}
	// if the number of colors was different, or the player already won,
	// reset the game and apply the new number of colors
	if(newNumColors != numColors || won)
	{
		numColors = newNumColors;
		reset();
	}
}
// support functions
function setWon()
{
	won = true;
	winMessage.textContent = "You Won!";
	resetButton.textContent = "Play again?"
	// change the color of all tiles and other thematic elements
	// to the winning color
	assignThemeColor(pickedColor);
}

function reset()
{
	// set up the text
	winMessage.textContent = "Guess!"
	resetButton.textContent = "New Colors"
	assignThemeColor(bodyColor);
	colors = generateRandomColors(numColors);
	pickedColor = pickColor();
	applyTileColors();
	colorTitle.textContent = pickedColor.toUpperCase();
	won = false;
}

function assignThemeColor(color)
{
	document.querySelectorAll("h1").forEach(function (el) 
	{
		el.style.backgroundColor = color;
		el.style.visibility = "visible";
	});
	applyTileColors(color);
}

function applyTileColors(singleColor)
{
	// style the background for all tiles and make them visible
	for(var i = 0; i < colorTiles.length && i < colors.length; i++) 
	{
		// apply all available colors as held in the colors array
		if(i < colors.length)
		{
			colorTiles[i].style.backgroundColor = 
				singleColor ? singleColor : colors[i];
			colorTiles[i].style.visibility = "visible";
		}
		else // make all other tiles invisible
		{
			colorTiles[i].style.display = "none";
		}
	}
}

function pickColor() {
	// choose a color at random from the array of colors
	return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(numColors)
{
	var arrayOut = [];
	for(color = 0; color < numColors; color++)
		arrayOut.push(randomColor());
	return arrayOut;
}

function randomColor()
{
	var color = "rgb(";
	for(var component = 0; component < 3; component++)
	{
		if(component) color += ", ";
		color += Math.floor(Math.random() * 256);
	} 
	color += ")";
	return color;
}
