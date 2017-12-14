listItems = document.querySelectorAll("ol > li");
listItems.forEach(function (element) {
	element.addEventListener("mouseover", function () {
		this.classList.add("active");
	});
	element.addEventListener("mouseout", function () {
		this.classList.remove("active");
	});
		element.addEventListener("click", function () {
		this.classList.toggle("completed");
	});
});