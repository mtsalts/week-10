var addListButton = document.getElementById("add-list");
var removeListButton = document.getElementById("remove-list");
var addItemButton = document.getElementById("add-item");
var removeItemButton = document.getElementById("remove-item");

addListButton.addEventListener("click", function(){
	console.log("button clicked");

	var addListPopUp = document.getElementById("add-list-popup");
	addListPopUp.style.display = "flex";
});

removeListButton.addEventListener("click", function(){
	console.log("x clicked");

	var removeListPopUp = document.getElementById("remove-list");
	removeListPopUp.style.display = "none";
});

addItemButton.addEventListener("click", function(){
	console.log("button clicked");

	var addItemPopUp = document.getElementById("add-item-popup");
	addItemPopUp.style.display = "flex";
});

removeItemButton.addEventListener("click", function(){
	console.log("x clicked");

	var removeItemPopUp = document.getElementById("remove-item");
	removeItemPopUp.style.display = "none";
});

