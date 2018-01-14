// Create a Paper.js Path to draw a line into it:
var path = new Path();
// Give the stroke a color
path.strokeColor = 'red';
var start = new Point(100, 100);
// Move to start and draw a line from there
path.moveTo(start);
// Note the plus operator on Point objects.
// PaperScript does that for us, and much more!
path.lineTo(start + [ 100, -10 ]);

var myCircle = new Path.Circle(new Point(100, 70), 50);

var r = 100;

// dissapearing circle
var circleIntervalHandle = setInterval(function ()
{
	myCircle.remove();
	myCircle = new Path.Circle(new Point(100, 70), r);
	myCircle.fillColor = "white"
	r -= 3;
	if(r < 1) 
	{
		clearInterval(circleIntervalHandle);
		myCircle.remove();
	}
}, 15);