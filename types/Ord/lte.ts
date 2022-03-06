import { Ord } from '../Ord'

export const lte =
  <T>(O: Ord<T>) =>
  (a: T) =>
  (b: T): boolean => {
    return O.lte(a)(b)
  }
