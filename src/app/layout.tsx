import { Inter } from 'next/font/google';
import './globals.css';

import AppQueryProvider from '@/provider/query-provider';
import { Toaster } from 'sonner';
import { AuthConsumer, AuthProvider } from '@/auth/context';
import { LocalizationProvider } from '@/locales';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans`}>
        <LocalizationProvider>
          <AuthProvider>
            <AppQueryProvider>
              <Toaster position="bottom-right" />
              <AuthConsumer>{children}</AuthConsumer>
            </AppQueryProvider>
          </AuthProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
