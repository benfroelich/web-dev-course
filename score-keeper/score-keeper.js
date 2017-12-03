var initialPlayTo = 5;
var stateEnum = 
{
	PLAYING : 0,
	WON : 1,
};	
var state = stateEnum.PLAYING;

// DOM elements 
var playerScores = document.querySelectorAll("h1#player-scores > .score");
var playerButtons = document.querySelectorAll("button.score-btn");
var playingTo = document.querySelector("span#playing-to");
var playToInput = document.querySelector("input#play-to");
var resetButton = document.querySelector("#reset");

playingTo.textContent = initialPlayTo;
playToInput.onchange = function() {
	playingTo.textContent = Number(this.value);
	reset();
};

function reset() {	
	for(var i = 0; i < playerScores.length; i++)
	{
		playerScores[i].textContent = "0";
		playerScores[i].classList.remove("winner");
	}
	state = stateEnum.PLAYING;
}

function handlePlayerScore(event) {
	switch(state)	{
		case stateEnum.PLAYING:
			var score = Number(event.currentTarget.score.textContent) + 1;
			event.currentTarget.score.textContent = score;
			if(score >= Number(playingTo.textContent))	// player won!
			{
				state = stateEnum.WON;
				event.currentTarget.score.classList.add("winner");
			}
			break;
		case stateEnum.WON:
			break;	// don't do anything if we already won
	}
}

// start w/ a reset
reset();
// set up the buttons and scores
for(var i = 0; i < playerScores.length; i++)
{
	// link the button to the score span
	playerButtons[i].score = playerScores[i];
	// register the button click events
	playerButtons[i].addEventListener("click", handlePlayerScore);
}
// register the reset button
resetButton.addEventListener("click", reset);
