import React from "react";
import ContactForm from "./ContactUs_Components/ContactForm";
import GetInTouchCard from "./ContactUs_Components/GetInTouchCard";
import Navbar from "./Navbar";

export default function ContactComponent(){


    return(
        <div>
       
            <div className="bg-white flex flex-col flex-wrap mb-12 md:mb-0">
                        <div class="w-[100vw]mx-auto relative z-0">
                            <div class="map-container shadow-md ">
                                <iframe
                                    class="map-frame border-0 "
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9932.848783674531!2d-0.13278707355177542!3d51.50690143540036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce3941eb1f%3A0x1a5342fdf089c627!2sCity%20of%20Westminster%2C%20London!5e0!3m2!1sen!2suk!4v1710341158617!5m2!1sen!2suk"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                                
                            </div>
                        </div>
                        <div className="justify-center items-center md:mt-24 px-6 md:pl-24 md:gap-24 flex flex-col lg:flex-row  ">
                            <ContactForm />
                            
                            <div className="lg:relative -top-56 right-10 z-20 md:pr-12">
                            <GetInTouchCard  />
                            </div>
                        </div>
                       
                       
                    </div>
        </div>
    )
}