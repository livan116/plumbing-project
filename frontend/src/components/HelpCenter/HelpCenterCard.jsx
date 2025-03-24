import React from 'react';

// Reusable Card Component that accepts props
const HelpCenterCard = ({
    icon, // React element or component
    iconBgColor = "bg-blue-100", // Default background color
    iconColor = "text-blue-500", // Default icon color
    title,
    content,
    className = "" // Additional custom classes
}) => {
    return (
        <div className={`border border-gray-300 rounded-lg p-6 flex flex-col h-full ${className}`}>
            {/* Icon container */}
            {icon && (
                <div className={`${iconBgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                    {icon}
                </div>
            )}

            {/* Card title */}
            {title && <h3 className="text-lg heading2 textcolor1 font-medium mb-3">{title}</h3>}

            {/* Card content */}
            {content && (
                typeof content === 'string'
                    ? <p className="text-gray-600 para1 leading-relaxed">{content}</p>
                    : content
            )}
        </div>
    );
};


export default HelpCenterCard;