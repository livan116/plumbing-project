import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaArrowLeft, FaUserAlt, FaEnvelope, FaPhone, FaCheck, FaChevronLeft, FaChevronRight, FaTools, FaWrench } from 'react-icons/fa';
import "../../styles/fonts.css"

const BookingSection = () => {
  const [step, setStep] = useState(1); // 1: Service selection, 2: Date selection, 3: Registration, 4: Thank you
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+1',
    message: ''
  });
  
  // For calendar
  const currentDate = new Date();
  const [displayMonth, setDisplayMonth] = useState(currentDate.getMonth());
  const [displayYear, setDisplayYear] = useState(currentDate.getFullYear());
  
  // For animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // Available services
  const services = [
    {
      id: 1,
      title: 'Emergency Plumbing',
      description: '24/7 service for urgent plumbing issues',
      icon: <FaWrench className="text-3xl" />,
      price: '$85/hour'
    },
    {
      id: 2,
      title: 'Drain Cleaning',
      description: 'Professional drain unclogging and cleaning',
      icon: <FaTools className="text-3xl" />,
      price: '$75/hour'
    },
    {
      id: 3,
      title: 'Pipe Repair & Replacement',
      description: 'Fix leaks, breaks, and damaged pipes',
      icon: <FaWrench className="text-3xl" />,
      price: '$95/hour'
    },
    {
      id: 4,
      title: 'Water Heater Service',
      description: 'Installation, repair, and maintenance',
      icon: <FaTools className="text-3xl" />,
      price: '$120/hour'
    },
    {
      id: 5,
      title: 'Bathroom Plumbing',
      description: 'Toilet, shower, and sink repairs',
      icon: <FaWrench className="text-3xl" />,
      price: '$80/hour'
    },
    {
      id: 6,
      title: 'Kitchen Plumbing',
      description: 'Sink, disposal, and dishwasher services',
      icon: <FaTools className="text-3xl" />,
      price: '$80/hour'
    }
  ];
  
  // Country codes for phone
  const countryCodes = [
    { code: '+1', country: 'US/CA' },
    { code: '+44', country: 'UK' },
    { code: '+61', country: 'AU' },
    { code: '+64', country: 'NZ' },
    { code: '+49', country: 'DE' },
    { code: '+33', country: 'FR' },
    { code: '+91', country: 'IN' },
    { code: '+86', country: 'CN' },
    { code: '+52', country: 'MX' },
    { code: '+81', country: 'JP' }
  ];
  
  // Generate calendar days
  const daysInMonth = new Date(displayYear, displayMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(displayYear, displayMonth, 1).getDay();
  
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const paddingDays = Array.from({ length: firstDayOfMonth }, (_, i) => null);
  
  const monthNames = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const timeSlots = [
    '9:00 am', '9:30 am', '10:00 am', '10:30 am',
    '11:00 am', '11:30 am', '12:00 pm', '12:30 pm',
    '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm',
    '3:00 pm', '3:30 pm', '4:00 pm', '4:30 pm',
    '5:00 pm', '5:30 pm'
  ];
  
  const handleNextMonth = () => {
    if (displayMonth === 11) {
      setDisplayMonth(0);
      setDisplayYear(displayYear + 1);
    } else {
      setDisplayMonth(displayMonth + 1);
    }
  };
  
  const handlePrevMonth = () => {
    // Don't allow going before current month
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    if (displayYear === currentYear && displayMonth === currentMonth) {
      return;
    }
    
    if (displayMonth === 0) {
      setDisplayMonth(11);
      setDisplayYear(displayYear - 1);
    } else {
      setDisplayMonth(displayMonth - 1);
    }
  };
  
  const handleDateClick = (day) => {
    // Don't allow selecting days before today
    const selectedDate = new Date(displayYear, displayMonth, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate >= today) {
      setSelectedDate(`${monthNames[displayMonth].substring(0, 3)}, ${day} ${displayYear}`);
    }
  };
  
  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };
  
  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleCountryCodeChange = (e) => {
    setFormData({ ...formData, countryCode: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(4); // Move to thank you page
  };
  
  const goBack = () => {
    setStep(step - 1);
  };
  
  const proceedToDateSelection = () => {
    if (selectedService) {
      setStep(2);
    }
  };
  
  const proceedToRegistration = () => {
    if (selectedDate && selectedTime) {
      setStep(3);
    }
  };
  
  const isPastDate = (day) => {
    const selectedDate = new Date(displayYear, displayMonth, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate < today;
  };
  
  const isToday = (day) => {
    const today = new Date();
    return day === today.getDate() && 
           displayMonth === today.getMonth() && 
           displayYear === today.getFullYear();
  };
  
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const calendarVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };
  
  const timeVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, delay: 0.4 }
    }
  };
  
  const formatServiceTitle = (service) => {
    return service ? service.title : 'No service selected';
  };
  
  return (
    <section 
      id="booking" 
      ref={sectionRef}
      className="py-8 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading1 text-4xl md:text-5xl textcolor1 mb-4">BOOK YOUR PLUMBING SERVICE</h2>
          <p className="para1 textcolor3 max-w-2xl mx-auto">Schedule a convenient time for our professional plumbers to assist you with your plumbing needs.</p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Progress Bar */}
          <div className="w-full px-6 pt-6">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              <div className="flex flex-col items-center w-full">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'color2 text-white' : 'bg-gray-300'}`}>
                  1
                </div>
                <span className={`text-xs mt-1 ${step >= 1 ? 'textcolor1 font-medium' : 'text-gray-400'}`}>Service</span>
              </div>
              <div className={`h-1 flex-1 mx-2 ${step >= 2 ? 'color2' : 'bg-gray-300'}`}></div>
              <div className="flex flex-col items-center w-full">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'color2 text-white' : 'bg-gray-300'}`}>
                  2
                </div>
                <span className={`text-xs mt-1 ${step >= 2 ? 'textcolor1 font-medium' : 'text-gray-400'}`}>Date & Time</span>
              </div>
              <div className={`h-1 flex-1 mx-2 ${step >= 3 ? 'color2' : 'bg-gray-300'}`}></div>
              <div className="flex flex-col items-center w-full">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'color2 text-white' : 'bg-gray-300'}`}>
                  3
                </div>
                <span className={`text-xs mt-1 ${step >= 3 ? 'textcolor1 font-medium' : 'text-gray-400'}`}>Registration</span>
              </div>
              <div className={`h-1 flex-1 mx-2 ${step >= 4 ? 'color2' : 'bg-gray-300'}`}></div>
              <div className="flex flex-col items-center w-full">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? 'color2 text-white' : 'bg-gray-300'}`}>
                  4
                </div>
                <span className={`text-xs mt-1 ${step >= 4 ? 'textcolor1 font-medium' : 'text-gray-400'}`}>Confirmation</span>
              </div>
            </div>
          </div>

          {/* Service Selection */}
          {step === 1 && (
            <div className="p-6">
              <motion.div 
                variants={itemVariants}
                className="flex items-center justify-between border-b pb-4 mb-6"
              >
                <div className="flex items-center">
                  <div className="color2 p-3 rounded-lg">
                    <FaTools className="text-white text-xl" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold heading2 textcolor1">Select a Service</h3>
                </div>
                <div className="text-lg font-medium textcolor1 para1">
                  {selectedService ? formatServiceTitle(selectedService) : 'No service selected'}
                </div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                      selectedService?.id === service.id 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                    }`}
                    onClick={() => handleServiceSelect(service)}
                  >
                    <div className="flex items-center mb-2">
                      <div className="color2 p-2 rounded-lg text-white mr-3">
                        {service.icon}
                      </div>
                      <h4 className="heading2 textcolor1 text-lg">{service.title}</h4>
                    </div>
                    <p className="para1 textcolor3 mb-3">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold textcolor1">{service.price}</span>
                      {selectedService?.id === service.id && (
                        <span className="color2 text-white p-1 rounded-full">
                          <FaCheck />
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                variants={itemVariants}
                className="mt-8 flex justify-end"
              >
                <button
                  onClick={proceedToDateSelection}
                  disabled={!selectedService}
                  className={`py-3 px-6 rounded-lg text-white font-medium para1 flex items-center transition-all duration-200
                    ${selectedService ? 'gradient hover:opacity-90' : 'bg-gray-400 cursor-not-allowed'}`}
                >
                  Continue <span className="ml-2">→</span>
                </button>
              </motion.div>
            </div>
          )}
          
          {/* Date & Time Selection */}
          {step === 2 && (
            <div className="p-6">
              <motion.div 
                variants={itemVariants}
                className="flex items-center justify-between border-b pb-4 mb-6"
              >
                <button onClick={goBack} className="flex items-center textcolor2 hover:text-green-700">
                  <FaArrowLeft className="mr-1" /> Back
                </button>
                <div className="flex flex-col items-end">
                  <span className="text-sm text-gray-500">Selected Service:</span>
                  <span className="text-lg font-medium textcolor1 para1">{formatServiceTitle(selectedService)}</span>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex items-center mb-6"
              >
                <div className="color2 p-3 rounded-lg">
                  <FaCalendarAlt className="text-white text-xl" />
                </div>
                <h3 className="ml-3 text-xl font-semibold heading2 textcolor1">Select a Date & Time</h3>
              </motion.div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <motion.div
                  variants={calendarVariants}
                  className="flex-1"
                >
                  <div className="calendar bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-medium textcolor1 heading2">{monthNames[displayMonth]} {displayYear}</h4>
                      <div className="flex space-x-2">
                        <button 
                          onClick={handlePrevMonth}
                          className={`p-2 rounded-full ${
                            displayMonth === currentDate.getMonth() && displayYear === currentDate.getFullYear() 
                              ? 'text-gray-300 cursor-not-allowed' 
                              : 'textcolor2 hover:bg-green-100'
                          }`}
                          disabled={displayMonth === currentDate.getMonth() && displayYear === currentDate.getFullYear()}
                        >
                          <FaChevronLeft />
                        </button>
                        <button 
                          onClick={handleNextMonth}
                          className="p-2 rounded-full textcolor2 hover:bg-green-100"
                        >
                          <FaChevronRight />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {dayNames.map(day => (
                        <div key={day} className="text-center text-sm font-medium textcolor3 py-1">{day}</div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-7 gap-1">
                      {paddingDays.map((_, index) => (
                        <div key={`padding-${index}`} className="h-10"></div>
                      ))}
                      
                      {daysArray.map(day => {
                        const past = isPastDate(day);
                        const today = isToday(day);
                        const isSelected = selectedDate === `${monthNames[displayMonth].substring(0, 3)}, ${day} ${displayYear}`;
                        
                        return (
                          <button
                            key={day}
                            onClick={() => handleDateClick(day)}
                            disabled={past}
                            className={`h-10 w-10 mx-auto rounded-full flex items-center justify-center text-sm transition-all duration-200
                              ${past ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-green-100'}
                              ${today ? 'border-2 border-green-400' : ''}
                              ${isSelected ? 'color2 text-white' : ''}`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  variants={timeVariants}
                  className="flex-1"
                >
                  <div className="flex items-center mb-4">
                    <FaClock className="textcolor2 mr-2" />
                    <h4 className="text-lg font-medium textcolor1 heading2">Available Times</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-2">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        onClick={() => handleTimeClick(time)}
                        className={`py-2 px-4 border rounded-md text-center transition-all duration-200
                          ${selectedTime === time 
                            ? 'color2 text-white border-green-600' 
                            : 'border-gray-300 hover:border-green-400 hover:text-green-600'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                variants={itemVariants}
                className="mt-8 flex justify-between"
              >
                <div className="text-lg font-medium textcolor1 para1">
                  {selectedDate ? `Selected: ${selectedDate} at ${selectedTime || '(no time selected)'}` : 'No date selected'}
                </div>
                <button
                  onClick={proceedToRegistration}
                  disabled={!selectedDate || !selectedTime}
                  className={`py-3 px-6 rounded-lg text-white font-medium para1 flex items-center transition-all duration-200
                    ${selectedDate && selectedTime ? 'gradient hover:opacity-90' : 'bg-gray-400 cursor-not-allowed'}`}
                >
                  Continue <span className="ml-2">→</span>
                </button>
              </motion.div>
            </div>
          )}
          
          {/* Registration Form */}
          {step === 3 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="p-6"
            >
              <motion.div 
                variants={itemVariants}
                className="flex items-center justify-between border-b pb-4 mb-6"
              >
                <button onClick={goBack} className="flex items-center textcolor2 hover:text-green-700">
                  <FaArrowLeft className="mr-1" /> Back
                </button>
                <div className="flex flex-col items-end">
                  <div className="text-sm text-gray-500">Your appointment:</div>
                  <div className="font-medium textcolor1 para1">{formatServiceTitle(selectedService)}</div>
                  <div className="font-medium textcolor1 para1">{selectedDate} at {selectedTime}</div>
                </div>
              </motion.div>
              
              <motion.h3 
                variants={itemVariants}
                className="text-xl font-semibold textcolor1 heading2 mb-6"
              >
                Your Information
              </motion.h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label className="block textcolor1 mb-2 font-medium para1" htmlFor="name">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUserAlt className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className="pl-10 w-full border border-gray-300 rounded-md py-3 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label className="block textcolor1 mb-2 font-medium para1" htmlFor="email">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      className="pl-10 w-full border border-gray-300 rounded-md py-3 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label className="block textcolor1 mb-2 font-medium para1" htmlFor="phone">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex">
                    <select
                      value={formData.countryCode}
                      onChange={handleCountryCodeChange}
                      className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 textcolor3"
                    >
                      {countryCodes.map(country => (
                        <option key={country.code} value={country.code}>
                          {country.code} {country.country}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone number"
                      className="flex-1 border border-gray-300 rounded-r-md py-3 px-3 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label className="block textcolor1 mb-2 font-medium para1" htmlFor="message">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Please share any details that will help us prepare for our visit (e.g., specific issue, location, access instructions)"
                    className="w-full border border-gray-300 rounded-md py-3 px-4 focus:ring-green-500 focus:border-green-500"
                  ></textarea>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4"
                >
                  <p className="text-sm textcolor3 para1">
                    By booking you agree to our <a href="#" className="textcolor2 hover:underline">terms and conditions</a> and <a href="#" className="textcolor2 hover:underline">cancellation policy</a>.
                  </p>
                  <button
                    type="submit"
                    className="gradient text-white font-medium para1 py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-200 hover:opacity-90"
                  >
                    <FaCheck className="mr-2" /> Confirm Booking
                  </button>
                </motion.div>
              </form>
            </motion.div>
          )}
          
          {/* Confirmation */}
          {step === 4 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="p-8 text-center"
            >
              <motion.div 
                variants={itemVariants}
                className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6"
              >
                <FaCheck className="textcolor2 text-2xl" />
              </motion.div>
              
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold textcolor1 heading2 mb-2"
              >
                Booking Confirmed!
              </motion.h3>
              
              <motion.p 
                variants={itemVariants}
                className="textcolor3 para1 mb-6"
              >
                Thank you for booking our plumbing service. We've sent a confirmation to your email {formData.email}.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="bg-gray-50 rounded-lg p-6 mb-6 text-left max-w-lg mx-auto"
              >
                <div className="mb-4 pb-4 border-b">
                  <h4 className="font-semibold text-lg textcolor1 mb-2">Appointment Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <span className="textcolor3 para1 text-sm">Service:</span>
                      <div className="font-medium textcolor1 para1">{formatServiceTitle(selectedService)}</div>
                    </div>
                    <div>
                      <span className="textcolor3 para1 text-sm">Date & Time:</span>
                      <div className="font-medium textcolor1 para1">{selectedDate} at {selectedTime}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4 pb-4 border-b">
                  <h4 className="font-semibold text-lg textcolor1 mb-2">Customer Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <span className="textcolor3 para1 text-sm">Name:</span>
                      <div className="font-medium textcolor1 para1">{formData.name}</div>
                    </div>
                    <div>
                      <span className="textcolor3 para1 text-sm">Phone:</span>
                      <div className="font-medium textcolor1 para1">{formData.countryCode} {formData.phone}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                  <span className="textcolor3 para1 text-sm">Email:</span>
                    <div className="font-medium textcolor1 para1">{formData.email}</div>
                  </div>
                  <div>
                    <span className="textcolor3 para1 text-sm">Additional Info:</span>
                    <div className="font-medium textcolor1 para1">{formData.message || 'None provided'}</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="mt-6"
              >
                <button
                  onClick={() => setStep(1)}
                  className="gradient text-white font-medium para1 py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-200 hover:opacity-90"
                >
                  <FaArrowLeft className="mr-2" /> Book Another Service
                </button>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;