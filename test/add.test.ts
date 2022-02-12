import { add } from '../source/math/add'

describe('simple', () => {
  test('add', () => {
    expect(add(3)(4)).toBe(7)
  })
})

describe('edge case', () => {
  test('NaN', () => {
    expect(add(NaN)(4)).toBe(NaN)
  })

  test('infinity', () => {
    expect(add(Infinity)(4)).toBe(Infinity)
  })

  test('negative infinity', () => {
    expect(add(Infinity)(4)).toBe(Infinity)
  })

  test('infinity add -infinity', () => {
    expect(add(-Infinity)(Infinity)).toBe(NaN)
  })

  test('NaN and Infinity', () => {
    expect(add(NaN)(Infinity)).toBe(NaN)
  })
})
