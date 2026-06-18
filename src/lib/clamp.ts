/** Clamp `value` to the inclusive range defined by `a` and `b` (order-agnostic). */
export function clamp(value: number, a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.min(Math.max(value, min), max);
}
