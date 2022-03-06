import { Semiring } from './Semiring'

export interface Ring<T> extends Semiring<T> {
  sub: (a: T) => (b: T) => T
}
