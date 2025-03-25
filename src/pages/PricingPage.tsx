import React, { useState } from 'react';
import PricingCard from '../components/PricingCard';

const PricingPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  
  const pricingData = [
    {
      id: 0,
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
    },
    {
      id: 1,
      title: "Silver",
      subtitle: "Best for small teams",
      price: "68,000",
      currency: "ugx",
      period: "Month",
      introText: "All Bronze features, plus;",
      features: [
        "Two Specialties",
        "Removing Monitoring",
        "sms Messaging",
        "Unlimited Specialties",
        "Enhanced Security",
        "Training Sessions"
      ],
      color: "#0085FF",
      borderColor: "#A0AEC0"
    },
    
    {
      id: 2,
      title: "Platinum",
      subtitle: "for family(6persons)",
      price: "533,000",
      currency: "ugx",
      period: "Month",
      introText: "All Silver features,plus;",
      features: [
        "Unlimited Specialties",
        "Unlimited Consultations",
        "EHR sharing",
        "Health Resources",
        "Real time notifications",
      ],
      color: "#0085FF",
      borderColor: "#0EBE7E"
    }
  ];

  const handleCardSelect = (cardId: number) => {
    setSelectedCard(prevSelected => 
      prevSelected === cardId ? null : cardId
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="flex gap-6">
        {pricingData.map((card) => (
          <PricingCard
            key={card.id}
            {...card}
            isSelected={selectedCard === card.id}
            onClick={() => handleCardSelect(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;