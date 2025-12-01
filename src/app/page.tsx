import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeaturedMenu from '@/components/FeaturedMenu'
import Services from '@/components/Services'
import EventsPackages from '@/components/EventsPackages'
import DrinksSection from '@/components/DrinksSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedMenu />
      <Services />
      <EventsPackages />
      <DrinksSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

