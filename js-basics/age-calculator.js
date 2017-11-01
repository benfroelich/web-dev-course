var birth_year = prompt("Please enter your birth year: ");
var birth_month = prompt("Please enter your birth month: ");
var birth_day = prompt("Please enter your birth day: ");
var birthday = new Date(birth_year, birth_month - 1, birth_day);

var days_alive = (Date.now() - birthday.getTime()) / 1000 / 3600 / 24;

var now = new Date();
// manually calculate the number of days alive
var days_alive_manual = 0;
var manual_years = now.getYear() - birthday.getYear();
var manual_months = now.getMonth() - birthday.getMonth();
var manual_days = now.getDate() - birthday.getDate();

// add days for each year preceeding this one
for (var year = birthday.getYear(); year > now.getYear(); year++) 
{
	// leap years have one less day (364) than a normal year (365)
	var days_in_year = year % 4 ? 365 : 364;
	days_alive_manual += days_in_year;
	// i made a change here
}

birthday.getYear()console.log("You've been alive for " + days_alive + " " + "days!");