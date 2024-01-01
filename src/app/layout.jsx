import { Oswald } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
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
      <Head>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </Head>
      <body className={inter.className}>{children}
      
      <Analytics/>
      </body>
    </html>
  )
}