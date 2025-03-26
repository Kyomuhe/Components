import React from 'react';
import FeatureComparisonTable from '../components/FeatureComparisonTable';

const FeaturesComparisonPage: React.FC = () => {
  const featureData = [
    {
      name: "Online Consultation",
      bronze: true,
      silver: true,
      gold: true,
      platinum: true
    },
    {
      name: "Prescription Delivery",
      bronze: false,
      silver: true,
      gold: true,
      platinum: true
    },
    {
      name: "Mental Health Support",
      bronze: false,
      silver: false,
      gold: true,
      platinum: true
    },
    {
      name: "Family Coverage",
      bronze: false,
      silver: false,
      gold: false,
      platinum: true
    },
    {
      name: "24/7 Medical Support",
      bronze: false,
      silver: false,
      gold: false,
      platinum: true
    },
    {
      name: "Annual Health Checkup",
      bronze: false,
      silver: false,
      gold: true,
      platinum: true
    },
    {
      name: "Emergency Medical Evacuation",
      bronze: false,
      silver: false,
      gold: false,
      platinum: true
    },
    {
      name: "Specialist Referral",
      bronze: false,
      silver: true,
      gold: true,
      platinum: true
    },
    {
      name: "Telemedicine Consultation",
      bronze: true,
      silver: true,
      gold: true,
      platinum: true
    },
    {
      name: "Preventive Care Counseling",
      bronze: false,
      silver: false,
      gold: true,
      platinum: true
    }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <FeatureComparisonTable features={featureData} />
    </div>
  );
};

export default FeaturesComparisonPage;