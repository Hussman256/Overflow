import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bitcoin Research Academy — From Zero to Confident Researcher',
  description:
    'A free, interactive course that teaches anyone to find, evaluate, and produce Bitcoin research. No technical background required.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

/* Runs synchronously before paint — prevents flash of wrong theme */
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('btc-academy-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', t);
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#111111" />
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
