import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Monde Nkuna | Portfolio',
  description: 'System Support Specialist, Data Engineer, Web Developer & Entrepreneur based in Johannesburg. Founder of YES TECH.',
  keywords: ['Monde Nkuna', 'System Support', 'Data Engineer', 'Web Developer', 'YES TECH', 'Johannesburg', 'Technospeak'],
  authors: [{ name: 'Monde Nkuna' }],
  openGraph: {
    title: 'Monde Nkuna | Portfolio',
    description: 'System Support Specialist, Data Engineer, Web Developer & Entrepreneur based in Johannesburg.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
