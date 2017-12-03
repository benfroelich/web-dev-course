function isEven(num)
{
	var num_conv = parseFloat(num);
	if(isNaN(num_conv))
	{
		return undefined;
	}
	return !(num % 2);
}

function kebabToSnake(str)
{
	var modified_str = "";
	for(var c = 0; c < str.length; c++)
	{
		debugger;
		modified_str += str[c] === '-' ? '_' : str[c];
			
	}
	return modified_str;
}


console.log(isEven(prompt("enter a number:")));
console.log(kebabToSnake(prompt("enter a hyphenated string")));

