import '../styles/globals.css'
import Footer from '@/components/footer'
import { Inter } from 'next/font/google'
import Navbars from '../components/Navbars'
import Contactbar from '../components/Contactbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Contactbar/>
        <Navbars />
        {children}
        <Footer />
      </body>

    </html>
  )
}
