import React from 'react'
import Navbar from '../components/Navbar'
import BannerSection from '../components/HomePage_components/BannerSection'
import PricingSection from '../components/HomePage_components/PricingSection'
import ServicesSection from '../components/HomePage_components/ServicesSection'
import PipeoFooter from '../components/footer/PipeoFooter'
import ConsultationSection from '../components/HomePage_components/ConsultationSection'
import img from "../assets/homepage/img1.webp"

const PricingPage = () => {
  return (
    <>
        <Navbar/>
        <BannerSection title={'Pricing'}/>
        <PricingSection/>
        <ServicesSection/>
        <ConsultationSection title={"Get Expert Advice with a Free Consultation!"} para={"Ultrices quam mattis posuere porttitor tellus rhoncus tristique. Primis aliquam dignissim interdum vel suscipit sodales."} image={img} />
        <PipeoFooter/>
    </>
  )
}

export default PricingPage