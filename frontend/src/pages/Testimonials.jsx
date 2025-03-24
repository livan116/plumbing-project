import React from 'react'
import ReviewCarousel from '../components/HomePage_components/ReviewCarousel'
import Navbar from '../components/Navbar'
import BannerSection from '../components/HomePage_components/BannerSection'
import PipeoFooter from '../components/footer/PipeoFooter'
import img from "../assets/homepage/img1.webp"
import ConsultationSection from '../components/HomePage_components/ConsultationSection'

const Testimonials = () => {
  return (
   <>
   <Navbar/>
   <BannerSection title={'Testimonials'} />
   <ConsultationSection title={"Get Expert Advice with a Free Consultation!"} para={"Ultrices quam mattis posuere porttitor tellus rhoncus tristique. Primis aliquam dignissim interdum vel suscipit sodales."} image={img} />
    <ReviewCarousel/>
    <PipeoFooter/>
   </>
  )
}

export default Testimonials