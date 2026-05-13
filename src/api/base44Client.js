let cachedClient = null;

/**
 * Lazy-load Base44 SDK only in the browser so Next.js SSR never executes
 * `@base44/sdk` (it references `window` at import time).
 */
export async function getBase44Client() {
  if (typeof window === 'undefined') return null;
  if (cachedClient) return cachedClient;
  const [{ createClient }, { appParams }] = await Promise.all([
    import('@base44/sdk'),
    import('@/lib/app-params'),
  ]);
  const { appId, token, functionsVersion, appBaseUrl } = appParams;
  cachedClient = createClient({
    appId,
    token,
    functionsVersion,
    serverUrl: '',
    requiresAuth: false,
    appBaseUrl,
  });
  return cachedClient;
}
