import { Ord } from '../Ord'

export const gte =
  <T>(O: Ord<T>) =>
  (a: T) =>
  (b: T): boolean => {
    return O.equal(a)(b) || !O.lte(a)(b)
  }
