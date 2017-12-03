var timed_action_id;
// counts the number of iterations of the modulated action
var timed_action_iterations = 0;
// smallest interval we will use
var interval = 1000;
// turn on every x times
var modulation_ratio = 4;
var timed_action_repeats = 2;
var turn_it_on = true;

function timedAction()
{
	console.log(Date.now());
	timed_action_iterations++;
	if(timed_action_iterations >= timed_action_repeats)
	{
		timed_action_iterations = 0;
		clearInterval(timed_action_id);
	}
}
function modulateAction()
{
	if(turn_it_on)
	{
		timed_action_id = setInterval(timedAction, interval);
	}
	else
	{
		clearInterval(timed_action_id);
	}
}
modulateAction();
setInterval(modulateAction, interval*modulation_ratio);
