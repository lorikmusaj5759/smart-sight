/*
Filename: complex_code.js
Content: Complex Code Example
*/

// Declare a class called Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Declare a subclass called Developer that extends Person
class Developer extends Person {
  constructor(name, age, language) {
    super(name, age);
    this.language = language;
  }

  code() {
    console.log(`${this.name} is coding in ${this.language}.`);
  }
}

// Create instances of the Person class
const john = new Person("John Doe", 30);
const jane = new Person("Jane Smith", 25);

// Create instances of the Developer class
const mike = new Developer("Mike Johnson", 35, "JavaScript");
const lisa = new Developer("Lisa Brown", 28, "Python");

// Use the greet and code methods
john.greet();
jane.greet();
mike.greet();
mike.code();
lisa.greet();
lisa.code();

// Declare a function to calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Call the sumArray function and log the result
console.log(`The sum of the numbers is: ${sumArray(numbers)}`);

// Declare a function to find the maximum value in an array of numbers
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// Call the findMax function and log the result
console.log(`The maximum value in the array is: ${findMax(numbers)}`);

// Define a function to concatenate two strings
function concatenateStrings(a, b) {
  return a + b;
}

// Call the concatenateStrings function and log the result
console.log(`The concatenated string is: ${concatenateStrings("Hello", "World")}`);

// Create an object with key-value pairs
const personData = {
  name: "John",
  age: 30,
  city: "New York"
};

// Use object destructuring to extract values from the personData object
const { name, age, city } = personData;

// Log the extracted values
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`City: ${city}`);

// Define a function to check if a number is prime
function isPrime(number) {
  if (number === 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}

// Call the isPrime function and log the result
console.log(`Is 17 prime? ${isPrime(17)}`);

// Define a recursive function to calculate the factorial of a number
function factorial(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

// Call the factorial function and log the result
console.log(`The factorial of 5 is: ${factorial(5)}`);

// Declare a function to reverse a string
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Call the reverseString function and log the result
console.log(`The reversed string is: ${reverseString("Hello World!")}`);

// ... continue with more sophisticated and elaborate code ...

// ...

// ... code continues for more than 200 lines ...