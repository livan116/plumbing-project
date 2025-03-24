import React from 'react'
import Navbar from '../components/Navbar'
import PipeoFooter from '../components/footer/PipeoFooter'
import BannerSection from '../components/HomePage_components/BannerSection'
import FAQSection from '../components/HomePage_components/FAQSection'
import ServicesSection from '../components/HomePage_components/ServicesSection'

const FAQ = () => {
  return (
    <>
        <Navbar/>
        <BannerSection title={'FAQ'}/>
        <FAQSection/>
        <ServicesSection/>
        <PipeoFooter/>
    </>
  )
}

export default FAQ