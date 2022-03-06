import { Brand } from './Brand'

// Error is the biggest value
export type Integer = Brand<number | Error, 'Integer'>

type E = Brand<Error, 'Integer'>

export const additionOverflow = (a: Integer, b: Integer) => {
  const ADDITION_OVERFLOW = new Error(
    `Addition between ${a} and ${b} will overflow`
  )
  return ADDITION_OVERFLOW as E
}

export const multiplicationOverflow = (a: Integer, b: Integer) => {
  const MULTIPLICATION_OVERFLOW = new Error(
    `Multiplication between ${a} and ${b} will overflow`
  )
  return MULTIPLICATION_OVERFLOW as E
}

export const CAN_NOT_DIVIDE_BY_ZERO = new Error() as E

export const WRONG_SETTING = new Error() as E
