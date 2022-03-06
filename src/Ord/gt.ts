import { Field } from '../Field'
import { Float } from '../Float'
import { Numeric } from '../Numaric'
import { Ord } from '../Ord'

export const gt =
  <T>(O: Ord<T>) =>
  (a: T) =>
  (b: T): boolean => {
    return !O.lte(a)(b)
  }
