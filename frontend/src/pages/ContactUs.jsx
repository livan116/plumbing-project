import React from "react";
import "../styles/mapComponent.css"
import ReviewCarousel from "../components/HomePage_components/ReviewCarousel";
import Navbar from "../components/Navbar";
import PipeoFooter from "../components/footer/PipeoFooter";
import ContactComponent from "../components/ContactComponent";
import ConsultationSection from "../components/HomePage_components/ConsultationSection";
import image from "../assets/homepage/img6.webp";

export default function ContactUs(){


    return(
        <>
        <Navbar/>
        <ContactComponent/>
        <ReviewCarousel/>
        <ConsultationSection title={"Get Expert Advice with a Free Consultation!"} para={"Ultrices quam mattis posuere porttitor tellus rhoncus tristique. Primis aliquam dignissim interdum vel suscipit sodales."} image={image} />
        <PipeoFooter/>
        </>
    );
}