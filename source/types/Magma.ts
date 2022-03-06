export interface Magma<T> {
  concat: (a: T) => (b: T) => T
}
