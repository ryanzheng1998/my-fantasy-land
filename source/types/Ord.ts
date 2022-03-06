import { Eq } from './Eq'

type Ordering = -1 | 0 | 1

export interface Ord<T> extends Eq<T> {
  compare: (x: T) => (y: T) => Ordering
}

const min =
  <T>(O: Ord<T>) =>
  (a: T) =>
  (b: T): T =>
    O.compare(a)(b) === 1 ? b : a

const max =
  <T>(O: Ord<T>) =>
  (a: T) =>
  (b: T) =>
    O.compare(a)(b) === 1 ? a : b

const maxBy =
  <T>(O: Ord<T>) =>
  <U>(fn: (a: U) => T) =>
  (a: U) =>
  (b: U) =>
    max(O)(fn(a))(fn(b))

const minBy =
  <T>(O: Ord<T>) =>
  <U>(fn: (a: U) => T) =>
  (a: U) =>
  (b: U) =>
    min(O)(fn(a))(fn(b))

const gt =
  <T>(O: Ord<T>) =>
  (a: T) =>
  (b: T) =>
    O.compare(a)(b) === 1

const gte =
  <T>(O: Ord<T>) =>
  (a: T) =>
  (b: T) =>
    O.compare(a)(b) !== -1

const lt =
  <T>(O: Ord<T>) =>
  (a: T) =>
  (b: T) =>
    O.compare(a)(b) === -1

const lte =
  <T>(O: Ord<T>) =>
  (a: T) =>
  (b: T) =>
    O.compare(a)(b) !== 1

const clamp =
  <T>(O: Ord<T>) =>
  (min: T) =>
  (max: T) =>
  (value: T) => {
    if (lte(O)(value)(min)) return min
    if (gte(O)(value)(max)) return max
    return value
  }

const between =
  <T>(O: Ord<T>) =>
  (min: T) =>
  (max: T) =>
  (value: T) => {
    if (lt(O)(value)(min) || gt(O)(value)(max)) return false
    return true
  }

const OrdOperation = {
  min,
  max,
  minBy,
  maxBy,
  gt,
  gte,
  lt,
  lte,
  clamp,
  between,
}

export default OrdOperation
