import React from 'react'
import BannerSection from "../components/HomePage_components/BannerSection"
import WhoWeAre from "../components/HomePage_components/WhoWeAre"
import TrustedBrands from '../components/HomePage_components/TrustedBrands'
import PipeoFooter from '../components/footer/PipeoFooter'
import TeamSection from '../components/HomePage_components/TeamSection'
import Navbar from '../components/Navbar'
import ServicesSection from '../components/HomePage_components/ServicesSection';
import GallerySection from '../components/Gallery/GallerySection'
import image from "../assets/homepage/img6.webp"
import ConsultationSection from '../components/HomePage_components/ConsultationSection'
import PricingSection from '../components/HomePage_components/PricingSection'

const About = () => {
  return (
    <div>
    <Navbar/>
      <BannerSection/>
      <WhoWeAre />
      <ServicesSection/>
      <TrustedBrands/>
      <GallerySection/>
      <PricingSection/>
      <TeamSection/>
      <ConsultationSection title={"Get Expert Advice with a Free Consultation!"} para={"Ultrices quam mattis posuere porttitor tellus rhoncus tristique. Primis aliquam dignissim interdum vel suscipit sodales."} image={image} />
      <PipeoFooter/>
    </div>
  )
}

export default About