const functions = require('./functionmult');
test('multiplies 2*3 to equal 6', () => {
    expect(functions.multiply(2,3)).toBe(6);
});