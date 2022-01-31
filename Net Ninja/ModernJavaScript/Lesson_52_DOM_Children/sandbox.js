// GET AN ELEMENT BY ID
// const title = document.getElementById('page-title');
// console.log(title);

// GET ELEMENTS BY THEIR CLASS NAME
// const errors = document.getElementsByClassName('error');
// console.log(errors);

// GET ELEMENTS BY THEIR TAG NAME
// const paras = document.getElementsByTagName('p');
// console.log(paras);

// HOW TO CHANGE CONTENT INSIDE AN HTML ELEMENT
// const head = document.querySelector('h1');
// const para = document.querySelector('p');

// console.log(para.innerText)

// head.innerHTML = 'New Heading!';
// console.log(head.innerText);
// para.innerText += ' and Ninjas are awesome!';
// console.log(para.innerText);
// The "+= above appends text instead of replacing"

// HOW TO CHANGE CONTENT INSIDE MULTIPLE HTML ELEMENTS

// const paras = document.querySelectorAll('p');
// paras.forEach((paras) => {
// 	paras.innerText += ' === some more appended text';
// });

// HOW TO CHANGE THE HTML INSIDE AN HTML ELEMENT

// const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML =
// 	'<h2>Different content</h2><p>More para text.</p><button>Click Me!</button><ul><li>Item 1</li><li>Item 2</li></ul>';

// HOW TO GET AND CHANGE HTML ATTRIBUTES
// Example 1...
// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'http://greatbigcloud.com');
// link.innerText = 'Great Big Cloud Website';
// console.log(link.getAttribute('href'));

// Example 2...
// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// console.log(mssg.getAttribute('class'));
// mssg.innerText = 'Success!';
// Can also add new attrributes...
// mssg.setAttribute('style', 'color: green;');

// Example 3...setting new styles to HTML elements...the problem with this approach is that it completely replaces ay existing styles...See Example 4 for a better way...
// const title = document.querySelector('h1');
// title.setAttribute('style', 'margin: 50px');

// Example 3...adding an additional style to an element without eliminating other existing styles...
// const title = document.querySelector('h1');
// console.log(title.style);
// console.log(title.style.color);
// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '2.5em';
// title.style.borderTopWidth = '5px';
// title.style.borderTopStyle = 'solid';
// title.style.borderTopColor = 'orange';

// HOW TO SHOW LIST OF CLASSES FOR ANY HTML ELEMENT...
const paras = document.querySelectorAll('p');

paras.forEach((p) => {
	if (p.textContent.includes('error')) {
		p.classList.add('error');
	}
	if (p.textContent.includes('success')) {
		p.classList.add('success');
	}
});

// HOW TO TOGGLE CLASSES
// const title = document.querySelector('.title');
// title.classList.toggle('test');

// HOW TO ADD AND REMOVE CLASSES FROM AN HTML ELEMENT...
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// HOW TO CREATE AN ARRAY OF DOM ELEMENTS

const article = document.querySelector('article');

// THIS CREATES A COLLECTION...THE PROBLEM WITH THIS IS THAT WE CAN'T RUN forEach on a collection, so we need to do the same thing with in an array
console.log(article.children);

// THIS CREATES AN ARRAY...
console.log(Array.from(article.children));

// TO ADD A NEW CLASS TO EACH OF THE CHILD ELEMENTS OF THE ARTICLE...
Array.from(article.children).forEach((child) => {
	child.classList.add('article-element');
});

// HOW TO GET PARENT...
const articleTitle = document.querySelector('h2');
console.log(articleTitle);
console.log(articleTitle.parentElement);
console.log(articleTitle.parentElement.parentElement);
console.log(articleTitle.nextElementSibling);
console.log(articleTitle.previousElementSibling);

// // chaining
console.log(articleTitle.nextElementSibling.parentElement.children);
// // Line below changes "HTML Collection" above to an array....
// console.log(Array.from(articleTitle.nextElementSibling.parentElement.children));

// const errors = document.getElementsByClassName('error');
// console.log('errors.classList');
// const success = document.getElementsByClassName('error');
// console.log('success.classList');
