import { Bounded } from '../Bounded'
import { Float } from '../Float'

// Error can not be compare?
export const bounded: Bounded<Float> = {
  top: Number.MAX_VALUE as Float, // technically Error should be the top
  bottom: Number.MIN_VALUE as Float,
  equal: (a) => (b) => {
    if (a instanceof Error && b instanceof Error) return a === b
    if (a instanceof Error || b instanceof Error) return false
    return a === b
  },
  lte: (a) => (b) => {
    if (a instanceof Error && b instanceof Error) return a <= b
    if (a instanceof Error) return false
    if (b instanceof Error) return true
    return a <= b
  },
}
