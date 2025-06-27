/**
 * URL helper functions for the Palia Garden Helper
 */

/**
 * Generates a shareable URL with the given layout parameter
 * @param layoutCode The garden layout save code
 * @param baseUrl Optional base URL (defaults to current origin)
 * @returns Complete URL with layout parameter
 */
export function generateShareableUrl(layoutCode: string, baseUrl?: string): string {
  const base = baseUrl || (typeof window !== 'undefined' ? window.location.origin : '')
  const url = new URL(base)
  url.searchParams.set('layout', layoutCode)
  return url.toString()
}

/**
 * Gets the current layout parameter from the URL
 * @returns Layout parameter value or null if not present
 */
export function getLayoutFromUrl(): string | null {
  if (typeof window === 'undefined') return null
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get('layout')
}

/**
 * Updates the current URL with a layout parameter without reloading the page
 * @param layoutCode The garden layout save code
 */
export function updateUrlWithLayout(layoutCode: string): void {
  if (typeof window === 'undefined') return
  
  const url = new URL(window.location.href)
  url.searchParams.set('layout', layoutCode)
  
  // Update URL without reloading the page
  window.history.replaceState({}, '', url.toString())
}

/**
 * Removes the layout parameter from the current URL
 */
export function clearLayoutFromUrl(): void {
  if (typeof window === 'undefined') return
  
  const url = new URL(window.location.href)
  url.searchParams.delete('layout')
  
  // Update URL without reloading the page
  window.history.replaceState({}, '', url.toString())
} 