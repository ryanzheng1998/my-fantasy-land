import { IMPOSSIBLE, newError } from '../newError'
import { Brand } from './Brand'
import { Ord } from './Ord'

export type Float = Brand<number, 'Float'>

const add = (a: Float) => (b: Float) => {
  if (b > 0 && a > Number.MAX_SAFE_INTEGER - b)
    return newError(
      'ADDITION_OVERFLOW',
      `Addition between ${a} and ${b} will overflow`
    )

  const c = a + b

  if (FloatOperator.isValid(c)) {
    return c
  }

  return IMPOSSIBLE
}

const substract = (a: Float) => (b: Float) => {
  // -b
  const negativeB = FloatOperator.negate(b)

  // a + (-b)
  return FloatOperator.add(a)(negativeB)
}

const multiply = (a: Float) => (b: Float) => {
  const result = a * b

  if (result >= Number.MAX_SAFE_INTEGER || result <= Number.MIN_SAFE_INTEGER)
    return newError(
      'MULTIPLICATION_OVERFLOW',
      `Multiplication between ${a} and ${b} will overflow`
    )

  if (FloatOperator.isValid(result)) {
    return result
  }

  return IMPOSSIBLE
}

const ordNumber: Ord<Float> = {
  equals: (a) => (b) => a === b,
  compare: (a) => (b) => a < b ? (a > b ? 1 : -1) : 0,
}

const FloatOperator = {
  isValid: (n: number): n is Float => true,
  add,
  negate: (a: Float) => -a as Float,
  substract,
  multiply,
}

export default FloatOperator
