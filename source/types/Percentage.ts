import { Numaric } from './Numaric'

export type Percentage = Brand<number, 'percentage'>

export const PercentageOperator: Numaric<Percentage> = {
  isValid: (n): n is Percentage => true,
}
