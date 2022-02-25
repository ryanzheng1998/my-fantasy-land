import { Predicate } from './types'

export const complement =
  <T>(f: Predicate<T>) =>
  (arg: T) =>
    !f(arg)
