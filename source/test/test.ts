import { contramap, Eq } from 'fp-ts/Eq'
import { pipe } from 'fp-ts/function'
import * as N from 'fp-ts/number'
import * as RA from 'fp-ts/ReadonlyArray'

import { Ord, fromCompare } from 'fp-ts/Ord'

const ordNumber: Ord<number> = fromCompare((x, y) =>
  x < y ? -1 : x > y ? 1 : 0
)

function min<A>(O: Ord<A>): (x: A, y: A) => A {
  return (x, y) => (O.compare(x, y) === 1 ? y : x)
}

min(ordNumber)(2, 1) // 1
