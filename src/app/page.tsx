import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import VideoSection from '@/components/VideoSection'
import Products from '@/components/Products'
import WhyUs from '@/components/WhyUs'
import ServiceAreas from '@/components/ServiceAreas'
import Testimonials from '@/components/Testimonials'
import Financing from '@/components/Financing'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <VideoSection />
        <Products />
        <WhyUs />
        <ServiceAreas />
        <Testimonials />
        <Financing />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
