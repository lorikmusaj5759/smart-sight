// Filename: complexCalculator.js

// Complex Calculator
// This JavaScript code defines a complex calculator that performs basic arithmetic operations on complex numbers.
// It supports addition, subtraction, multiplication, division, and exponentiation of complex numbers.

class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(complex) {
    this.real += complex.real;
    this.imaginary += complex.imaginary;
  }

  subtract(complex) {
    this.real -= complex.real;
    this.imaginary -= complex.imaginary;
  }

  multiply(complex) {
    const tempReal = this.real * complex.real - this.imaginary * complex.imaginary;
    const tempImaginary = this.real * complex.imaginary + this.imaginary * complex.real;
    this.real = tempReal;
    this.imaginary = tempImaginary;
  }

  divide(complex) {
    const divisor = complex.real * complex.real + complex.imaginary * complex.imaginary;
    const tempReal = (this.real * complex.real + this.imaginary * complex.imaginary) / divisor;
    const tempImaginary = (this.imaginary * complex.real - this.real * complex.imaginary) / divisor;
    this.real = tempReal;
    this.imaginary = tempImaginary;
  }

  exponentiate(power) {
    const originalReal = this.real;
    const originalImaginary = this.imaginary;

    for (let i = 1; i < power; i++) {
      this.multiply(new ComplexNumber(originalReal, originalImaginary));
    }
  }

  toString() {
    return `${this.real} + ${this.imaginary}i`;
  }
}

// Usage Example:

// Create complex numbers
const complex1 = new ComplexNumber(3, 2);
const complex2 = new ComplexNumber(1, 4);

// Perform calculations
complex1.add(complex2);
complex1.subtract(complex2);
complex1.multiply(complex2);
complex1.divide(complex2);
complex1.exponentiate(3);

// Print the result
console.log(`Result: ${complex1}`);