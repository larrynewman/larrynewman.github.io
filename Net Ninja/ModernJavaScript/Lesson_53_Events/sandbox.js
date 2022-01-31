// const button = document.querySelector('button');

// button.addEventListener('click', () => {
// 	console.log('you clicked me');
// });

const items = document.querySelectorAll('li');

items.forEach((item) => {
	item.addEventListener('click', (e) => {
		e.target.style.textDecoration = 'line-through';
		console.log(e.target);
		// console.log(e);
		// console.log('item clicked');
	});
});

const button = document.querySelector('button');

button.addEventListener('click', () => {
	console.log('you clicked me');
});
