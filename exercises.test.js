let exercises = require('./exercises.js');
const { isWaterBoiling } = require('./exercises.js');

const { store, retrive, capitalize, intToRoman } = exercises;

// 2a vilka testfall har vi?
it('should store a value', () => {
    // arrange
    const value = [1, 2, true, 'Hey'];

    // act
    let expected = value;
    let actual = store(value);

    expect(actual).toBe(expected);
});

it('should store a value and return the most recently stored value', () => {
    // arrange
    const value = 4;

    // act
    store(value);
    let expected = value;
    let actual = retrive();

    expect(actual).toBe(expected);
});

it('should capitalize giraffe', () => {
    // arrange
    const string = 'Giraffe';

    // act
    let actual = capitalize('giraffe');

    // assert
    expect(actual).toBe(string);
});

it('should capitalize monster', () => {
    // arrange
    let string = 'monster';
    let expected = 'Monster';

    //act
    let actual = capitalize(string);

    //assert
    expect(actual).toBe(expected);
});

it('should return "" for ""', () => {
    let string = '';
    let expected = '';

    let actual = capitalize(string);

    expect(actual).toBe(expected);
});

it('should return "1234" for "1234', () => {
    let string = '1234';
    let expected = '1234';

    let actual = capitalize(string);

    expect(actual).toBe(expected);
});

it('should return true if value is over 100', () => {
    let value = 120;
    let expected = true;

    let actual = isWaterBoiling(value);
    expect(actual).toBe(expected);
});

it('should return false if value is lower than 100', () => {
    let value = 60;
    let expected = false;

    let actual = isWaterBoiling(value);
    expect(actual).toBe(expected);
});

it('should throw an error if input is not a number', () => {
    let value = 'hej';

    let maybeError = () => isWaterBoiling(value);

    expect(maybeError).toThrow();
});

// exercise 6
it('should return the number 5 as a string', () => {
    // arrange
    let num = 5;
    let expected = '5';

    // act
    let actual = intToRoman(num);
    // assert
    expect(actual).toBe(expected);
});

it('should return any given number into a string', () => {
    let num = 4;
    let expected = '4';

    let actual = intToRoman(num);

    expect(actual).toBe(expected);
});

it('should only work between numbers 1 and 18', () => {
    let num = 18;
    let expected = '18';

    let actual = intToRoman(num);

    expect(actual).toBe(expected);
});

it('should throw error if number is lower than 1', () => {
    let num = -24;

    let maybeError = () => intToRoman(num);

    expect(maybeError).toThrow();
});

it('should throw an error if number is higher than 18', () => {
    let num = 500;

    let maybeError = () => intToRoman(num);

    expect(maybeError).toThrow();
});

it('should throw error if parameter is not a number', () => {
    let value = 'hej';

    let maybeError = () => intToRoman(value);

    expect(maybeError).toThrow();
});
