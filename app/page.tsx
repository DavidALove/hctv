import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import About from '@/components/About'
import Services from '@/components/Services'
import LoneStarNetwork from '@/components/LoneStarNetwork'
import LocalSEO from '@/components/LocalSEO'
import Advertising from '@/components/Advertising'
import WhyUs from '@/components/WhyUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <LoneStarNetwork />
        <LocalSEO />
        <Advertising />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
