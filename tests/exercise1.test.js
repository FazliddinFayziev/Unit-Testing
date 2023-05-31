const fizz = require('../exercise1');


describe('FizzBuzz', () => {
    test('should throw if input is number', () => {
        expect(() => { fizz.fizzBuzz(!Number) }).toThrow();
    });

    test('(input % 3 === 0) && (input % 5 === 0)', () => {
        const result = fizz.fizzBuzz(15)
        expect(result).toBe("FizzBuzz");
    });

    test('input % 3 === 0', () => {
        const result = fizz.fizzBuzz(15)
        expect(result).toBe("FizzBuzz");
    });

    test('input % 3 === 0', () => {
        const result = fizz.fizzBuzz(3)
        expect(result).toBe("Fizz");
    });

    test('input % 5 === 0', () => {
        const result = fizz.fizzBuzz(5)
        expect(result).toBe("Buzz");
    });

    test('return', () => {
        const result = fizz.fizzBuzz(1)
        expect(result).toBe(1);
    });
})