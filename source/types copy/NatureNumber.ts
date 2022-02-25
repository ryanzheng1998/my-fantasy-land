import { prototypeModifier } from '../../lib/side-effects/prototypeModifier'
import { NonNegativeInteger } from './NonNegativeInteger'

export class NatureNumber<N extends NatureNumber<N>> {
  // like ref.current
  value: number

  constructor(a: number) {
    this.value = a
  }

  static isValid(a: number) {
    return NonNegativeInteger.isValid(a) && a !== 0
  }

  static numberToNatureNumber(n: number) {
    if (!NatureNumber.isValid(n)) {
      const TYPE_CONVERSION_ERROR = new Error(
        `Can not convert ${n} into NatureNumber`
      )
      return TYPE_CONVERSION_ERROR
    }

    return new NatureNumber(n)
  }

  // closure
  // operation on members of the subset always produces a member of that subset
  // type convertion helper function
  #newNatureNumber(value: number): N {
    return prototypeModifier(new NatureNumber(value), this as any as N)
  }

  add(b: N): N | Error {
    if (b.value > 0 && this.value > Number.MAX_SAFE_INTEGER - b.value) {
      const ADDITION_OVERFLOW = new Error(
        `Addition between ${b.value} and ${this.value} will overflow`
      )
      return ADDITION_OVERFLOW
    }
    return this.#newNatureNumber(this.value + b.value)
  }

  dec() {
    return this.substract()
  }

  divide(divisor: N): N {
    const quotient = this.value / divisor.value
    return this.#newNatureNumber(quotient)
  }

  inc() {
    return this.add(1 as any as N)
  }

  negate() {
    return this.#newNatureNumber(-this.value)
  }

  substract(b: N): N | Error {
    const result = this.add(b.negate())

    if (result instanceof Error) {
      const SUBTRACTION_OVERFLOW = new Error(
        `${b.value} - ${this.value} will overflow`
      )
      return SUBTRACTION_OVERFLOW
    }
    return result
  }
}
