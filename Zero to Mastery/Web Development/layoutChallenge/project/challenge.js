// var age = prompt("What is your age?");
// if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// 	} else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// 	} else if (Number(age) < 18){
//     alert("Sorry, you are too young to drive this car. Powering off");
//     }

 //    function checkDriverAge() {
 //    	var age = prompt("What is your age?");
 //    	if (Number(age) === 18) {
	// alert("Congratulations on your first year of driving. Enjoy the ride!");
	// } else if (Number(age) > 18) {
	// alert("Powering On. Enjoy the ride!");
	// } else if (Number(age) < 18){
 //    alert("Sorry, you are too young to drive this car. Powering off");
 //    }
 //    }

 //    checkDriverAge();


   var checkDriverAge2 = function(age) {
    	if (Number(age) === 18) {
	console.log("Congratulations on your first year of driving. Enjoy the ride!");
	} else if (Number(age) > 18) {
	console.log("Powering On. Enjoy the ride!");
	} else if (Number(age) < 18){
    console.log("Sorry, you are too young to drive this car. Powering off");
    }
    }

    checkDriverAge2(92);

// TWO Ways to create functions:

// METHOD 1 wher the function is explicitly given a name (sayHello)
    // function sayHello() {
    // 	console.log("Hello");
    // }

    // sayHello();

// METHOD 2
// This is called an anonymous function because the function doesn't have a name, but is assigned to a variable which can be called
  //   var sayBye = function() {
  //   	console.log("Bye");
  //   }

 	// sayBye();

// CREATING functions that return a value...

// function multiply(a,b){
// 	return a * b;
// }

// console.log(multiply(5,10));