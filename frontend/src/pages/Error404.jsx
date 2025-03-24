import React from 'react'
import Navbar from '../components/Navbar';
import PipeoFooter from '../components/footer/PipeoFooter';

const Error404 = () => {
  return (
    <>
    <Navbar/>
      <section className="color1 mt-8">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl textcolor2 heading2">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white heading3">Something's missing.</p>
            <p className="mb-4 text-lg font-light text-gray-200 heading3">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
            <a
              href="/"
              className="heading3 inline-flex text-white color2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4 transition-all duration-300 hover:bg-green-400 transform hover:scale-110 hover:shadow-lg"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
      <PipeoFooter/>
    </>
  )
}

export default Error404;
