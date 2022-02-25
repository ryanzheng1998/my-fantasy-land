// Todo: fix this
// assume all the functions only have one argument
// export type Predicate = (...a: unknown[]) => boolean
// export type Predicate<T> = (a: T) => boolean
export type Predicate<T, U = void, V = void> = T extends void
  ? never
  : U extends void
  ? (arg: T) => boolean
  : V extends void
  ? (arg: T) => (arg: U) => boolean
  : (arg: T) => (arg: U) => (arg: V) => boolean
// export type Predicate = Brand<Function, 'Predicate'>
