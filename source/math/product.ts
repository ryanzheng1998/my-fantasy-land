export const product = (list: number[]) =>
  list.reduce((acc, val) => acc * val, 1)
