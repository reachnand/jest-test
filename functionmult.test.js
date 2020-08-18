const functions = require('./functionmult');
test('multiplies 2*3 to equal 6', () => {
    expect(functions.multiply(2,3)).toBe(6);
});
    test('multiplies 2*3 to not equal 5', () => {
        expect(functions.multiply(2,3)).not.toBe(5);
});

//Test 2
test('Fitness for police selection is 24 BMI', () => {
    const weight = 18;
    const height = 6;
    expect(weight + height).toBeLessThanOrEqual(24);
});

test('User should be Anand Salimeda', () => {
    expect(functions.createUser()).toEqual({firstname: 'Anand', lastname: 'Salimeda'});
});