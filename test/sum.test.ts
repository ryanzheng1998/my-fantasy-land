import { sum } from '../source/math/sum'

describe('simple', () => {
  test('sum', () => {
    expect(sum([1, 2.2, 3, -1])).toBe(5.2)
  })
})

describe('edge case', () => {
  test('empty array', () => {
    expect(sum([])).toBe(0)
  })

  test('NaN', () => {
    expect(sum([1, 3, 4, NaN, Infinity])).toBe(NaN)
  })

  test('Infinity', () => {
    expect(sum([1, 3, 5, Infinity])).toBe(Infinity)
  })

  test('mutiple infinity', () => {
    expect(sum([1, 3, 4, Infinity, Infinity])).toBe(Infinity)
  })

  test('multiple infinity 2', () => {
    expect(sum([1, Infinity, -Infinity])).toBe(NaN)
  })

  test('multiple infinity 3', () => {
    expect(sum([1, 3, -Infinity, -Infinity])).toBe(-Infinity)
  })
})
