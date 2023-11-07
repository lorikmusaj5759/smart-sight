/*
 * Filename: ComplexCodeExample.js
 * Description: This code demonstrates a complex and sophisticated JavaScript program that captures user input to create and manipulate a virtual ecosystem with different populations of plants and animals.
 * Author: [Your Name]
 * Date: [Current Date]
 */

// Define the population class
class Population {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

  increasePopulation() {
    this.size += Math.floor(Math.random() * 10);
    console.log(`${this.name} population increased to ${this.size}`);
  }

  decreasePopulation() {
    this.size -= Math.floor(Math.random() * 10);
    console.log(`${this.name} population decreased to ${this.size}`);
  }
}

// Define a Plant class that extends the Population class
class Plant extends Population {
  constructor(name, size, species) {
    super(name, size);
    this.species = species;
  }

  reproduce() {
    const offspring = new Plant(`${this.species} offspring`, Math.floor(Math.random() * 10), this.species);
    console.log(`A new ${offspring.species} plant has appeared!`);
    return offspring;
  }
}

// Define an Animal class that extends the Population class
class Animal extends Population {
  constructor(name, size, species, sound) {
    super(name, size);
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} ${this.sound}`);
  }
}

// Create an array to store all the populations
const populations = [];

// Initialize the ecosystem with initial populations
populations.push(new Plant("Sunflower", 20, "Helianthus"));
populations.push(new Animal("Lion", 5, "Panthera leo", "roars"));
populations.push(new Animal("Elephant", 10, "Loxodonta africana", "trumpets"));
populations.push(new Plant("Oak tree", 30, "Quercus"));

// Simulate population changes over time
for (let i = 0; i < 10; i++) {
  populations.forEach(population => {
    if (population instanceof Plant) {
      population.increasePopulation();
      populations.push(population.reproduce());
    } else if (population instanceof Animal) {
      population.increasePopulation();
      population.makeSound();
    }
  });
}

// Print the final populations
console.log("Final populations:");
populations.forEach(population => {
  console.log(`- ${population.name}: ${population.size}`);
});