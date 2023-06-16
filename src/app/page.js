import Image from 'next/image'

import FAQs from '@/components/FAQs'
import Contact from '@/components/contact'
import About from '@/components/about'
import CheckoutForm from '@/components/checkout'
import CoursesOffered from '@/components/coursesoffered'

export default function Home() {
  return (
    <main>
      
      <CheckoutForm/>
      <CoursesOffered/>
      <About/>
      <FAQs/>
      <Contact/>
      

    </main>
    
  )
}
