import { CustomNumber, CustomNumberBox } from './CustomNumber'

export class Integer<T extends CustomNumberBox> extends CustomNumber<T> {
  static isValid(a: number): boolean {
    return CustomNumber.isValid(a) && Number.isInteger(a)
  }
}
