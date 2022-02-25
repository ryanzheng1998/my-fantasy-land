import { Integer } from '../../source/types/Integer'

describe('Integer', () => {
  const a = new Integer(3)
  const b = new Integer(4)
  const c = a.add(b)

  test('instanceof type gaurd', () => {
    expect(a instanceof Integer).toBe(true)
    expect(a instanceof Number).toBe(false)
  })

  test('return a new object', () => {
    expect(a === c).toBe(false)
    expect(b === c).toBe(false)
  })
})
