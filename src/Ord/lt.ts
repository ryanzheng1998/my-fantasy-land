import { Ord } from '../Ord'

export const lt =
  <T>(O: Ord<T>) =>
  (a: T) =>
  (b: T): boolean => {
    return !O.equal(a)(b) && O.lte(a)(b)
  }
