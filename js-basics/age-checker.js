var age = prompt("enter your age in years");

if(age < 0)
	console.log("error, age negative");
else
{
	if(age == 21) // 21
		console.log("happy 21st bday!");
	if(age % 2) // odd
		console.log("your age is odd.");
	if(Math.sqrt(age) == Math.floor(Math.sqrt(age))) // perfect square
		console.log("perfect sqare")
}
