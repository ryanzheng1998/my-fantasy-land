import { both } from '../../source/logic/both'

describe('both', () => {
  test('combines two boolean-returning functions into one', () => {
    const greaterThan5SmallerThan10 = both((n: number) => n < 10)((n) => n > 5)
    expect(greaterThan5SmallerThan10(4)).toBe(false)
    expect(greaterThan5SmallerThan10(100)).toBe(false)
    expect(greaterThan5SmallerThan10(NaN)).toBe(false)
    expect(greaterThan5SmallerThan10(Infinity)).toBe(false)
    expect(greaterThan5SmallerThan10(-100)).toBe(false)
  })

  test('accepts functions that take multiple parameters', () => {
    const between = (a: number) => (b: number) => (c: number) => a < b && b < c
    const total20 = (a: number) => (b: number) => (c: number) =>
      a + b + c === 20

    const intermediateTransform =
      (fn: typeof between) => (args: [number, number, number]) =>
        fn(args[0])(args[1])(args[2])

    const i = intermediateTransform

    const f = both(i(between))(i(total20))
    const f2 = both(between)(total20)

    expect(f2(10)(20)(30)).toBe(false)
    expect(f2(0)(5)(15)).toBe(true)
  })
})
