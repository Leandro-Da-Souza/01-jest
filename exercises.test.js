let exercises = require('./exercises.js');

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
