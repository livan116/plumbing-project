import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Services from './pages/Services';
import './App.css'
import ContactUs from './pages/ContactUs';
import BlogsSection from './pages/BlogsSection';
import ClassSchedulePage from './pages/ClassSchedulePage';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/blogs' element={<BlogsSection/>}/>
        <Route path='/schedulePage' element={<ClassSchedulePage/>}/>
      
      </Routes>

    </Router>
    </>
  )
}

export default App