// const button = document.querySelector('button');

// button.addEventListener('click', () => {
// 	console.log('you clicked me');
// });
const ul = document.querySelector('ul');

// HOW TO ADD ITEMS
const button = document.querySelector('button');
console.log(button);

button.addEventListener('click', () => {
	const li = document.createElement('li');
	li.textContent = 'Something new to do';
	ul.prepend(li);
	// ul.append(li);
	// ul.innerHTML += '<li>something new</li>';
});

// HOW TO REMOVE A CLICKED ITEM...
const items = document.querySelectorAll('li');
items.forEach((item) => {
	item.addEventListener('click', (e) => {
		e.target.remove();
		// e.items.remove();
	});
});

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
// 	console.log('you clicked me');
// });
