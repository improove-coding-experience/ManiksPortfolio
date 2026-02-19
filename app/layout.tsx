import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manik Mahajan | WordPress Developer',
  description: 'WordPress Developer | Headless WordPress Specialist | 3+ Years Experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  )
}
