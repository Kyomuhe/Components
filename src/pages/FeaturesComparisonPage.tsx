import React from 'react';
import FeatureComparisonTable from '../components/FeatureComparisonTable';
import drop from '../images/drop.png';

const FeaturesComparisonPage: React.FC = () => {
  const featureData = [
    {
      name: "Chat,voice $ video",
      bronze: true,
      silver: false,
      gold: false,
      platinum: true
    },
    {
      name: "Unlimited Specialties",
      bronze: true,
      silver: true,
      gold: true,
      platinum: true
    },
    {
      name: "Remote Monitoring",
      bronze: true,
      silver: false,
      gold: false,
      platinum: true
    },
    {
      name: "E heath Records",
      bronze: false,
      silver: false,
      gold: false,
      platinum: true
    },
    {
      name: "24/7 health Support",
      bronze: false,
      silver: false,
      gold: true,
      platinum: true
    },
    {
      name: "EHR Sharing",
      bronze: true,
      silver: true,
      gold: false,
      platinum: true
    },
    {
      name: "Acess free drugs",
      bronze: false,
      silver: false,
      gold: false,
      platinum: true
    },
    {
      name: "Homecare nurse",
      bronze: true,
      silver: true,
      gold: true,
      platinum: true
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-6">
      <FeatureComparisonTable features={featureData} />
      <div className='flex flex-row items-center relative left-[14px] space-x-2'>
        <p className='font-semibold'>Expand all health table features</p>
        <img src={drop} alt='drop arrow' className='h-[12px] w-[12px]' />  
      </div>
    </div>
  );
};

export default FeaturesComparisonPage;