export const pipe = <A, B>(fn: (a: A) => B) => {
  return {
    f: function <C>(g: (x: B) => C) {
      return pipe((arg: A) => g(fn(arg)))
    },
    build: () => fn,
  }
}
