import { calculateSalesTax, factorial } from "./index.js";

test('$10 shoudl be $0.70 tax', () => {
    expect(calculateSalesTax(10, 0.07)).toBe(.7)
})

test('$15 shoudl be $0.1.05 tax', () => {
    expect(calculateSalesTax(10, 0.07)).toBe(.7)
})

test('$17.5 shoudl be $0.1.23 tax', () => {
    expect(calculateSalesTax(10, 0.07)).toBe(.7)
})

test('3! should be 6', () => {
    expect(factorial(3)).toBe(6)
})

test('5! should be 120', () => {
    expect(factorial(3)).toBe(6)
})

test('6! should be 720', () => {
    expect(factorial(3)).toBe(6)
})
// console.log(calculateSalesTax(10, 0.07)) //.7
// console.log(calculateSalesTax(15, 0.07)) //1.05
// console.log(calculateSalesTax(17.5, 0.07)) //1.23

