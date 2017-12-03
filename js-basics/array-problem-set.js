// print the argument array from highest number element -> 0th element
function printReverse(array)
{
	for(var i = array.length; i > 0; i--)
	{
		console.log(array[i]);
	}
}

function isUniform(array)
{
	var i = 0;
	while(i < array.length - 1 && array[i] === array[i+1]) i++;
	return i === array.length - 1;
}

function sumArray(array)
{
	var accumulated_sum = 0;
	array.forEach(function (item) {
		accumulated_sum += item;
	});
	return accumulated_sum;
}

function max(array)
{
	var max_val = array[0];
	for(var i = 1; i < array.length; i++)
		if(array[i] > max_val) max_val = array[i];
	return max_val;
}

Array.prototype.myForEach = function(func){
	for(var i = 0; i < this.length; i++)
		func(this[i], i);	
}

