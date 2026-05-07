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
  title: 'Monde Nkuna | System Support Graduate Portfolio',
  description: 'System Support Graduate, Data Engineer, Web Developer, and entrepreneur based in Johannesburg. Founder of YES TECH FIN.',
  keywords: ['Monde Nkuna', 'System Support Graduate', 'System Support', 'Data Engineer', 'Web Developer', 'YES TECH FIN', 'Johannesburg', 'Technospeak'],
  authors: [{ name: 'Monde Nkuna' }],
  openGraph: {
    title: 'Monde Nkuna | System Support Graduate Portfolio',
    description: 'System Support Graduate, Data Engineer, Web Developer, and entrepreneur based in Johannesburg.',
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
