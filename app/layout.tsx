import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Annual Flu Shots',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads Global Site Tag (gtag.js) */}
         <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17014939967"></script>
        <Script>
          {`
            window.dataLayer = window.dataLayer || []; 
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date()); gtag('config', 'AW-17014939967');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
