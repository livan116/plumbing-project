import React from 'react'
import ReviewCarousel from '../components/HomePage_components/ReviewCarousel'
import TrustedBrands from '../components/HomePage_components/TrustedBrands'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HomePage_components/HeroSection'
import WhoWeAre from '../components/HomePage_components/WhoWeAre'
import PricingSection from '../components/HomePage_components/PricingSection'
import RatingSection from '../components/HomePage_components/RatingSection'
import FAQSection from '../components/HomePage_components/FAQSection'
import ConsultationSection from '../components/HomePage_components/ConsultationSection'
import PipeoFooter from '../components/footer/PipeoFooter'
import image from "../assets/homepage/img5.webp"

const ClassSchedulePage = () => {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <WhoWeAre/>
    <ReviewCarousel/>
    {/* <PricingSection/> */}
    <RatingSection/>
    <FAQSection/>
    <ConsultationSection title={"Get Expert Advice with a Free Consultation!"} para={"Ultrices quam mattis posuere porttitor tellus rhoncus tristique. Primis aliquam dignissim interdum vel suscipit sodales."} image={image} />
    <TrustedBrands/>
    <PipeoFooter/>
    </div>
  )
}

export default ClassSchedulePage