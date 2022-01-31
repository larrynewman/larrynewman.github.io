// console.log(1);
// console.log(2);

// let email = 'newman@greatbigcloud.com';
// let result1 = email.indexOf('n');
// let result2 = email.lastIndexOf('n');

// console.log(result1, result2);

// let sliceResult1 = email.slice(0, 40);
// console.log(sliceResult1);

// let result = email.substr(0, 50);
// console.log(result);

// let result3 = email.replace('e', 'w');
// console.log(result3);

// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// console.log(10 / 2);
// let result5 = radius % 3;
// console.log(result5);

// let result6 = pi * radius ** 2;
// console.log(result6);

// TEMPLATE LITERALS
// let title = 'Test Title';
// let author = 'Larry';
// let likes = 50;

// let html = `
// <h2>${title}</h2>
// <p>by ${author}</p>
// <span>This blog has ${likes} likes</span>
// `;
// console.log(html);

// const calcArea = (radius) => {
// 	return 3.14 * radius ** 2;
// };

// const area = calcArea(3);
// console.log('Area is:', area);

// const calcSalesTax = (PercentageRate, amount) => {
// 	return (PercentageRate / 100) * amount;
// };

// let salesTax = calcSalesTax(8.25, 100);
// console.log('Sales Tax is: $', salesTax);

// const score = (
// 	hole1,
// 	hole2,
// 	hole3,
// 	hole4,
// 	hole5,
// 	hole6,
// 	hole7,
// 	hole8,
// 	hole9,
// 	hole10,
// 	hole11,
// 	hole12,
// 	hole13,
// 	hole14,
// 	hole15,
// 	hole16,
// 	hole17,
// 	hole18
// ) => {
// 	return (
// 		hole1 +
// 		hole2 +
// 		hole3 +
// 		hole4 +
// 		hole5 +
// 		hole6 +
// 		hole7 +
// 		hole8 +
// 		hole9 +
// 		hole10 +
// 		hole11 +
// 		hole12 +
// 		hole13 +
// 		hole14 +
// 		hole14 +
// 		hole15 +
// 		hole16 +
// 		hole17 +
// 		hole18
// 	);
// };

// let totalScore = score(4, 5, 3, 6, 4, 4, 4, 3, 5, 7, 3, 4, 3, 4, 5, 3, 4, 8);
// console.log('Score = ', totalScore);

// CALLBACKS

const ul = document.querySelector('.people');

const people = ['Mario', 'Luigi', 'Ryu', 'Shaun', 'Chun-li'];

let html = ``;

people.forEach((person) => {
	// create html template
	html += `<li style="color: blue" size="2em">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;

const employee = {
	firstName: 'Larry',
	lastName: 'Newman',
	age: 60,
	title: 'retired',
	spouse: 'Stephanie',
	fullName: function () {
		return this.firstName + ' ' + this.lastName;
	},
};

console.log(employee);

// const para = document.querySelector('body > ul > li:nth-child(1)');
// const paras = document.querySelectorAll('p');
// console.log(paras);

const paras = document.querySelectorAll('p');
paras.forEach((para) => {
	console.log(para);
});

const errors = document.querySelectorAll('.error');
console.log(errors);
errors.forEach((error) => {
	console.log(error);
});
