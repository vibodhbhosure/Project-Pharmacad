import "../styles/globals.css"
import Footer from '@/components/footer'
import { Inter } from 'next/font/google'
import Navbars from '../components/Navbars'
import Contactbar from '@/components/Contactbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pharmcad - Best Coaching Class for Pharmacy in Mumbai',
  description: '#1 coaching classes for pharmacy in Mumbai',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {/* <Contactbar /> */}
        <Navbars />
        {children}

      </body>
    </html>
  )
}
