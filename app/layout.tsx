import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sanjeevni AI - Your Health Companion',
  description: 'AI-Powered Healthcare Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  )
}
