import { prototypeModifier } from '../../lib/side-effects/prototypeModifier'

// javascript number can be NaN, Infinity, -Infinity
export interface CustomNumberBox {
  value: number
}

export class CustomNumber<N extends CustomNumber<N>> {
  // like ref.current
  value: number

  constructor(a: number) {
    this.value = a
  }

  static isValid(a: number) {
    if (a === NaN || a === Infinity || a === -Infinity) return false
    return true
  }

  static numberToCustomNumber(n: number) {
    if (!CustomNumber.isValid(n)) {
      const TYPE_CONVERSION_ERROR = new Error(
        `Can not convert ${n} into CustomNumber`
      )
      return TYPE_CONVERSION_ERROR
    }

    return new CustomNumber(n)
  }

  // closure
  // operation on members of the subset always produces a member of that subset
  // type convertion helper function
  #newCustomNumber(value: number): N {
    return prototypeModifier(new CustomNumber(value), this as any as N)
  }

  add(b: N): N | Error {
    if (b.value > 0 && this.value > Number.MAX_SAFE_INTEGER - b.value) {
      const ADDITION_OVERFLOW = new Error(
        `Addition between ${b.value} and ${this.value} will overflow`
      )
      return ADDITION_OVERFLOW
    }
    return this.#newCustomNumber(this.value + b.value)
  }

  dec() {
    return this.substract()
  }

  divide(divisor: N): N {
    const quotient = this.value / divisor.value
    return this.#newCustomNumber(quotient)
  }

  inc() {
    return this.add(1 as any as N)
  }

  negate() {
    return this.#newCustomNumber(-this.value)
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
