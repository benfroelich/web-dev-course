var movies = [
{
	title: "The Shawshank Redemption",
	rating: 4.8,
	have_watched: true
},
{
	title: "Spy",
	rating: 3.0,
	have_watched: false
},
{
	title: "Back to the Future",
	rating: 4.2,
	have_watched: false
}]

movies.forEach(function (movie) 
{
	console.log("You have "  
		+ (movie.have_watched === true ? "watched " : "not seen ") 
		+ "\"" + movie.title + "\""
		+ " - " + movie.rating + " stars");
});