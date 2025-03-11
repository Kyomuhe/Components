import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import profile2 from '../images/profile2.PNG';
import profile3 from '../images/profile3.PNG';


const TestimonialsPage = () => {
  const testimonials = [
    {
      id: '1',
      imageUrl: profile2,
      quote: 'An amazing service',
      description: 'Getting a medical consultation with highly experienced specialists at Ncare was the best decision ever.',
      name: 'Garande Wafula',
      company: 'Aba Pharmaceuticals'
    },
    {
      id: '2',
      imageUrl: profile3,
      quote: 'Excellent customer support',
      description: 'The team was very helpful in finding the right medication for me.',
      name: 'Jane Kamau',
      company: 'Health Plus'
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-custom-blue">What Our Customers Say</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard
              key={testimonial.id}
              imageUrl={testimonial.imageUrl}
              quote={testimonial.quote}
              description={testimonial.description}
              name={testimonial.name}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;