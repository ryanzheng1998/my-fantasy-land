import { pipe } from '../../source/function/pipe'

const add = (x: number) => (y: number) => x + y
const format = (n: number) => `value: ${n.toString()}`
const upper = (s: string) => s.toUpperCase()

const process = pipe(add(2)).f(add(6)).f(format).f(upper).build()
