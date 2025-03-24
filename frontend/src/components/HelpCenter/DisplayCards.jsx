import React from "react";
import HelpCenterCard from "./HelpCenterCard";

const DisplayCards = () => {
    // Example data - you would replace this with your actual data
    const cardsData = [
        {
            icon: <span className="text-green-600 text-2xl">🛍️</span>,
            iconBgColor: "bg-green-100",
            title: "Opening Hours",
            content: "Your global expansion partner. Remote fully owns the local entities in all our available countries."
        },
        {
            icon: <span className="text-red-600 text-2xl">💰</span>,
            iconBgColor: "bg-red-100",
            title: "How to Contact Staff",
            content: "Our fair price guarantee means no commitments, 3rd party markups, hidden fees, or upfront deposits."
        },
        {
            icon: <span className="text-blue-500 text-2xl">🌐</span>,
            iconBgColor: "bg-blue-100",
            title: "Return Privacy Policies",
            content: "Manage your entire global workforce in one place, including your own-entity employees, freeing up your time and money so you can grow your business."
        }
    ];

    return (
        <div className="w-full bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cardsData.map((card, index) => (
                        <HelpCenterCard
                            key={index}
                            icon={card.icon}
                            iconBgColor={card.iconBgColor}
                            title={card.title}
                            content={card.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DisplayCards;
