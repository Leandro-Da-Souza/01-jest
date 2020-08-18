const script = require('./script.js');
const add = script.add;
const subtract = script.subtract;

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

it('should return the difference between two numbers', () => {
    // Arrange
    const x = 28;
    const y = 14;

    let expected = x - y;

    let actual = subtract(x, y);

    expect(actual).toBe(expected);
});
