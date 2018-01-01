init();

function init() {
	// setup button for toggling menu
	// $("#add-item-toggle").text("-");
}

// set up marked complete event
$("ul#todo-list").on("click", "li", function() {
	$(this).toggleClass("done-list-item");
});

// set up delete button to dynamically bind to all delete spans
$("ul#todo-list").on("click", "li span", function(event) {
	// stop propagation here to prevent other listeners
	// from triggering, including a listener on the 
	// parent li that marks it as complete
	event.stopPropagation();
	// fade out the list item, and then delete it from the DOM
	// use .parent() to select the li from the span
	$(this).parent().fadeOut(115, function() {
		$(this).remove();
	});
});

// set up list item input box enter event
$("#add-item-input").on("keypress", function() {
	if(event.keyCode === 13) {
		addTodo($(this).val());
		$(this).val("");
	} 
});

function addTodo(text) {
	var html = "<li>" + text + " <span>X</span></li>";
	$("ul#todo-list").prepend(html);
}

$("#add-item-toggle").on("click", function() {
	$("#add-item-input").toggle();
});

