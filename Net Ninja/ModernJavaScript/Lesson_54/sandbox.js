// const button = document.querySelector('button');

// button.addEventListener('click', () => {
// 	console.log('you clicked me');
// });
const ul = document.querySelector('ul');

const button = document.querySelector('button');
console.log(button);

button.addEventListener('click', () => {
	const li = document.createElement('li');
	li.textContent = 'Something new to do';
	ul.prepend(li);
	// ul.append(li);
	// ul.innerHTML += '<li>something new</li>';
});

const items = document.querySelectorAll('li');

items.forEach((item) => {
	item.addEventListener('click', (e) => {
		// e.target.style.textDecoration = 'line-through';
		e.target.remove();
		console.log(e.target);
		// console.log(e);
		// console.log('item clicked');
	});
});

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
// 	console.log('you clicked me');
// });
