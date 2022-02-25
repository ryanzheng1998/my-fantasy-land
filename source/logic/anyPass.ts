import { Predicate } from './types'

// Todo: fix this
// assume all the functions only have one argument
export const anyPass =
  <T>(predicates: Predicate<T>[]) =>
  (arg: T) => {
    for (const predicate of predicates) {
      if (predicate(arg)) return true
    }
    return false
  }
