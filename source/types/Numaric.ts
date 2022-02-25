export interface Numaric<T extends number> {
  isValid: (n: number) => n is T
  add?: (a: T) => (b: T) => T | Error
}
