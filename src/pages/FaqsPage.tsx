import React from 'react';
import FaqsComponent from '../components/FaqsComponent';

const FaqsPage: React.FC = () => {
  const accordionData = [
    {
      number: '01',
      question: 'What is Ncare Telemedicine?',
      description: 'Telemedicine allows patients to consult with healthcare providers remotely using video calls, phone calls, or other communication platforms. It’s a convenient way to receive medical care without visiting a clinic in person physically as a person.'
    },
    {
      number: '02',
      question: 'How quickly can I receive my medication?',
      description: 'After your consultation, prescriptions can typically be sent to your preferred pharmacy within 1-2 hours. We work with local pharmacies to ensure quick and convenient medication access.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-6 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Ncare Frequently Asked Questions</h1>
      {accordionData.map((item, index) => (
        <FaqsComponent
          key={index}
          number={item.number}
          question={item.question}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default FaqsPage;