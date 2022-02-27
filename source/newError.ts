export const newError = (name: string, message: string) => {
  const result = new Error(message)
  result.name = name
  return result
}

export const IMPOSSIBLE = newError('IMPOSSIBLE', 'This should not happen')
