export interface Eq<T> {
  equal: (a: T) => (b: T) => boolean
}
