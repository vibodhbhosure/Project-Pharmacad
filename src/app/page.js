import Image from 'next/image'

import FAQs from '@/components/FAQs'
import Contact from '@/components/contact'
import About from '@/components/about'
import CheckoutForm from '@/components/checkout'
import CoursesOffered from '@/components/coursesoffered'
import About3 from '@/components/aboutpage'


export default function Home() {
  return (
    <main>
      <CheckoutForm/>
      <CoursesOffered/>
      <About/>
      <FAQs/>
      <Contact/>
      <About3/>
    </main>
    
  )
}
