export const defaultTo =
  <T>(defaultVal: T) =>
  <U>(val: U | null | undefined) => {
    if (
      val === null ||
      val === undefined ||
      (typeof val === 'number' && val === NaN)
    )
      return defaultVal

    return val
  }
