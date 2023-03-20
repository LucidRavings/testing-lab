const {
    returnTwo,
    greeting,
    add
} = require('./functions.js')

test('returnTwo should return the number 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('greeting should return a greeting with the given name input.', () => {
    expect(greeting('James')).toEqual('Hello, James.')
})

test('add should return the sum of two given numbers', () => {
    expect(add(5, 9)).toEqual(14)
})