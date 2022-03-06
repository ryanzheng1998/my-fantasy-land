import { newError } from '../source/newError'
import { Brand } from './Brand'

// Error is the biggest value
export type Float = Brand<number | Error, 'Float'>

type E = Brand<Error, 'Float'>

export const additionOverflow = (a: Float, b: Float) => {
  const ADDITION_OVERFLOW = new Error(
    `Addition between ${a} and ${b} will overflow`
  )
  return ADDITION_OVERFLOW as E
}

export const multiplicationOverflow = (a: Float, b: Float) => {
  const MULTIPLICATION_OVERFLOW = new Error(
    `Multiplication between ${a} and ${b} will overflow`
  )
  return MULTIPLICATION_OVERFLOW as E
}

export const CAN_NOT_DIVIDE_BY_ZERO = new Error() as E

export const WRONG_SETTING = new Error() as E
