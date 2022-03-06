import {
  additionOverflow,
  CAN_NOT_DIVIDE_BY_ZERO,
  Integer,
  multiplicationOverflow,
  WRONG_SETTING,
} from '../Integer'
import { Numeric } from '../Numaric'
import { bounded } from './bounded'

export const numaric: Numeric<Integer> = {
  ...bounded,
  add: (a) => (b) => {
    if (a instanceof Error) return a
    if (b instanceof Error) return b

    if (numaric.top instanceof Error) return WRONG_SETTING

    if (b > 0 && a > numaric.top - b) {
      return additionOverflow(a, b)
    }

    return (a + b) as Integer
  },
  zero: 0 as Integer,
  mul: (a) => (b) => {
    if (a instanceof Error) return a
    if (b instanceof Error) return b

    if (numaric.top instanceof Error) return WRONG_SETTING

    const result = a * b

    if (a !== result / b) return multiplicationOverflow(a, b)

    return result as Integer
  },
  one: 1 as Integer,
  sub: (a) => (b) => {
    if (b instanceof Error) return numaric.add(a)(b)
    const negativeB = -b as Integer
    return numaric.add(a)(negativeB)
  },
  div: (a) => (b) => {
    if (b instanceof Error) return numaric.mul(a)(b)
    if (b === 0) return CAN_NOT_DIVIDE_BY_ZERO
    const multiplicativeInverseB = (1 / b) as Integer
    return numaric.mul(a)(multiplicativeInverseB)
  },
}
