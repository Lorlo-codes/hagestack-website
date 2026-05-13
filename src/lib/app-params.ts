const isBrowser = typeof window !== 'undefined';

const serverStore: Record<string, string> = {};

function getStorage(): Pick<Storage, 'getItem' | 'setItem' | 'removeItem'> {
  if (isBrowser) return window.localStorage;
  return {
    getItem: (key: string) => serverStore[key] ?? null,
    setItem: (key: string, value: string) => {
      serverStore[key] = value;
    },
    removeItem: (key: string) => {
      delete serverStore[key];
    },
  };
}

function toSnakeCase(str: string) {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

function env(key: string): string | undefined {
  return process.env[key];
}

/** Vite-era names still supported via NEXT_PUBLIC_VITE_* */
function legacyEnv(name: string): string | undefined {
  return process.env[`NEXT_PUBLIC_VITE_${name}`];
}

function getAppParamValue(
  paramName: string,
  { defaultValue, removeFromUrl = false }: { defaultValue?: string; removeFromUrl?: boolean } = {},
): string | null {
  if (!isBrowser) {
    return defaultValue ?? null;
  }
  const storage = getStorage();
  const storageKey = `base44_${toSnakeCase(paramName)}`;
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get(paramName);
  if (removeFromUrl) {
    urlParams.delete(paramName);
    const newUrl = `${window.location.pathname}${urlParams.toString() ? `?${urlParams.toString()}` : ''}${window.location.hash}`;
    window.history.replaceState({}, document.title, newUrl);
  }
  if (searchParam) {
    storage.setItem(storageKey, searchParam);
    return searchParam;
  }
  if (defaultValue) {
    storage.setItem(storageKey, defaultValue);
    return defaultValue;
  }
  const storedValue = storage.getItem(storageKey);
  if (storedValue) {
    return storedValue;
  }
  return null;
}

function getAppParams() {
  if (isBrowser && getAppParamValue('clear_access_token') === 'true') {
    const s = getStorage();
    s.removeItem('base44_access_token');
    s.removeItem('token');
  }
  const defaultFromUrl = isBrowser ? window.location.href : '';
  return {
    appId:
      getAppParamValue('app_id', {
        defaultValue: env('NEXT_PUBLIC_BASE44_APP_ID') ?? legacyEnv('BASE44_APP_ID') ?? undefined,
      }) ?? null,
    token: getAppParamValue('access_token', { removeFromUrl: true }),
    fromUrl: getAppParamValue('from_url', { defaultValue: defaultFromUrl }),
    functionsVersion:
      getAppParamValue('functions_version', {
        defaultValue: env('NEXT_PUBLIC_BASE44_FUNCTIONS_VERSION') ?? legacyEnv('BASE44_FUNCTIONS_VERSION') ?? undefined,
      }) ?? null,
    appBaseUrl:
      getAppParamValue('app_base_url', {
        defaultValue: env('NEXT_PUBLIC_BASE44_APP_BASE_URL') ?? legacyEnv('BASE44_APP_BASE_URL') ?? undefined,
      }) ?? null,
  };
}

export const appParams = {
  ...getAppParams(),
};
