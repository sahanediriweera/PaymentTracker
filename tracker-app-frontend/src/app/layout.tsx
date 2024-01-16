import type { Metadata } from 'next'
import NavigationBar from '@/components/NavigationBar/navigationBar'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/lib/provider'



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
    <html lang="en">
      <body className="font-sans">
        <NavigationBar />
        {children}
      </body>
    </html>
    </Providers>
  );
}
