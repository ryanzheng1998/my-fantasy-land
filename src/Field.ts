import { Ring } from './Ring'

export interface Field<T> extends Ring<T> {
  div: (a: T) => (b: T) => T
}
