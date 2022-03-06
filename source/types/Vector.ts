import { Numeric } from './Numeric'

export type Vector = {
  x: number
  y: number
}

export const vector = (x: number, y: number): Vector => ({ x, y })

export const VectorOperation = {
  add: (a: Vector) => (b: Vector) => ({
    x: a.x + b.x,
    y: a.y + b.y,
  }),
  substract:
    (a: Vector) =>
    (b: Vector): Vector => ({
      x: a.x - b.x,
      y: a.y - b.y,
    }),
  multiply: (a: Vector) => (b: Vector) => ({
    x: a.x * b.x,
    y: a.y * b.y,
  }),
  negate: (a: Vector) => ({
    x: -a.x,
    y: -a.y,
  }),
  scale: (a: number) => (v: Vector) => ({
    x: a * v.x,
    y: a * v.y,
  }),
  magnitude: (a: Vector): number => Math.sqrt(a.x * a.x + a.y * a.y),
  normalize: (a: Vector): Vector => ({
    x:
      VectorOperation.magnitude(a) == 0
        ? 0
        : a.x / VectorOperation.magnitude(a),
    y:
      VectorOperation.magnitude(a) == 0
        ? 0
        : a.y / VectorOperation.magnitude(a),
  }),
  inverse: (a: Vector) => ({
    x: 1 / a.x,
    y: 1 / a.y,
  }),
  // 用 lift 不然好麻烦
  clamp: (max: number) => (min: number) => (v: Vector) => ({
    x: clamp(max)(min)(v.x),
    y: clamp(max)(min)(v.y),
  }),
}
