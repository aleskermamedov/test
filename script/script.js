const headers = document.querySelectorAll(".accordion");
// const arrow = document.querySelectorAll(".directions__more")
// console.log("arrow", arrow)

console.log("headers", headers)


headers.forEach( function(item){
	item.addEventListener("click", headerClick);
});

function headerClick() {
	console.log("Fired");
	this.nextElementSibling.classList.toggle("accordion__list")
};



