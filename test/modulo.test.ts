import { modulo } from '../source/math/modulo'
import { NatureNumber } from '../source/math/types'

describe('simple', () => {
  test('modulo', () => {
    expect(modulo(4)(2 as NatureNumber)).toBe(0)
  })

  test('negative dividend', () => {
    expect(modulo(-5)(4 as NatureNumber)).toBe(3)
  })

  test('floating point dividend', () => {
    expect(modulo(3.3)(1 as NatureNumber)).toBeCloseTo(0.3)
  })

  test('floating point dividend2', () => {
    expect(modulo(3.3)(2 as NatureNumber)).toBeCloseTo(1.3)
  })

  test('negative floating point dividend', () => {
    expect(modulo(-5.5)(4 as NatureNumber)).toBeCloseTo(2.5)
  })
})

describe('edge case', () => {
  test('one', () => {
    expect(modulo(3)(1 as NatureNumber)).toBe(0)
  })

  test('Infinity', () => {
    expect(modulo(Infinity)(3 as NatureNumber)).toBe(NaN)
  })

  test('NaN', () => {
    expect(modulo(NaN)(2 as NatureNumber)).toBe(NaN)
  })
})
