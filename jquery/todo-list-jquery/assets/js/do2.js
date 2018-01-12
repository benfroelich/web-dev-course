init();

function init() {
	// setup button for toggling menu
	// $("#add-item-toggle").text("-");
}

// set up marked complete event
$("ul#todo-list").on("click", "li", function() {
	$(this).toggleClass("done-list-item");
});

// set up delete icon to dynamically bind to all delete spans
$("ul#todo-list").on("click", "li span.icon", function(event) {
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
// add a todo item to the todo list by building a list entry
// with a span with the delet button. Add the todo to the beginning
function addTodo(text) {
	var html = "<li><span class=\"todo-text\">" + text + "</span> <span class=\"icon\"><i class=\"fas fa-trash-alt\"></i></span></li>";
	$("ul#todo-list").prepend(html);
}

$("#add-item-toggle").on("click", function() {
	$("#add-item-input").slideToggle(150);
	$(this).toggleClass("fa-minus");
	$(this).toggleClass("fa-plus");
});

