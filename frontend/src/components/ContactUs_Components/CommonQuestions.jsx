import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function CommonQuestions() {
    const [openQuestion, setOpenQuestion] = useState(0);
    const [openQuestion2 , setOpenQuestion2]=useState(0);

    const questions = [
        {
            question: "Habitasse torquent convallis etiam platea viverra nulla?",
            answer: "Habitant dui imperdiet cubilia pede curabitur consectetuer dolor massa. Sociosqu arcu fusce hac sodales orci bibendum suscipit commodo id montes. Arcu nec ex at tellus nisi aenean dignissim sodales."
        },
        {
            question: "Eleifend lacus luctus odio aliquet magna nisl?",
            answer: "Habitant dui imperdiet cubilia pede curabitur consectetuer dolor massa. Sociosqu arcu fusce hac sodales orci bibendum suscipit commodo id montes. Arcu nec ex at tellus nisi aenean dignissim sodales."
        },
        {
            question: "Accumsan curabitur erat leo ultricies?",
            answer: "Habitant dui imperdiet cubilia pede curabitur consectetuer dolor massa. Sociosqu arcu fusce hac sodales orci bibendum suscipit commodo id montes. Arcu nec ex at tellus nisi aenean dignissim sodales."
        },
        // {
        //     question: "Magna dapibus feugiat nibh hendrerit ante et?",
        //     answer: "Habitant dui imperdiet cubilia pede curabitur consectetuer dolor massa. Sociosqu arcu fusce hac sodales orci bibendum suscipit commodo id montes. Arcu nec ex at tellus nisi aenean dignissim sodales."
        // },
        // {
        //     question: "Phasellus risus dui integer aliquam tortor?",
        //     answer: "Habitant dui imperdiet cubilia pede curabitur consectetuer dolor massa. Sociosqu arcu fusce hac sodales orci bibendum suscipit commodo id montes. Arcu nec ex at tellus nisi aenean dignissim sodales."
        // }
    ];
    const questions2 = [
        {
            question: "Habitasse torquent convallis etiam platea viverra nulla?",
            answer: "Habitant dui imperdiet cubilia pede curabitur consectetuer dolor massa. Sociosqu arcu fusce hac sodales orci bibendum suscipit commodo id montes. Arcu nec ex at tellus nisi aenean dignissim sodales."
        },
        {
            question: "Eleifend lacus luctus odio aliquet magna nisl?",
            answer: "Habitant dui imperdiet cubilia pede curabitur consectetuer dolor massa. Sociosqu arcu fusce hac sodales orci bibendum suscipit commodo id montes. Arcu nec ex at tellus nisi aenean dignissim sodales."
        },
        {
            question: "Accumsan curabitur erat leo ultricies?",
            answer: "Habitant dui imperdiet cubilia pede curabitur consectetuer dolor massa. Sociosqu arcu fusce hac sodales orci bibendum suscipit commodo id montes. Arcu nec ex at tellus nisi aenean dignissim sodales."
        },
        // {
        //     question: "Magna dapibus feugiat nibh hendrerit ante et?",
        //     answer: "Habitant dui imperdiet cubilia pede curabitur consectetuer dolor massa. Sociosqu arcu fusce hac sodales orci bibendum suscipit commodo id montes. Arcu nec ex at tellus nisi aenean dignissim sodales."
        // },
        // {
        //     question: "Phasellus risus dui integer aliquam tortor?",
        //     answer: "Habitant dui imperdiet cubilia pede curabitur consectetuer dolor massa. Sociosqu arcu fusce hac sodales orci bibendum suscipit commodo id montes. Arcu nec ex at tellus nisi aenean dignissim sodales."
        // }
    ];

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };
    const toggleQuestion2 = (index) => {
        setOpenQuestion2(openQuestion2 === index ? null : index);
    };

    return (
        <div className=" px-6 md:px-24 py-12">
            <div className="text-center mb-12">
                <div className="textcolor2 font-medium heading1 uppercase text-xl mb-3">
                    COMMON QUESTIONS
                </div>
                <h2 className="textcolor1 heading2 text-4xl font-bold">
                    Most Popular Questions
                </h2>
            </div>
        <div className="flex md:flex-row flex-col gap-2">
            <div className="flex flex-col gap-6">
                {questions.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <button
                            onClick={() => toggleQuestion(index)}
                            className={`flex justify-between items-center para1 p-4 ${openQuestion === index
                                    ? "color2 text-white"
                                    : "bg-gray-100 textcolor1 hover:bg-gray-200"
                                } font-medium transition-colors duration-200`}
                        >
                            <span>{item.question}</span>
                            {openQuestion === index ? (
                                <ChevronUp className="h-5 w-5" />
                            ) : (
                                <ChevronDown className="h-5 w-5" />
                            )}
                        </button>
                        <div
                            className={`bg-gray-100 overflow-hidden para1 transition-all duration-600 ease-in-out ${openQuestion === index ? "max-h-60" : "max-h-0"
                                }`}
                        >
                            <div className="p-4 text-gray-600">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                <div className="flex flex-col gap-6">
                    {questions2.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            <button
                                onClick={() => toggleQuestion2(index)}
                                className={`flex justify-between para1 items-center p-4 ${openQuestion2 === index
                                    ? "color2 text-white"
                                    : "bg-gray-100 textcolor1 hover:bg-gray-200"
                                    } font-medium transition-colors duration-200`}
                            >
                                <span>{item.question}</span>
                                {openQuestion2 === index ? (
                                    <ChevronUp className="h-5 w-5" />
                                ) : (
                                    <ChevronDown className="h-5 w-5" />
                                )}
                            </button>
                            <div
                                className={`bg-gray-100 overflow-hidden para1 transition-all duration-600 ease-in-out ${openQuestion2 === index ? "max-h-60" : "max-h-0"
                                    }`}
                            >
                                <div className="p-4 text-gray-600">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
        </div>
    );
}