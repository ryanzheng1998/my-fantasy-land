import { Bounded } from './Bounded'
import { Semigroup } from './Semigroup'

export interface Numeric<T> extends Bounded<T>, Semigroup<T> {}
