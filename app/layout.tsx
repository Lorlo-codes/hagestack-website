import type { Metadata } from 'next';
import { DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://hagestack.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'HageStack',
    template: '%s | HageStack',
  },
  description:
    'Expert software development, custom systems, security solutions, and IT consulting services. Building secure, scalable technology for businesses.',
  keywords: [
    'HageStack',
    'software development',
    'custom software',
    'IT consulting',
    'technology consulting',
    'secure systems',
    'business software',
    'web development',
    'systems integration',
    'scalable applications',
    'enterprise IT',
    'Hage',
    'stack',
    'hagestack',
    'surveillance',
    'security',
    'Ghana',
    'CCTV',
    'camera',
    'website',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'HageStack',
    title: 'HageStack - Professional IT solutions for modern businesses',
    description:
      'Expert software development, custom systems, security solutions, and IT consulting services. Building secure, scalable technology for businesses.',
  },
  twitter: {
    card: 'summary',
    title: 'HageStack - Professional IT solutions for modern businesses',
    description:
      'Expert software development, custom systems, security solutions, and IT consulting services. Building secure, scalable technology for businesses.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'j0_J1Y1f0o4AvJoM_JtKEVrwWVBl7o4fWoHsSer64yU',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <Providers>
          <div className="min-h-screen bg-background">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <FloatingCTA />
          </div>
        </Providers>
      </body>
    </html>
  );
}
