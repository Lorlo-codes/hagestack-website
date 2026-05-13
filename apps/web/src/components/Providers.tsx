'use client';

import { Toaster } from '@/components/ui/toaster';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { AuthProvider } from '@/lib/AuthContext';
import { AuthGate } from '@/components/AuthGate';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <AuthProvider>
        <AuthGate>{children}</AuthGate>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}
