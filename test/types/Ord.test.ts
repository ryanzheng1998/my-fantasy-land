import O, { Ord } from '../../source/types/Ord'

describe('Ord', () => {
  const ordNumber: Ord<number> = {
    equals: (a) => (b) => a === b,
    compare: (a) => (b) => a > b ? 1 : a < b ? -1 : 0,
  }

  test('min', () => {
    const min = O.min(ordNumber)

    expect(min(3)(4)).toBe(3)
    expect(min(7)(-10)).toBe(-10)
  })

  test('max', () => {
    const max = O.max(ordNumber)

    expect(max(0)(0)).toBe(0)
    expect(max(8)(0)).toBe(8)
  })

  test('gt', () => {
    const gt = O.gt(ordNumber)

    expect(gt(3)(5)).toBe(false)
    expect(gt(4)(2)).toBe(true)
    expect(gt(3)(3)).toBe(false)
  })

  test('gte', () => {
    const gte = O.gte(ordNumber)

    expect(gte(3)(3)).toBe(true)
    expect(gte(5)(3)).toBe(true)
    expect(gte(8)(10)).toBe(false)
  })

  test('clamp', () => {
    const clamp = O.clamp(ordNumber)

    expect(clamp(3)(9)(10)).toBe(9)
    expect(clamp(3)(9)(0)).toBe(3)
    expect(clamp(3)(9)(4)).toBe(4)
  })
})
