import { Ord } from '../Ord'

export const maxBy =
  <T>(O: Ord<T>) =>
  <A>(f: (a: A) => T) =>
  (a: A) =>
  (b: A): A => {
    if (O.lte(f(a))(f(b))) return b
    return a
  }
