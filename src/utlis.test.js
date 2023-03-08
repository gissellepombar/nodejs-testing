import { sayHello } from "./utils.js";

test('Say Hello Todd', () => {
    expect(sayHello('Todd')).toBe('Hello Todd')
})

test('Say Hello 44', () => {
    expect(sayHello(44)).toBe('Hello 44')
})

test('Say Hello Todd', () => {
    expect(sayHello()).toBe('Hello undefined')
})
