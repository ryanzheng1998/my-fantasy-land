import { CustomNumberBox } from './CustomNumber'
import { Integer } from './Integer'

export class NonNegativeInteger<T extends CustomNumberBox> extends Integer<T> {
  static isValid(a: number): boolean {
    return Integer.isValid(a) && a >= 0
  }
}
