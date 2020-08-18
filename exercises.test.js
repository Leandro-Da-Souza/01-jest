let exercises = require('./exercises.js');

const { store, retrive } = exercises;

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
