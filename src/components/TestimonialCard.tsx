import React from 'react';

// Defining the props
interface TestimonialCardProps {
  imageUrl: string;
  quote: string;
  description: string;
  name: string;
  company: string;
  imageAlt?: string; 
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
    <div 
      className="bg-white rounded-3xl overflow-hidden p-4 md:p-6 flex flex-col"
      style={{
        maxWidth: '363px',
        width: '100%',
        height: 'auto',
        minHeight: '364px',
        border: '1px solid #D4D2E3'
      }}
    >
      {/* Circular image container*/}
      <div 
        className="rounded-full overflow-hidden mb-4 md:mb-6 mx-auto"
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '55px'
        }}
      >
        <img 
          src={imageUrl} 
          alt={imageAlt || name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Testimonial content */}
      <h3 className="text-lg md:text-xl font-bold mb-2">"{quote}"</h3>
      
      <p className="text-sm md:text-base text-gray-600 mb-4">
        {description}
      </p>
      
      {/* Customer details */}
      <div className="mt-auto">
        <p className="text-blue-600 font-semibold text-base md:text-lg text-left">{name}</p>
        <p className="text-gray-500 text-sm md:text-base text-left">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;