import React, { useState } from 'react';
import PricingCard from '../components/PricingCard';

const PricingPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<boolean>(false);
  
  const sampleData = {
    title: "Bronze",
    subtitle: "Ideal for one person",
    price: "28,000",
    currency: "ugx",
    period: "Month",
    introText: "What you get;",
    features: [
      "One Specialty",
      "Chat, Voice $ Video",
      "E-presentation",
      "E-Health Records",
      "Secure messaging",
      "24/7 health support",
      "Case notes"
    ],
    color: "#0085FF",
    borderColor: "#F77B2F" 

  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <PricingCard
        {...sampleData}
        isSelected={selectedCard}
        onClick={() => setSelectedCard(!selectedCard)}
      />
    </div>
  );
};

export default PricingPage;