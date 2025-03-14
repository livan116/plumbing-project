import React from "react";

export default function ContactForm() {
    return (
        <div className="lg:max-w-5/11 max-w-max px-6  max-h-max py-6 ">
            <div className="textcolor2 heading1 font-medium uppercase text-sm mb-3">
                SEND US A MESSAGE
            </div>

            <h1 className="textcolor1 text-4xl heading2 font-bold mb-3 leading-tight">
                Whenever you need us, we're here for you.
            </h1>

            <p className=" mb-4 para1 textcolor3">
                Auctor aliquam faucibus phasellus elit condimentum turpis molestie himenaaeos nisl vulputate massa.
            </p>

            <form className="w-full">
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-2">
                        <label htmlFor="name" className="block textcolor1 heading3 font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            className="w-full bg-gray-100 p-2 para1  placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    <div className="w-full md:w-1/2 px-2 mb-2">
                        <label htmlFor="company" className="block textcolor1 font-medium heading3 mb-2">
                            Company
                        </label>
                        <input
                            type="text"
                            id="company"
                            placeholder="Company"
                            className="w-full bg-gray-100 p-2  placeholder-gray-400 para1 focus:outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-2">
                        <label htmlFor="phone" className="block textcolor1 font-medium heading3 mb-2">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Phone"
                            className="w-full bg-gray-100 p-2  placeholder-gray-400 para1 focus:outline-none"
                        />
                    </div>

                    <div className="w-full md:w-1/2 px-2 mb-2">
                        <label htmlFor="email" className="block textcolor1 font-medium heading3 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="w-full bg-gray-100 p-2  placeholder-gray-400 para1 focus:outline-none"
                        />
                    </div>
                </div>

                <div className="mb-2">
                    <label htmlFor="subject" className="block textcolor1 font-medium heading3 mb-2">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        placeholder="Subject"
                        className="w-full bg-gray-100 p-2  placeholder-gray-400 para1 focus:outline-none"
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="message" className="block textcolor1 font-medium heading3 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="Message"
                        rows="4"
                        className="w-full bg-gray-100 p-2  placeholder-gray-400 para1 focus:outline-none resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="color2 text-white py-3 px-6 font-medium flex heading2 items-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Send Message
                </button>
            </form>
        </div>
    );
}