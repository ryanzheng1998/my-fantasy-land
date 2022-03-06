import {
  additionOverflow,
  CAN_NOT_DIVIDE_BY_ZERO,
  Float,
  multiplicationOverflow,
  WRONG_SETTING,
} from '../Float'
import { Numeric } from '../Numaric'
import { bounded } from './bounded'

export const numaric: Numeric<Float> = {
  ...bounded,
  add: (a) => (b) => {
    if (a instanceof Error) return a
    if (b instanceof Error) return b

    if (numaric.top instanceof Error) return WRONG_SETTING

    if (b > 0 && a > numaric.top - b) {
      return additionOverflow(a, b)
    }

    return (a + b) as Float
  },
  zero: 0 as Float,
  mul: (a) => (b) => {
    if (a instanceof Error) return a
    if (b instanceof Error) return b

    if (numaric.top instanceof Error) return WRONG_SETTING

    const result = a * b

    if (a !== result / b) return multiplicationOverflow(a, b)

    return result as Float
  },
  one: 1 as Float,
  sub: (a) => (b) => {
    if (b instanceof Error) return numaric.add(a)(b)
    const negativeB = -b as Float
    return numaric.add(a)(negativeB)
  },
  div: (a) => (b) => {
    if (b instanceof Error) return numaric.mul(a)(b)
    if (b === 0) return CAN_NOT_DIVIDE_BY_ZERO
    const multiplicativeInverseB = (1 / b) as Float
    return numaric.mul(a)(multiplicativeInverseB)
  },
}
