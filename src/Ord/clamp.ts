import { Ord } from '../Ord'
import { gt } from './gt'
import { lt } from './lt'

export const clamp =
  <T>(O: Ord<T>) =>
  (minimum: T) =>
  (maximun: T) =>
  (value: T) => {
    const gtO = gt(O)
    const ltO = lt(O)

    if (gtO(value)(maximun)) return maximun
    if (ltO(value)(minimum)) return minimum

    return value
  }
