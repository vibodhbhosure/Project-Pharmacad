import Image from 'next/image'
import FAQs from '@/components/FAQs'
import Contact from '@/components/contact'
import About from '@/components/about'
import CheckoutForm from '@/components/checkout'
import Banner from '../components/banner'

export default function Home() {
  return (
    <main>
      <Banner />
      <CheckoutForm />
      <About />
      <FAQs />
      <Contact />
    </main>
  )
}
