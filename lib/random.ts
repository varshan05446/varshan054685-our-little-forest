/**
 * Simple deterministic pseudo-random number generator.
 * Useful for generating stable particle properties without calling Math.random during render.
 */
export function seededRandom(seed: number): number {
  const value = (seed * 9301 + 49297) % 233280;
  return value / 233280;
}
