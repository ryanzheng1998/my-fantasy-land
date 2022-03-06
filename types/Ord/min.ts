import { Ord } from '../Ord'

export const min =
  <T>(O: Ord<T>) =>
  (a: T) =>
  (b: T): T => {
    if (O.lte(a)(b)) return a
    return b
  }
