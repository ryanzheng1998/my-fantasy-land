export interface Semiring<T> {
  add: (a: T) => (b: T) => T
  zero: T
  mul: (a: T) => (b: T) => T
  one: T
}
