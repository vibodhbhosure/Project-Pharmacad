import Head from "next/head"
import "../styles/globals.css"
import { Inter } from 'next/font/google'
import Navbars from '../components/Navbars'
import Contactbar from '@/components/Contactbar'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="description" content="India’s Best Coaching Class for M. Pharmacy, MBA entrance exams & Abroad Studies for Pharmacy students. Experts in GPAT, NIPER, BITS, Manipal, ICT & other entrance exams, also MBA entrance  (CAT / NMAT / CET / SNAP / XAT / CMAT, etc.) exams. More than 30 tutors & content creators from India’s top ranked institutes like NIPER, BITS, ICT, BCP, Punjab University etc., working together to provide you the best & quality education via offline & online platform." />
        <meta name="theme-color" content="#000" />
        <title>Pharmacad - Best Coaching Class for Pharmacy in Mumbai</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      </Head>
      <body className={inter.className}>
        <Contactbar />
        <Navbars />
        {children}

      </body>

    </html>
  )
}
