import { Dosis } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/common/Navbar'

const dosis = Dosis({ subsets: ['latin'] })

export const metadata = {
  title: 'slackey',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dosis.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
