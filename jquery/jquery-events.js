// keypress w/ jQuery
$("input").keypress(function(event) {
	console.log("you pressed \'" + String.fromCharCode(event.which)+ "\'");
	if(event.which === 13) alert("entered!")	
})

// button press on all buttons
document.querySelectorAll("button").forEach(function (el) {
	el.addEventListener("mouseenter", function() {
    	console.log("mouse enter");
    })
});

// fade out the divs and remove them from the DOM
$("button#fade").on("click", function() {
	$("div.fadeable").fadeOut(1000, function() {
		$(this).remove();
	});
});	

// toggle the fade without removing from the DOM
$("button#fade-toggle").on("click", function() {
	$("div.fadeable").toggle(1000);
});

// toggle the slide without removing from the DOM
$("button#fade-slide").on("click", function() {
	$("div.fadeable").slideToggle(1000);
});