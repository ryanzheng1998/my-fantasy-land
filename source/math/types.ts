export type NatureNumber = Brand<number, 'Nature'>
export type NonNegativeInteger =
  | Brand<number, 'NonNegativeInterger'>
  | NatureNumber
export type Integer = Brand<number, 'Integer'> | NonNegativeInteger
// prevent NaN or Infinity
export type RealNumber = Brand<number, 'RealNumber'> | Integer
