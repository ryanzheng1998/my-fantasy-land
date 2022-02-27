export interface Numeric<T extends number> {
  isValid: (n: number) => n is T
  validate: (n: number) => T | Error
  add: (a: T) => (b: T) => T | Error
  dec: (n: T) => T | Error
  divide: (dividend: T) => (divisor: T) => number | Error
  inc: (n: T) => T | Error
  mean: (list: T[]) => number
  multiply: (multilplicand: T) => (multiplier: T) => T | Error
  negate: (n: T) => T
  substract: (a: T) => (b: T) => T | Error
}
