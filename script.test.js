const script = require('./script.js');
const { add, subtract, multiply } = script;

// jest har funktionerna it, expect, toBe
it('should return the sum of two numbers', () => {
    // förbered testet (Arrange)
    const x = 4,
        y = 5;

    let expected = x + y;

    // agera, anropa funktionen som ska testas (Act)
    let actual = add(x, y);

    // kör själva tester (Assert)
    expect(actual).toBe(expected);
});

it('should return 14 for the difference between 28 and 14 ', () => {
    // Arrange
    const x = 28;
    const y = 14;

    let expected = x - y;

    let actual = subtract(x, y);

    expect(actual).toBe(expected);
});

it('shoudl return -2 for the difference between 14 and 16 ', () => {
    // Arrange
    const x = 16;
    const y = 14;

    let expected = x - y;

    let actual = subtract(x, y);

    expect(actual).toBe(expected);
});

it('should return the product of two numbers', () => {
    // arrange
    const x = 5,
        y = 25;
    let expected = x * y;

    // act
    let actual = multiply(x, y);

    expect(actual).toBe(expected);
});
