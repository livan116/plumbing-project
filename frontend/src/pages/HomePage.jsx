import React from 'react'
import Navbar from '../components/Navbar'
import PipeoFooter from '../components/footer/PipeoFooter'
import HeroSection from '../components/HomePage_components/HeroSection'
import ConsultationSection from '../components/HomePage_components/ConsultationSection'
import ServiceCardsCarousel from '../components/HomePage_components/ServiceCardsCarousel'
import ReviewCarousel from '../components/HomePage_components/ReviewCarousel'
import ServicesSection from '../components/HomePage_components/ServicesSection'
import TeamSection from '../components/HomePage_components/TeamSection'
import PricingSection from '../components/HomePage_components/PricingSection'
import WhoWeAre from '../components/HomePage_components/WhoWeAre'
import BlogCarousel from '../components/HomePage_components/BlogCarousel'
import FAQSection from '../components/HomePage_components/FAQSection'

const HomePage = () => {
  return (
    <>
        <div className='Navbar'>
            <Navbar/>
            <HeroSection/>
            <ReviewCarousel/>
            <ConsultationSection/>
            {/* <ServiceCardsCarousel/> */}
            <WhoWeAre />
            <PricingSection />
            <ServicesSection/>
            <FAQSection/>
            <TeamSection/>
            <BlogCarousel/>
            <PipeoFooter/>
        </div>
    </>
  )
}

export default HomePage