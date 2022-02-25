import { Predicate } from './types'

export const ifElse =
  <T>(condition: Predicate<T>) =>
  <U>(onTrue: (arg: T) => U) =>
  <V>(onFalse: (arg: T) => V) => {
    return (arg: T) => (condition(arg) ? onTrue(arg) : onFalse(arg))
  }
