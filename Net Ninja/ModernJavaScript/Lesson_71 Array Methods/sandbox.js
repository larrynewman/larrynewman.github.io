// FILTER METHOD

// const scores = [10, 30, 15, 25, 50, 40, 5];

// const highScores = scores.filter(score => score > 30);
// console.log(highScores);

// const users = [
// 	{ name: 'shaun', premium: true },
// 	{ name: 'yoshi', premium: false },
// 	{ name: 'mario', premium: false },
// 	{ name: 'chun-li', premium: true },
// ];

// const premiumUsers = users.filter((user) => user.premium);
// console.log(premiumUsers);

// MAP METHODS
// Example below shows map method used to return a 50% off sale price and store in a new salePrices array.

// const prices = [100, 300, 150, 250, 500, 400, 50];
// const salePrices = prices.map((price) => {
// 	return price / 2;
// });
// Line below is the same as the three lines above just shorter version...
// const salePrices = prices.map((price) => price / 2);

// console.log(salePrices);

// const products = [
// 	{ name: 'gold star', price: 20 },
// 	{ name: 'mushroom', price: 40 },
// 	{ name: 'green shells', price: 30 },
// 	{ name: 'banana skin', price: 10 },
// 	{ name: 'red shells', price: 50 },
// ];
// Scenario: example below shows logic if we want to cut price of all products that originally cost over $30 in half, but retain the others with their original price...

// const saleProducts = products.map((product) => {
// 	if (product.price > 30) {
// 		return { name: product.name, price: product.price / 2 };
// 	} else {
// 		return product;
// 	}
// });
// NOTE: Using map is nondestructive, so the original pricing is still intact in the original object.
// console.log(saleProducts, products);

// REDUCE METHOD
// const scores = [10, 20, 60, 40, 70, 30];
// const result = scores.reduce((acc, curr) => {
// 	if (curr > 50) {
// 		acc++;
// 	}
// 	return acc;
// }, 0); // the zero is the value set as the starting value of the accumulator (counter)
// console.log(result);

// Another example (more complex)
// const scores = [
// 	{ player: 'mario', score: 50 },
// 	{ player: 'yoshi', score: 30 },
// 	{ player: 'mario', score: 70 },
// 	{ player: 'crystal', score: 60 },
// 	{ player: 'mario', score: 60 },
// 	{ player: 'mario', score: 50 },
// ];

// Objective is the add all of mario's scores together.
// const marioTotal = scores.reduce((acc, curr) => {
// 	if (curr.player === 'mario') {
// 		acc += curr.score;
// 	}
// 	return acc;
// }, 0);
// console.log(marioTotal);

// CHAINING METHODS
const products = [
	{ name: 'gold star', price: 30 },
	{ name: 'green shell', price: 10 },
	{ name: 'red shell', price: 40 },
	{ name: 'banana skin', price: 5 },
	{ name: 'mushroom', price: 50 },
];

// const filtered = products.filter((product) => product.price > 20);
// const promos = filtered.map((product) => {
// 	return `the ${product.name} is ${product.price / 2} pounds`;
// });

// shorter version of above code (chained)...
const promos = products
	.filter((product) => product.price > 20)
	.map((product) => `the ${product.name} is ${product.price / 2} dollars`);
console.log(promos);
