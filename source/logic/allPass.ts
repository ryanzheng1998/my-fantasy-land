import { Predicate } from './types'

// Todo: fix this
// assume all the functions only have one argument
export const allPass =
  <T>(predicates: Predicate<T>[]) =>
  (arg: T) => {
    for (const predicate of predicates) {
      if (!predicate(arg)) return false
    }
    return true
  }
