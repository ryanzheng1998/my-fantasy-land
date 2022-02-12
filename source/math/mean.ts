import { sum } from './sum'

export const mean = (list: number[]) => {
  return sum(list) / list.length
}
