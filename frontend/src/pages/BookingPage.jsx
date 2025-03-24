import React from 'react'
import BookingSection from '../components/Booking_Section/BookingSection'
import Navbar from '../components/Navbar'
import PipeoFooter from '../components/footer/PipeoFooter'
import BannerSection from '../components/HomePage_components/BannerSection'
import img from '../assets/homepage/img1.webp'

const BookingPage = () => {
  return (
    <>
    <Navbar/>
    <BannerSection title={'Booking Confirmation'} backgroundImage={img} />
    <BookingSection/>
    <PipeoFooter/>
    </>
  )
}

export default BookingPage