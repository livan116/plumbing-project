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
import RatingSection from '../components/HomePage_components/RatingSection'
import SubscribeSection from '../components/HomePage_components/SubscribeSection'
import TrustedBrands from '../components/HomePage_components/TrustedBrands'
import PlumbingService from '../components/Why_Choose_Us/PlumbingService'

import image from '../assets/homepage/img2.webp'
import ContactUs from './ContactUs'
import BookingSection from '../components/Booking_Section/BookingSection'

const HomePage = () => {
  return (
    <>
        <div className='Navbar'>
            <Navbar/>
            <HeroSection/>
            <ConsultationSection title={"Get Expert Advice with a Free Consultation!"} para={"Ultrices quam mattis posuere porttitor tellus rhoncus tristique. Primis aliquam dignissim interdum vel suscipit sodales."} image={image} />
            <ServicesSection/>
            <PricingSection />
            <BookingSection/>
            <WhoWeAre />
            <ReviewCarousel/>
            <RatingSection />
            <TrustedBrands/>
            <PlumbingService/>
            {/* <ContactUs/> */}
            <FAQSection/>
            <TeamSection/>
            <SubscribeSection />
            <BlogCarousel/>
            <PipeoFooter/>
        </div>
    </>
  )
}

export default HomePage