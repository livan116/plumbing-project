import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = () => {
  // Sample FAQ data
  const faqData = [
    {
      id: 1,
      question: "Habitasse torquent convallis etiam platea viverra nulla?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit."
    },
    {
      id: 2,
      question: "Eleifend lacus luctus odio aliquet magna nisl?",
      answer: "Fusce non nulla quis quam hendrerit finibus. Suspendisse potenti. Nullam auctor massa at ex pulvinar, vel tincidunt ipsum aliquam. Curabitur viverra neque vel nisi ornare, vel ultrices libero gravida."
    },
    {
      id: 3,
      question: "Accumsan curabitur erat leo ultricies?",
      answer: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem."
    },
    {
      id: 4,
      question: "Magna dapibus feugiat nibh hendrerit ante et?",
      answer: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
    },
    {
      id: 5,
      question: "Phasellus risus dui integer aliquam tortor?",
      answer: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
    },
    {
        id: 6,
        question: "Habitasse torquent convallis etiam platea viverra nulla?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit."
      },
      
  ];

  // State to track which FAQ item is open (only one at a time)
  const [openItemId, setOpenItemId] = useState(null);

  // Toggle function for FAQ items
  const toggleItem = (id) => {
    setOpenItemId(prevId => prevId === id ? null : id);
  };

  return (
    <div className="w-full mx-auto my-8 px-4 md:px-24">
      <div className="text-center mb-12">
        <h2 className="textcolor2 text-xl heading1 uppercase tracking-widest mb-5 md:mb-5">COMMON QUESTIONS</h2>
        <h1 className="text-2xl md:text-[2.5rem] heading3 font-bold text-[#022659]">Most Popular Questions</h1>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 md:pr-3 flex flex-col gap-6">
          {faqData.slice(0, Math.ceil(faqData.length / 2)).map((faq) => (
            <div key={faq.id} className="bg-gray-100 overflow-hidden w-full">
              <button
                className={`w-full text-left p-5 flex justify-between items-center transition-all duration-300 ${
                  openItemId === faq.id ? 'color2 text-white transform scale-100' : 'bg-gray-100 text-[#022659]'
                }`}
                onClick={() => toggleItem(faq.id)}
              >
                <h3 className={`text-md heading3 font-medium ${openItemId === faq.id ? 'text-white' : 'text-[#022659]'}`}>
                  {faq.question}
                </h3>
                <span className="transition-transform duration-300">
                  {openItemId === faq.id ? 
                    <FaChevronUp className="w-5 h-5 text-white" /> : 
                    <FaChevronDown className="w-5 h-5" />
                  }
                </span>
              </button>
              <div 
                className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                  openItemId === faq.id ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 para1">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="w-full md:w-1/2 md:pl-3 flex flex-col gap-6 mt-6 md:mt-0">
          {faqData.slice(Math.ceil(faqData.length / 2)).map((faq) => (
            <div key={faq.id} className="bg-gray-100 overflow-hidden w-full">
              <button
                className={`w-full text-left p-5 flex justify-between items-center transition-all duration-300 ${
                  openItemId === faq.id ? 'color2 text-white transform scale-100' : 'bg-gray-100 text-[#022659]'
                }`}
                onClick={() => toggleItem(faq.id)}
              >
               <h3 className={`text-md heading3 font-medium ${openItemId === faq.id ? 'text-white' : 'text-[#022659]'}`}>
                  {faq.question}
                </h3>
                <span className="transition-transform duration-300">
                  {openItemId === faq.id ? 
                    <FaChevronUp className="w-5 h-5 text-white" /> : 
                    <FaChevronDown className="w-5 h-5" />
                  }
                </span>
              </button>
              <div 
                className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                  openItemId === faq.id ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 para1">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

