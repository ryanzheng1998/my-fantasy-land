import { divide } from '../source/math/divide'

describe('simple', () => {
  test('divide two number', () => {
    expect(divide(4)(2)).toBe(2)
  })
})

describe('edge case', () => {
  test('divisor is zero', () => {
    expect(divide(4)(0)).toBe(Infinity)
  })

  test('divisor is NaN', () => {
    expect(divide(4)(NaN)).toBe(NaN)
  })

  test('dividend is NaN', () => {
    expect(divide(NaN)(4)).toBe(NaN)
  })

  test('infinity', () => {
    expect(divide(4)(Infinity)).toBe(0)
  })

  test('divisor and dividend are infinity', () => {
    expect(divide(Infinity)(Infinity)).toBe(NaN)
  })
})

describe('weird edge case', () => {
  test('divisor is zero', () => {
    expect(divide(4)(0)).toBe(Infinity)
  })

  test('divisor is negative zero', () => {
    expect(divide(4)(-0)).toBe(-Infinity)
  })

  test('infinity', () => {
    expect(divide(4)(Infinity)).toBe(0)
  })

  test('negative infinity', () => {
    expect(divide(4)(-Infinity)).toBe(-0)
  })
})
