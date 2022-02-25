export const prototypeModifier = <T>(target: object, targetExample: T): T => {
  Object.setPrototypeOf(target, Object.getPrototypeOf(targetExample))
  return target as any as T
}
