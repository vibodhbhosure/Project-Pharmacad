import Image from 'next/image'
import FAQs from '@/components/FAQs'
import Contact from '@/components/contact'
import About from '@/components/about'
// import CheckoutForm from '@/components/checkout'
import CoursesOffered from '@/components/coursesoffered'
import Banner from '../components/banner'
import BestChoiceContainer from "../components/BestChoice"
import Carousel from '@/components/Carousel'
import TestimonialsContainer from '@/components/Testimonials'
import MediumArticles from '@/components/mediumarticles'
export default function Home() {
  return (
    <main>
      <Banner />
      <Carousel />
      {/* <CheckoutForm /> */}
      <CoursesOffered />
      <BestChoiceContainer />
      <FAQs />
      <About />
      <TestimonialsContainer />
      <Contact />
      <MediumArticles/>
    </main>
    
  )
}
