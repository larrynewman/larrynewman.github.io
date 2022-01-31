// const item = document.getElementById('click');
// item.addEventListener('click', myFunction);
// function myFunction() {
// 	alert('Hey');
// }

const item2 = document.getElementById('click');
item2.addEventListener('click', (myFunction) => {
	alert('Hey!');
});

// const body = document.body;
// const div = document.createElement('div');
// div.innerHTML = '<strong>Hello World 3!</strong>';

// body.append(div);

// const body = document.body;
// const div = document.querySelector('div');
// const spanHi = document.querySelector('#hi');
// const spanBye = document.querySelector('#bye');
// const newText = document.querySelector('#newText');

// TO REMOVE ELEMENT
// spanBye.remove();
//TO ADD BACK IN...
// div.append(spanBye);

// TO REMOVE ATTRIBUTE...
// spanHi.removeAttribute('id');

// TO ADD, REMOVE, and TOGGLE Classses..
// spanHi.classList.add('newClassName');
// spanHi.classList.remove('newClassName');
// spanHi.classList.toggle('className');
//This will also actually add 'className' if it doesn't already exist and of course remove it if it does already exist.

// TO MANIPULATE CSS STYLES...
// Note: Must convert CSS style name to JS camelcase if needed. Example: spanHi.style.backgroundColor = "green" instead of spanHi.style.background-color etc.
// spanHi.style.color = 'blue';

//
// CREATE ELEMENTS
// const div = document.createElement(“div”)

// ADD/REMOVE ELEMENT
// const body = document.body
// body.append(div)
// body.appendChild(div)
// body.append(“Hello World”)
// div.remove()

// MODIFY ELEMENT TEXT
// div.innerText = “Hello World”       -> able to display hidden text (display: none)
// div.textContent = “Hello World”   -> able to display visible text

// MODIFY ELEMENT HTML
// div.innerHTML(“<strong>Hello World</strong>”)
// this code have some security issue, vulnerable from injecting

// This is much secure way.
// const strong = document.createElement(“strong”)
// strong.innerText = “Hello World”
// div.append(strong)

// GET ELEMENT ID/CLASS
// div.innerHTML(“<span id=“hi” data-test=“this is a test”> Hello</span>”)
// const div = document.querySelector(“div”)
// const spanHi = document.querySelector(“#hi”)
// const spanBye = document.querySelector(“#bye”)

// MODIFY ELEMENT ATTRIBUTES
// div.innerHTML(“<span id=“hi” data-test=“this is a test”> Hello</span>”)
// spanHi.getAttribute(“id”)
// spanHi.setAttribute(“id”, ‘newIdName’)
// spanHi.setAttribute(“title”, “new title”)
// spanHi.removeAttribute(“id”)

// MODIFY DATA ATTRIBUTES
// spanHi.dataset -> will return all the data attributes (test: “this is a test”)
// spanHi.dataset.newName = “hi” -> this will add (data-new-name=“hi”) into the element

// MODIFY ELEMENT CLASSES
// div.innerHTML(“<span id=“hi” class=“class1 class2”>Hello</span>”)
// spanHi.classList.add(“class3”)
// spanHi.classList.remove(“class1”)
// spanHi.classList.toggle(“class4”) -> this will remove if exist or add if not
// spanHi.classList.toggle(“class5“, true / false) -> true: add / false: remove

// MODIFY ELEMENT STYLE
// spanHi.style.color = “red”
// spanHi.style.backgroundColor = “blue”
