import { Oswald } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import dotenv from 'dotenv';

dotenv.config();

const inter = Oswald({ subsets: ['latin'], weight:['400'] })

export const metadata = {
  title: 'Nicholas Miyasato Portfolio Page',
  description: 'Nicholas Daisuke Miyasato, Software Developer, UI/UX',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
  id="adsbygoogle-init"
  strategy="afterInteractive"
  crossOrigin="anonymous"
  src= "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9956325944890803"
/>
      <body className={inter.className}>{children}
      
      <Analytics/>
      </body>
    </html>
  )
}