import { Bounded } from '../Bounded'
import { Integer } from '../Integer'

// Error can not be compare?
export const bounded: Bounded<Integer> = {
  top: Number.MAX_SAFE_INTEGER as Integer, // technically Error should be the top: ;
  bottom: Number.MIN_SAFE_INTEGER as Integer,
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
