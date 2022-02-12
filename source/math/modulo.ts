import { add } from './add'
import { NatureNumber } from './types'

export const modulo = (dividend: number) => (pseudoMoulus: NatureNumber) => {
  return ((dividend % pseudoMoulus) + pseudoMoulus) % pseudoMoulus
}
