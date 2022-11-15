const { expect } = require('chai');

const Calculator = require('../calculator');

const calc = new Calculator();

describe('Check calculator ADD functionality.', () => {
  it('add function should add two positive numbers', async () => {
    const result = calc.add(1, 2);
    expect(result).to.equal(3);
  });

  it('add function should add more than two numbers, for example 5', async () => {
    const result = calc.add(1, 2, 3, 4, 5);
    expect(result).to.equal(15);
  });

  it('add function should return number which was entered as single number', async () => {
    const result = calc.add(9);
    expect(result).to.equal(9);
  });

  it('add function should add positive and negative numbers', async () => {
    const result = calc.add(-10, 4);
    expect(result).to.equal(-6);
  });

  it('add function should add decimal numbers', async () => {
    const result = calc.add(3, 6.48);
    expect(result).to.equal(9.48);
  });

  it('add function should return an error if any term is not a number', async () => {
    const result = calc.add(7, '3');
    expect(result).to.equal(new Error());
  });
});

describe('Check calculator SUBTRACTION functionality.', () => {
  it('subtraction function should subtract one positive number from another positive', async () => {
    const result = calc.subtraction(5, 5);
    expect(result).to.equal(0);
  });

  it('subtraction function should subtract one negative number from another negative', async () => {
    const result = calc.subtraction(-10, -9);
    expect(result).to.equal(-1);
  });

  it('subtraction function should subtract one positive number from another negative', async () => {
    const result = calc.subtraction(-10, 9);
    expect(result).to.equal(-19);
  });

  it('subtraction function should subtract decimal numbers', async () => {
    const result = calc.subtraction(28.6, 14.6);
    expect(result).to.equal(14);
  });

  it('subtraction function should return NaN if no numbers were entered', async () => {
    const result = calc.subtraction();
    expect(result).to.be.NaN;
  });
});

describe('Check calculator MULTIPLY functionality.', () => {
  it('multiply function should myltiply one positive number on another positive', async () => {
    const result = calc.multiply(5, 5);
    expect(result).to.equal(25);
  });

  it('multiply function should myltiply more than two numbers, for example 5', async () => {
    const result = calc.multiply(1, 2, 3, 4, 5);
    expect(result).to.equal(120);
  });

  it('multiply function should return 0 if on number is 0', async () => {
    const result = calc.multiply(100, 0);
    expect(result).to.equal(0);
  });

  it('multiply function should myltiply decimal numbers', async () => {
    const result = calc.multiply(3.8, 10.6);
    expect(result).to.equal(40.28);
  });

  it('multiply function should myltiply one negative number on another negative', async () => {
    const result = calc.multiply(-10, -9);
    expect(result).to.equal(90);
  });

  it('multiply function should myltiply one positive number on another negative', async () => {
    const result = calc.multiply(-10, 9);
    expect(result).to.equal(-90);
  });

  it('multiply function should return number if one number is number and another is number as string, for example "6"', async () => {
    const result = calc.multiply(10, '6');
    expect(result).to.equal(60);
  });
});

describe('Check calculator DIVIDE functionality.', () => {
  it('divide function should divide one positive number on another positive', async () => {
    const result = calc.divide(5, 5);
    expect(result).to.equal(1);
  });

  it('divide function should divide one positive number on another negative', async () => {
    const result = calc.divide(10, -5);
    expect(result).to.equal(-2);
  });

  it('divide function should divide decimal numbers', async () => {
    const result = calc.divide(2.5, 5);
    expect(result).to.equal(0.5);
  });

  it('divide function should return infinity if one number is divide on 0', async () => {
    const result = calc.divide(16, 0);
    expect(result).to.equal(Infinity);
  });

  it('divide function should return 0 if divisible number is 0 and divider != 0 ', async () => {
    const result = calc.divide(0, 45);
    expect(result).to.equal(0);
  });
});

describe('Check calculator EXPONENTIATION functionality.', () => {
  it('exponentiation function should square positive number', async () => {
    const result = calc.exponentiation(5);
    expect(result).to.equal(25);
  });

  it('exponentiation function should square negative number', async () => {
    const result = calc.exponentiation(-6);
    expect(result).to.equal(36);
  });

  it('exponentiation function should return 0 if number is 0', async () => {
    const result = calc.exponentiation(0);
    expect(result).to.equal(0);
  });

  it('exponentiation function should return number if number as string was entered, for example "9"', async () => {
    const result = calc.exponentiation('9');
    expect(result).to.equal(81);
  });

  it('exponentiation function should work with decimal numbers', async () => {
    const result = calc.exponentiation(0.5);
    expect(result).to.equal(0.25);
  });

  it('exponentiation function should return NaN for text', async () => {
    const result = calc.exponentiation('true');
    expect(result).to.be.NaN;
  });
});
