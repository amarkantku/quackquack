import { add, multiply } from '../src/index'

test('adds numbers correctly', () => {
  expect(add(2, 3)).toBe(5)
})

test('multiplies numbers correctly', () => {
  expect(multiply(2, 3)).toBe(6)
})
