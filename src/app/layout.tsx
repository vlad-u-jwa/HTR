import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HTR Windows & Doors – Alberta Window & Door Replacement',
  description:
    'Alberta\'s #1 rated window and door replacement company. Serving Calgary, Airdrie, Okotoks, Cochrane & all of Alberta. Energy Star certified, 25-year warranty, 0% financing. Get a free quote today.',
  keywords: [
    'window replacement Calgary',
    'door replacement Calgary',
    'windows Calgary',
    'window installation Alberta',
    'energy star windows Calgary',
    'triple pane windows Alberta',
    'HTR windows doors',
  ],
  openGraph: {
    title: 'HTR Windows & Doors – Alberta Window & Door Replacement',
    description:
      'Award-winning window and door replacement across Alberta. 4.9 stars, 25-year warranty, 0% financing up to $40,000.',
    url: 'https://htrwindows.ca',
    siteName: 'HTR Windows & Doors',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-CA" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  )
}
