var user = {
  username: "andrei",
  password: "supersecret"
}

var database = [
{
  username: "andrei",
  password: "supersecret"
}
];

var newsfeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!"
  }

  {
    username: "Sally",
    timeline: "Javascript is soooo cool!"
  }

  {
    username: "Mitch",
    timeline: "Javascript is preeeetyy cool!"
  }
];












// Method Example https://www.w3schools.com/js/js_object_methods.asp

<!DOCTYPE html>
<html>
<body>

<h2>The JavaScript <i>this</i> Keyword</h2>
<p>In this example, <b>this</b> represents the <b>person</b> object.</p>
<p>Because the person object "owns" the fullName method.</p>

<p id="demo"></p>

<script>
// Create an object:
const person = {
  firstName: "John",
  lastName: "Smith",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();
</script>

</body>
</html>

// HTML output below...

The JavaScript this Keyword
In this example, this represents the person object.

Because the person object "owns" the fullName method.

John Smith


// End of example


// Example of adding method. See https://www.w3schools.com/js/tryit.asp?filename=tryjs_object_method_add

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Objects</h2>
<p id="demo"></p>
<p id="birth"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  birthMonth: "September",
  birthYear: 1961
};
person.name = function() {
  return this.firstName + " " + this.lastName;
};

person.birthdate = function() {
return this.birthMonth + " " + this.birthYear;
};


document.getElementById("demo").innerHTML =
"My father is " + person.name(); 

document.getElementById("birth").innerHTML = "My birth information is " + person.birthdate();
</script>

</body>
</html>


// End of example



var user = {
  name: "John",
  age: 34,
  hobby: "Soccer",
  isMarried: false,
  spells: ["abrakadabra", "shazam", "boo"],
  // NOTE: The shout function below is called a method of the user object
  shout: function() {
    console.log("Ahhhhhh!");
  }
};

// CALL the shout method above like this: user.shout();


var list = [
  {
    username: "andy",
    password: "secret"
  },
  {
    username: "jess",
    password: "123"
  }
  ];

// Access like these examples: 
list[0].username
list[1].password

