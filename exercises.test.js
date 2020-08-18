let exercises = require('./exercises.js');
const { isWaterBoiling } = require('./exercises.js');

const { store, retrive, capitalize } = exercises;

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
