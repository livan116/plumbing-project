import React from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function GetInTouchCard() {
    return (
      <div className="px-6 md:px-10 py-6 md:py-10 max-w-max bg-white  shadow-2xl max-h-max z-100 ">
        <div className="flex flex-col space-y-5 flex-wrap">
          <div className="textcolor2 heading1 uppercase text-xl">
            GET IN TOUCH
          </div>

          <h2 className="textcolor1 text-3xl font-bold heading2 leading-tight">
            Don't hesitate to contact us for more information.
          </h2>

          <div className="border-t border-gray-200 my-2"></div>

          <div className="flex flex-wrap items-start space-x-4">
            <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9932.848783674531!2d-0.13278707355177542!3d51.50690143540036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce3941eb1f%3A0x1a5342fdf089c627!2sCity%20of%20Westminster%2C%20London!5e0!3m2!1sen!2suk!4v1710341158617!5m2!1sen!2suk">
              <div className="rounded-full color2 h-16 w-16 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white h-8 w-8" />
              </div>
            </a>
            <div className="flex flex-wrap flex-col">
              <div className="textcolor1 heading2 font-bold text-xl mb-1">
                Head Office
              </div>
              <div className="textcolor3 para1">Cempaka Wangi No 22</div>
              <div className="textcolor3 para1">Jakarta - Indonesia</div>
            </div>
          </div>

          <div className="flex flex-wrap items-start space-x-4">
            <a href="mailto:plumbing@gmail.com">
              <div className="rounded-full color2 h-16 w-16 flex items-center justify-center flex-shrink-0">
                <Mail className="text-white h-8 w-8" />
              </div>
            </a>
            <div className="flex flex-col flex-wrap">
              <div className="textcolor1 heading2 font-bold text-xl mb-1">
                Email Support
              </div>
              <div className="textcolor3 para1">support@yourdomain.tld</div>
              <div className="textcolor3 para1">hello@yourdomain.tld</div>
            </div>
          </div>

          <div className="flex items-start flex-wrap space-x-4">
            <a href="tel:+1(12345678)">
              <div className="rounded-full color2 h-16 w-16 flex items-center justify-center flex-shrink-0">
                <Phone className="text-white h-8 w-8 transform rotate-45" />
              </div>
            </a>
            <div className="flex flex-col flex-wrap">
              <div className="textcolor1 heading2 font-bold text-xl mb-1">
                Let's Talk
              </div>
              <div className="textcolor3 para1">Phone : (+6221) 2002 2012</div>
              <div className="textcolor3 para1">Fax : (+6221) 2002 2013</div>
            </div>
          </div>

          <div className="flex items-start flex-wrap space-x-4">
            <div className="rounded-full color2 h-16 w-16 flex items-center justify-center flex-shrink-0">
              <Clock className="text-white h-8 w-8" />
            </div>
            <div className="flex flex-col flex-wrap">
              <div className="textcolor1 heading2 font-bold text-xl mb-1">
                Office Hour
              </div>
              <div className="textcolor3 para1">Monday - Saturday</div>
              <div className="textcolor3 para1">09.00 - 17.00</div>
            </div>
          </div>
        </div>
      </div>
    );
}