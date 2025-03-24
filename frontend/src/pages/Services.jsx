import React from 'react'
import Navbar from '../components/Navbar'
import PipeoFooter from '../components/footer/PipeoFooter'
import ReviewCarousel from '../components/HomePage_components/ReviewCarousel'
import BannerSection from '../components/HomePage_components/BannerSection'
import img from "../assets/homepage/img5.webp"
import ConsultationSection from '../components/HomePage_components/ConsultationSection'
import WhoWeAre from '../components/HomePage_components/WhoWeAre'
import TrustedBrands from '../components/HomePage_components/TrustedBrands'
import RatingSection from '../components/HomePage_components/RatingSection'
import ServicesSection from '../components/HomePage_components/ServicesSection'
import FAQSection from '../components/HomePage_components/FAQSection'
import GallerySection from '../components/Gallery/GallerySection'
import TeamSection from '../components/HomePage_components/TeamSection'
import BookingSection from '../components/Booking_Section/BookingSection'
const Services = () => {
  return (
    <div>
      <Navbar/>
      <BannerSection title={'Services'} backgroundImage={img} />
      <WhoWeAre/>
      <ConsultationSection title={"Get Expert Advice with a Free Consultation!"} para={"Ultrices quam mattis posuere porttitor tellus rhoncus tristique. Primis aliquam dignissim interdum vel suscipit sodales."} image={img} />
      <RatingSection/>
      <BookingSection/>
      <ServicesSection/>
      <TrustedBrands/>
      <FAQSection/>
      <ReviewCarousel/>
      <GallerySection/>
      <TeamSection/>
      <PipeoFooter/>
    </div>
  )
}

export default Services