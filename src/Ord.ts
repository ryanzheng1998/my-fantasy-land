import { Eq } from './Eq'

export interface Ord<T> extends Eq<T> {
  lte: (a: T) => (b: T) => boolean
}
