import { path } from '../../source/object/path'

describe('path', () => {
  const deepObject = {
    a: { b: { c: 'c' } },
    falseVal: false,
    nullVal: null,
    undefinedVal: undefined,
    arrayVal: ['arr'],
  }
  test('random', () => {
    expect(path(['a', 'b', 'c'])(deepObject)).toBe('c')
    expect(path(['falseVal', 2])(deepObject)).toBe(undefined)
    expect(path([3, 4, 5])(deepObject)).toBe(undefined)
  })
})
