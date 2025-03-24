import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Services from './pages/Services';
import './App.css'
import ContactUs from './pages/ContactUs';
import ClassSchedulePage from './pages/ClassSchedulePage';
import Error404 from './pages/Error404';
import BookingPage from './pages/BookingPage';
import BlogsSection from './components/BlogSection/BlogSection';
import BlogPost from './components/BlogSection/BlogPost';
import FAQ from './pages/FAQ';
import ReviewCarousel from './components/HomePage_components/ReviewCarousel';
import Testimonials from './pages/Testimonials';
import PricingPage from './pages/PricingPage';
import HelpCenterPage from "./pages/HelpCenterPage";
import PrivacyPage from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/schedulePage" element={<ClassSchedulePage />} />
          <Route path="/error" element={<Error404 />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blogs" element={<BlogsSection />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/privacyPolicy" element={<PrivacyPage />} />
          <Route path="/refundPolicy" element={<RefundPolicy/>} />
          <Route path="/termsAndCondition" element={<TermsAndConditions/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App