import Head from "next/head"
import "../styles/globals.css"
import { Inter } from 'next/font/google'
import Navbars from '../components/Navbars'
import Contactbar from '@/components/Contactbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pharmcad - Best Coaching Class for Pharmacy in Mumbai',
  description: 'India’s Best Coaching Class for M. Pharmacy, MBA entrance exams & Abroad Studies for Pharmacy students. Experts in GPAT, NIPER, BITS, Manipal, ICT & other entrance exams, also MBA entrance  (CAT / NMAT / CET / SNAP / XAT / CMAT, etc.) exams. More than 30 tutors & content creators from India’s top ranked institutes like NIPER, BITS, ICT, BCP, Punjab University etc., working together to provide you the best & quality education via offline & online platform.',
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no',
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
