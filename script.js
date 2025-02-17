console.log("hello world")

//Question 1
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const doubledNums = nums.map(num => num * 2);
console.log(doubledNums);




//Question 2
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [firstTopping, secondTopping] = pizzaToppings;
console.log(firstTopping);
console.log(secondTopping);


//Question 3
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here
  const { make, model } = car;
  console.log(make);
  console.log(model);
  

//Question 4
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

//const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const liamPizzaToppings = [...pizzaToppings];
console.log(liamPizzaToppings);



//Question 5
// Duplicate the following object and spread its values into a new variable `myCar`.

//const car = {
 //   make: 'Audi',
 //   model: 'q5',
 // };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
  const myCar = {...car, model: 'q7'};
  console.log(car);
  console.log(myCar);


//Question 6
 // Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
 const userProfile = {};

 const propertyName = 'age';
 userProfile[propertyName] = '67';
 console.log(userProfile);



 //Question 8
 // Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
function forAnimal(noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}. `);
}

forAnimal();

forAnimal('dog', 'black');
forAnimal('bird', 'white');


//Question 9
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here
pizza === 'tasty' 
console.log('yum');
console.log('yuk');



//Question 10
// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
//const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// Assign LANG the value of localLangConfig or 'en' as a default
const LANG = localLangConfig || 'en';

// Log the result
//console.log('Language setting:', LANG); // Language setting: en
// Log the result
console.log('Language setting:', LANG);



//Question 11
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
  };
  
  let cat; // Your code here
  //const adventurer = {
    name: 'Alice',
 // };
  
  //let cat; // cat is undefined
  
  // Use optional chaining to check for cat.age
  console.log(adventurer.cat?.age); // undefined
  console.log(cat);
  





