import { Predicate } from './types'

// Todo: fix
export const both =
  <T, U = void, V = void>(f: Predicate<T, U, V>) =>
  (g: typeof f): typeof f =>
    ((arg: Parameters<typeof f>[0]) => {
      const fResult = f(arg)
      const gResult = g(arg)

      if (typeof fResult === 'function' && typeof gResult === 'function') {
        const h = both(gResult as Predicate<U, V>)(fResult as Predicate<U, V>)
        return h
      }

      return fResult && gResult
    }) as any
