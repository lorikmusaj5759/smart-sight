/**
 * File: sophisticated_code.js
 * Description: A complex JavaScript code example showcasing various advanced concepts and techniques.
 */

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet the person
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array of names
const names = ['John', 'Alice', 'Bob', 'Emily', 'Michael', 'Samantha'];

// Array of Person objects
const people = [];
for (let i = 0; i < 10; i++) {
  const name = names[getRandomNumber(0, names.length - 1)];
  const age = getRandomNumber(20, 50);
  const person = new Person(name, age);
  people.push(person);
}

// Function to filter people above a certain age
function filterPeopleAboveAge(people, minimumAge) {
  return people.filter(person => person.age > minimumAge);
}

// Filter people above age 30
const filteredPeople = filterPeopleAboveAge(people, 30);

// Output the filtered people's details
console.log("Filtered People:");
filteredPeople.forEach(person => person.greet());

// Class representing a Shape
class Shape {
  constructor(color) {
    this.color = color;
  }

  // Method to get the area of a shape
  getArea() {
    throw new Error('Method not implemented.');
  }
}

// Class representing a Rectangle (inherits from Shape)
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  // Method to get the area of a rectangle
  getArea() {
    return this.width * this.height;
  }
}

// Class representing a Circle (inherits from Shape)
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  // Method to get the area of a circle
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Create instances of shapes
const shapes = [
  new Rectangle('red', 5, 10),
  new Circle('blue', 7),
  new Rectangle('green', 3, 6),
  new Circle('yellow', 5)
];

// Calculate the total area of all shapes
let totalArea = shapes.reduce((acc, shape) => acc + shape.getArea(), 0);
console.log(`Total area of all shapes: ${totalArea}`);

// Sort the shapes by their area in descending order
shapes.sort((shape1, shape2) => shape2.getArea() - shape1.getArea());

// Output the sorted shapes
console.log("Sorted Shapes (descending order):");
shapes.forEach((shape, index) => console.log(`${index + 1}. ${shape.color} ${shape.constructor.name}`));

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Reverse a sample string
const sampleString = "Hello, I am a sample string!";
const reversedString = reverseString(sampleString);
console.log(`Reversed string: ${reversedString}`);

// ... Remaining code (over 200 lines) goes here ...

// End of sophisticated_code.js