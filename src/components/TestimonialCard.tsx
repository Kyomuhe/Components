import React from 'react';

// Defining the props
interface TestimonialCardProps {
  imageUrl: string;
  quote: string;
  description: string;
  name: string;
  company: string;
  imageAlt?: string; // Optional alt text, defaults to name if not provided
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageUrl,
  quote,
  description,
  name,
  company,
  imageAlt
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-md overflow-hidden p-6 flex flex-col items-center">
      {/* Circular image container */}
      <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-blue-500">
        <img 
          src={imageUrl} 
          alt={imageAlt || name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Testimonial content */}
      <h3 className="text-xl font-bold text-center mb-2">{quote}</h3>
      
      <p className="text-gray-600 text-center mb-4">
        {description}
      </p>
      
      {/* Customer details */}
      <p className="text-blue-600 font-semibold text-lg">{name}</p>
      <p className="text-gray-500">{company}</p>
    </div>
  );
};

export default TestimonialCard;