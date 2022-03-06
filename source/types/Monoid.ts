import { Semigroup } from './Semigroup'

export interface Monoid<T> extends Semigroup<T> {
  empty: T
}

const fold =
  <T>(M: Monoid<T>) =>
  (as: T[]) => {
    return as.reduce((acc, val) => {
      return M.concat(acc)(val)
    }, M.empty)
  }

const MonoidOperator = {
  fold,
}

export default MonoidOperator
