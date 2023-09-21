import SideBar from '@/components/SideBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Whatsapp Web - Clone',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen max-h-screen flex min-w-full bg-background`}>
        <SideBar/>
        
        {children}
      </body>
    </html>
  )
}
