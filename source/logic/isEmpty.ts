export const inEmpty = (x: unknown): boolean => {
  if (typeof x === 'string') return x === ''
  if (typeof x !== 'object') return false
  if (x === null) return false
  if (Array.isArray(x)) return x === []
  return x === {}
}
