import { Ord } from './Ord'

export interface Bounded<T> extends Ord<T> {
  top: T
  bottom: T
}
