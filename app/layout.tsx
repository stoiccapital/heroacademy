import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hero Academy — Raising Warriors in Saigon',
  description:
    'A new academy forming in Ho Chi Minh City. Four pillars: Mind, Body, Spirit, Ikigai. Built by Khoa Van and the brothers and sisters who answer the call.',
  openGraph: {
    title: 'Hero Academy — Raising Warriors in Saigon',
    description:
      'Four pillars: Mind, Body, Spirit, Ikigai. If you see yourself building this with us, come find us.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans bg-ink text-ink-text antialiased">
        <a href="#top" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
