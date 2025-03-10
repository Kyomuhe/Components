import React from 'react';

const TestimonialCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-md overflow-hidden p-6 flex flex-col items-center">
      {/* Circular image container */}
      <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-blue-500">
        <img 
          src="/api/placeholder/200/200" 
          alt="Garande Wafula" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Testimonial content */}
      <h3 className="text-xl font-bold text-center mb-2">An amazing service</h3>
      
      <p className="text-gray-600 text-center mb-4">
        Getting a medical consultation with highly experienced specialists at Ncare was the best decision ever.
      </p>
      
      {/* Customer details */}
      <p className="text-blue-600 font-semibold text-lg">Garande Wafula</p>
      <p className="text-gray-500">Aba Pharmaceuticals</p>
    </div>
  );
};

export default TestimonialCard;