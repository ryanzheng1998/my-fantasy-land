import { Numeric } from './Numeric'

export type NatureNumber = Brand<number, 'natureNumber'>

export const NatureNumberOperator: Numeric<NatureNumber> = {
  isValid: (n): n is NatureNumber => {
    return Number.isInteger(n) && n > 0
  },
  add: (a) => (b) => {
    if (b > 0 && a > Number.MAX_SAFE_INTEGER - b) {
      const ADDITION_OVERFLOW = new Error(
        `Addition between ${a} and ${b} will overflow`
      )
      return ADDITION_OVERFLOW
    }

    const c = a + b
    if (NatureNumberOperator.isValid(c)) {
      return c
    }
    const IMPOSSIBLE = new Error('this should not happen')
    return IMPOSSIBLE
  },
}
