import { Ord } from '../Ord'

export const max =
  <T>(O: Ord<T>) =>
  (a: T) =>
  (b: T): T => {
    if (O.lte(a)(b)) return b
    return a
  }
