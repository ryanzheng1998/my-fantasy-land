import { Bounded } from './Bounded'
import { Field } from './Field'
import { Ord } from './Ord'

export interface Numeric<T> extends Field<T>, Bounded<T> {}
