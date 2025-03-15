import type { Metadata } from 'next';
import { geistMono, geistSans } from '@/config/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Articles App',
  description: 'Una aplicación de articulos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('luego sacar');
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
