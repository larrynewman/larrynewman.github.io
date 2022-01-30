var button = document.getElementById('enter');
// var removeButton = document.getElementsByClassName('removeButton');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var li = document.getElementsByTagName('li');

liEvent();

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	// removeButton.appendChild();
	input.value = '';
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function removeListItem() {
	this.li.remove();
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function liEvent() {
	for (i = 0; i < li.length; i++) {
		li[i].addEventListener('click', changeClass);
	}
}
function changeClass() {
	this.classList.toggle('done');
}

button.addEventListener('click', addListAfterClick);
// removeButton.addEventListener('click', removeListItem);
input.addEventListener('keypress', addListAfterKeypress);
