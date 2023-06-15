import Image from 'next/image'

import FAQs from '@/components/FAQs'
import Contact from '@/components/contact'
import About from '@/components/about'
import CheckoutForm from '@/components/checkout'

export default function Home() {
  return (
    <main>
      
      <CheckoutForm/>
      <About/>
      <FAQs/>
      <Contact/>
      

    </main>
    
  )
}
