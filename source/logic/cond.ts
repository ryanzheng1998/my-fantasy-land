import { Predicate } from './types'

export const cond =
  <T, U>(fns: [Predicate<T>, (arg: T) => U][]) =>
  (arg: T) => {
    for (const fn of fns) {
      if (fn[0](arg)) {
        return fn[1](arg)
      }
    }
    return undefined
  }
