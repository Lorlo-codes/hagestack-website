'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { appParams } from '@/lib/app-params';

type AuthErrorType = 'auth_required' | 'user_not_registered' | 'unknown' | string;

type AuthError = {
  type: AuthErrorType;
  message: string;
};

type AuthContextValue = {
  user: unknown;
  isAuthenticated: boolean;
  isLoadingAuth: boolean;
  isLoadingPublicSettings: boolean;
  authError: AuthError | null;
  appPublicSettings: unknown;
  authChecked: boolean;
  logout: (shouldRedirect?: boolean) => void;
  navigateToLogin: () => void;
  checkUserAuth: () => Promise<void>;
  checkAppState: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<unknown>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(true);
  const [authError, setAuthError] = useState<AuthError | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [appPublicSettings, setAppPublicSettings] = useState<unknown>(null);

  const checkUserAuth = useCallback(async () => {
    if (typeof window === 'undefined') return;
    const base44 = await (await import('@/api/base44Client')).getBase44Client();
    if (!base44) return;
    try {
      setIsLoadingAuth(true);
      const currentUser = await base44.auth.me();
      setUser(currentUser);
      setIsAuthenticated(true);
      setIsLoadingAuth(false);
      setAuthChecked(true);
    } catch (error: unknown) {
      console.error('User auth check failed:', error);
      setIsLoadingAuth(false);
      setIsAuthenticated(false);
      setAuthChecked(true);
      const status = (error as { status?: number }).status;
      if (status === 401 || status === 403) {
        setAuthError({
          type: 'auth_required',
          message: 'Authentication required',
        });
      }
    }
  }, []);

  const checkAppState = useCallback(async () => {
    if (typeof window === 'undefined') {
      setIsLoadingPublicSettings(false);
      setIsLoadingAuth(false);
      setIsAuthenticated(false);
      setAuthChecked(true);
      return;
    }

    // Standalone marketing site: no Base44 app — skip SDK network (avoids long retries on 404).
    if (!appParams.appId) {
      setIsLoadingPublicSettings(false);
      setIsLoadingAuth(false);
      setIsAuthenticated(false);
      setAuthChecked(true);
      setAuthError(null);
      return;
    }

    try {
      setIsLoadingPublicSettings(true);
      setAuthError(null);

      const { createAxiosClient } = await import('@base44/sdk/dist/utils/axios-client');
      const appClient = createAxiosClient({
        baseURL: `/api/apps/public`,
        headers: {
          'X-App-Id': appParams.appId ?? '',
        },
        token: appParams.token ?? undefined,
        interceptResponses: true,
      });

      try {
        const publicSettings = await appClient.get(`/prod/public-settings/by-id/${appParams.appId ?? ''}`);
        setAppPublicSettings(publicSettings);

        if (appParams.token) {
          await checkUserAuth();
        } else {
          setIsLoadingAuth(false);
          setIsAuthenticated(false);
          setAuthChecked(true);
        }
        setIsLoadingPublicSettings(false);
      } catch (appError: unknown) {
        console.error('App state check failed:', appError);
        const err = appError as {
          status?: number;
          data?: { extra_data?: { reason?: string } };
          message?: string;
        };
        if (err.status === 403 && err.data?.extra_data?.reason) {
          const reason = err.data.extra_data.reason;
          if (reason === 'auth_required') {
            setAuthError({
              type: 'auth_required',
              message: 'Authentication required',
            });
          } else if (reason === 'user_not_registered') {
            setAuthError({
              type: 'user_not_registered',
              message: 'User not registered for this app',
            });
          } else {
            setAuthError({
              type: reason,
              message: err.message ?? 'Error',
            });
          }
        } else {
          setAuthError({
            type: 'unknown',
            message: err.message || 'Failed to load app',
          });
        }
        setIsLoadingPublicSettings(false);
        setIsLoadingAuth(false);
        setAuthChecked(true);
      }
    } catch (error: unknown) {
      console.error('Unexpected error:', error);
      const message = error instanceof Error ? error.message : 'An unexpected error occurred';
      setAuthError({
        type: 'unknown',
        message: message || 'An unexpected error occurred',
      });
      setIsLoadingPublicSettings(false);
      setIsLoadingAuth(false);
      setAuthChecked(true);
    }
  }, [checkUserAuth]);

  useEffect(() => {
    void checkAppState();
  }, [checkAppState]);

  const logout = (shouldRedirect = true) => {
    setUser(null);
    setIsAuthenticated(false);
    if (typeof window === 'undefined') return;
    void (async () => {
      const base44 = await (await import('@/api/base44Client')).getBase44Client();
      if (!base44) return;
      if (shouldRedirect) {
        base44.auth.logout(window.location.href);
      } else {
        base44.auth.logout();
      }
    })();
  };

  const navigateToLogin = () => {
    if (typeof window === 'undefined') return;
    void (async () => {
      const base44 = await (await import('@/api/base44Client')).getBase44Client();
      if (!base44) return;
      base44.auth.redirectToLogin(window.location.href);
    })();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoadingAuth,
        isLoadingPublicSettings,
        authError,
        appPublicSettings,
        authChecked,
        logout,
        navigateToLogin,
        checkUserAuth,
        checkAppState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
