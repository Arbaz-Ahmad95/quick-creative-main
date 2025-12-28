import React from 'react'
import Navbar from './components/Navbar'
import ServicesSection from './Pages/ServicesSection'
import WhyTrustUs from './components/WhyTrustUs'
import Hero from "./components/Hero"
import Footer from './components/Footer'
import CTASection from './components/CTASection'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
       <ServicesSection/>
       <CTASection/>
      <WhyTrustUs/>
      <Footer/>
    </div>
  )
}

export default App
