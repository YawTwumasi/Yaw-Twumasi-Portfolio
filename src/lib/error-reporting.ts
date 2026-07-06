/**
 * Captures and reports runtime errors to the console.
 * Replace this with your own error tracking service (e.g. Sentry) if needed.
 */
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  console.error("[Portfolio Error]:", error, context);
}
