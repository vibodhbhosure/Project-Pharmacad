import "../styles/globals.css"
import { Inter } from 'next/font/google'
import Navbars from '../components/Navbars'
import Contactbar from '@/components/Contactbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pharmcad - Best Coaching Class for Pharmacy in Mumbai',
  description: 'India’s Best Coaching Class for M. Pharmacy, MBA entrance exams & Abroad Studies for Pharmacy students.',
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=6,user-scalable=yes',
  robots: 'all',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Contactbar />
        <Navbars />
        {children}

      </body>

    </html>
  )
}
