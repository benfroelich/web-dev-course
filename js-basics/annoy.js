var user_response = "";

// simply check for two words
// while(user_response !== "yes" && 
// 	user_response !== "yeah")
// {
// 	user_response = prompt("are we there yet?");
// }


// check that the string contains either word
while(!(user_response.includes("yes") 
	|| user_response.includes("yeah")))
{
	user_response = prompt("are we there yet?")	
}
alert("YAY");