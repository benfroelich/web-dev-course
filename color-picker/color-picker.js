var maxColorTiles = 6;
var colorTiles = document.querySelectorAll(".color-tile");
var body = document.querySelector("body");
var h1Color = "steelblue";
// color chosen for the game as the correct color
var colors = generateRandomColors(numColors);
var pickedColor = pickColor();
var won = false;
var colorTitle = document.querySelector("#color-display");
var winMessage = document.querySelector("#status-message");
var resetButton = document.getElementById("reset");
var difficultySelection = document.getElementsByName("difficulty");
var numColors = Number(difficultySelection[0].value);

// initialize the game
reset();
// create event handlers for all tiles
for(var i = 0; i < maxColorTiles; i++) {
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
// set up the difficulty mode listeners
for(var i = 0; i < difficultySelection.length; i++) {
	var radio = difficultySelection[i];
	radio.addEventListener("click", function(radio) {
		var newNumColors = radio.target.value;
		// if the number of colors was different, or the player already won,
		// reset the game and apply the new number of colors
		if(newNumColors != numColors || won)
		{
			numColors = newNumColors;
			reset();
		}
	});
};
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
	assignThemeColor(h1Color);
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
	});
	applyTileColors(color);
}

function applyTileColors(singleColor)
{
	// style the background for all tiles and make them visible
	for(var i = 0; i < colorTiles.length; i++) 
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
			colorTiles[i].style.visibility = "hidden";
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
// build an string to represent an RGB color
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
