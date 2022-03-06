export interface Eq<T> {
  equals: (a: T) => (b: T) => boolean
}
