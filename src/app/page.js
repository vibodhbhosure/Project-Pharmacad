import Image from 'next/image'
import FAQs from '@/components/FAQs'
import Contact from '@/components/contact'
import About from '@/components/about'
import CheckoutForm from '@/components/checkout'
import CoursesOffered from '@/components/coursesoffered'
import Banner from '../components/banner'
import AdCarousal from '../components/AdCarousal'
import Card1 from '../components/CarousalCards/Card1'

export default function Home() {
  return (
    <main>
      <Banner />
      <CheckoutForm />
      <CoursesOffered />
      <About />
      <FAQs />
      <Contact />
      {/* <AdCarousal/> */}
      {/* <Card1/> */}
    </main>
  )
}
