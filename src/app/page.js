import FAQs from '@/components/FAQs'
import Contact from '@/components/contact'
import About from '@/components/about'
import CheckoutForm from '@/components/checkout'
import CoursesOffered from '@/components/coursesoffered'
import About3 from '@/components/aboutpage'
import MediumArticles from '@/components/mediumarticles'



export default function Home() {
  return (
    <main>
      
      <CheckoutForm/>
      {/* <MediumArticles/> */}
      
      <CoursesOffered/>
      <About/>
      <FAQs/>
      <Contact/>
      <About3/>
    </main>
    
  )
}
