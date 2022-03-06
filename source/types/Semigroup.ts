import { Magma } from './Magma'

export interface Semigroup<T> extends Magma<T> {}

const fold =
  <T>(S: Semigroup<T>) =>
  (startWith: T) =>
  (as: T[]) => {
    return as.reduce((acc, val) => {
      return S.concat(acc)(val)
    }, startWith)
  }

const SemigroupOperator = {
  fold,
}

export default SemigroupOperator
