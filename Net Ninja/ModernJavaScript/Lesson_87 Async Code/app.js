const getTodos = (resource, callback) => {
	const request = new XMLHttpRequest();

	request.addEventListener('readystatechange', () => {
		if (request.readyState === 4 && request.status === 200) {
			const data = JSON.parse(request.responseText);
			callback(undefined, data);
		} else if (request.readyState === 4) {
			callback('could not fetch data', undefined);
		}
	});

	// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
	request.open('GET', resource);
	request.send();
};

getTodos('todos/larrio.json', (err, data) => {
	console.log(data);
	getTodos('todos/mario.json', (err, data) => {
		console.log(data);
		getTodos('todos/luigi.json', (err, data) => {
			console.log(data);
		});
	});
});

// getTodos();

// let call1 = function () {
// 	console.log('Call1 was called after 4000 milliseconds.');
// };

// let call2 = function () {
// 	console.log('call2 was called after 1000 milliseconds.');
// };

// setTimeout(function () {
// 	console.log('Anonymous function called after 7000 milliseconds.');
// }, 7000);

// setTimeout(call1, 4000);
// setTimeout(call2, 1000);

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv //
// SIMPLE EXAMPLE OF ASYNC CODE WHERE A FUNCTION IS CALLED WITHIN ANOTHER FUNCTION WITH A TIME DELAY (addEventListener which doesn't occur immediately, it has to wait until the event takes place...in this case, a click event)
let btn = document.querySelector('#firstButton');

btn.addEventListener('click', function (e) {
	console.log('The button was clicked.');
});
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv //
// STUDENTS ASYNC CODE
// let students = [
// 	{ name: 'Mary', score: 90, school: 'East' },
// 	{ name: 'James', score: 100, school: 'East' },
// 	{ name: 'Steve', score: 40, school: 'East' },
// 	{ name: 'Gabe', score: 90, school: 'West' },
// 	{ name: 'Rachel', score: 85, school: 'East' },
// 	{ name: 'Rochelle', score: 95, school: 'West' },
// 	{ name: 'Lynette', score: 75, school: 'East' },
// ];

// let processStudents = function (data, callback) {
// 	for (let i = 0; i < data.length; i++) {
// 		if (data[i].school.toLowerCase() === 'east') {
// 			if (typeof callback === 'function') {
// 				callback(data[i]);
// 			}
// 		}
// 	}
// };

// processStudents(students, function (obj) {
// 	if (obj.score > 85) {
// 		console.log(obj.name + ' passed.');
// 	}
// });

// let determineTotal = function () {
// 	let total = 0,
// 		count = 0,
// 		classAvg = 0;

// 	processStudents(students, function (obj) {
// 		total = total + obj.score;
// 		count++;
// 	});
// 	console.log('Total of all scores: ' + total);
// 	console.log('Total number of scores: ' + count);
// 	console.log('Class average score: ' + total / count);
// };
// determineTotal();
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //

// ICE CREAM EXAMPLE WITH PROMISES
// BASIC EXAMPLE

// function one(call_two) {
//   console.log(" step 1 complete. please call step 2 ");
//   call_two();
// }

// function two() {
//   console.log(" step 2 ");
// }

// one(two);

// ---------------------------------------------------------- //

// EXAMPLE OF MAKING AND SERVING ICE CREAM USING PROMISES

// let stock = {
// 	fruits: ['strawberry', 'grape', 'banana', 'apple'],
// 	liquid: ['water', 'ice'],
// 	holder: ['cone', 'cup', 'stick'],
// 	toppings: ['chocolate', 'peanuts'],
// };

// let is_shop_open = true;

// let order = (time, work) => {
// 	return new Promise((resolve, reject) => {
// 		if (is_shop_open) {
// 			setTimeout(() => {
// 				resolve(work());
// 			}, time);
// 		} else {
// 			reject(console.log('Our shop is closed.'));
// 		}
// 	});
// };

// order(2000, () => console.log(`${stock.fruits[0]} was selected.`))
// 	.then(() => {
// 		return order(0000, () => console.log('Production has started'));
// 	})

// 	.then(() => {
// 		return order(2000, () => console.log('The fruit waws chopped.'));
// 	})

// 	.then(() => {
// 		return order(1000, () => console.log('Machine was started.'));
// 	})

// 	.then(() => {
// 		return order(2000, () => {
// 			console.log(`ice cream placed on ${stock.holder[0]}`);
// 		});
// 	})

// 	.then(() => {
// 		return order(3000, () => {
// 			console.log(`${stock.toppings[0]} was selected`);
// 		});
// 	})

// 	.then(() => {
// 		return order(1000, () => console.log('Ice cream was served'));
// 	})

// 	.catch(() => {
// 		console.log('Customer left.');
// 	})

// 	.finally(() => {
// 		console.log('Day ended, shop is closed');
// 	});

// EXAMPLE OF MAKING AND SERVING ICE CREAM USING ASYNC/AWAIT
// let stock = {
// 	fruits: ['strawberry', 'grape', 'banana', 'apple'],
// 	liquid: ['water', 'ice'],
// 	holder: ['cone', 'cup', 'stick'],
// 	toppings: ['chocolate', 'peanuts'],
// };

// let is_shop_open = true;

// let toppings_choice = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(console.log('Which topping would you like? '));
// 		}, 3000);
// 	});
// };

// async function kitchen() {
// 	console.log(' A ');
// 	console.log(' B ');
// 	console.log(' C ');

// 	await toppings_choice();

// 	console.log(' D ');
// 	console.log(' E ');
// }

// kitchen();

// console.log('Cleaning the dishes.');
// console.log('Cleaning the tables.');
// console.log('Taking other orders.');
