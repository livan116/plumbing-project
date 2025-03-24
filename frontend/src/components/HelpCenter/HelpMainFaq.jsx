import React from "react";
import { useState } from "react";
import HelpFaqItem from "./HelpFaqItem";

const HelpMainFaq = ({
    title,
    titleClassName = "",
    faqs,
    containerClassName = "",
    itemClassName = "",
    questionClassName = "",
    answerClassName = "",
    iconClassName = ""
}) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`w-full py-4 px-4 ${containerClassName}`}>
            {title && (
                <h2 className={`text-3xl font-medium textcolor1 text-center mb-6 ${titleClassName}`}>
                    {title}
                </h2>
            )}

            <div className="">
                {faqs.map((faq, index) => (
                    <HelpFaqItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        toggleOpen={() => toggleQuestion(index)}
                        containerClassName={itemClassName}
                        questionClassName={questionClassName}
                        answerClassName={answerClassName}
                        iconClassName={iconClassName}
                    />
                ))}
            </div>
        </div>
    );
};

export default HelpMainFaq;