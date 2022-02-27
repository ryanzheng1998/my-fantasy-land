import { Numeric } from './Numeric'

export type Percentage = Brand<number, 'percentage'>

export const PercentageOperator: Numeric<Percentage> = {
  isValid: (n): n is Percentage => true,
}
