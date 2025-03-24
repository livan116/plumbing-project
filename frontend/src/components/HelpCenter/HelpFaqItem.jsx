import React, { useState } from 'react';

// Individual FAQ Item Component
const HelpFaqItem = ({
    question,
    answer,
    isOpen,
    toggleOpen,
    containerClassName = "",
    questionClassName = "",
    answerClassName = "",
    iconClassName = ""
}) => {
    return (
        <div className={`mb-4 ${containerClassName}`}>
            <div
                className={`flex justify-between items-center p-6 cursor-pointer ${questionClassName}`}
                onClick={toggleOpen}
            >
                <h3 className="text-xl heading3  font-medium">{question}</h3>
                <span className={`text-2xl ${iconClassName}`}>
                    {isOpen ? '−' : '+'}
                </span>
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className={`p-6 para1 pt-0 ${answerClassName}`}>
                    {typeof answer === 'string' ? (
                        <p className="leading-relaxed">{answer}</p>
                    ) : (
                        answer
                    )}
                </div>
            </div>
        </div>
    );
};

export default HelpFaqItem;