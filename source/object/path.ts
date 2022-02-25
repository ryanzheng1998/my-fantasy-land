export const path =
  (path: (string | number)[]) =>
  <T extends string | number, U>(obj: Record<T, U>) => {
    let temp = obj
    for (const step of path) {
      temp = (temp as any)[step]
      if (temp === undefined) return undefined
    }
    return temp
  }
