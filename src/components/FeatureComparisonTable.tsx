import React from 'react';
import check from '../images/check.png';

interface FeatureComparisonProps {
  features: {
    name: string;
    bronze: boolean;
    silver: boolean;
    gold: boolean;
    platinum: boolean;
  }[];
}

const FeatureComparisonTable: React.FC<FeatureComparisonProps> = ({ features }) => {
  return (
    <div 
      className="
        w-[1000px] 
        h-[455px] 
        overflow-hidden
        border
        border-[#0064D2]
        border-opacity-5
        font-gt-walsheim
      "
    >
      {/* Table Header */}
      <div 
        className="
          grid 
          grid-cols-[2fr_1fr_1fr_1fr_1fr] 
          w-full 
          h-[50px] 
          bg-[#0064D2] 
          bg-opacity-5 
          items-center
          font-semibold
        "
      >
        <div className="pl-4 text-left">Compare all ncare health features</div>
        <div className='text-custom-blue'>BRONZE</div>
        <div className='text-custom-blue'>SILVER</div>
        <div className='text-custom-blue'>PLATINUM</div>
        <div className='text-custom-blue'>GOLD</div>
      </div>

      {/* Feature Rows */}
      {features.map((feature, index) => (
        <div 
          key={feature.name}
          className={`
            grid 
            grid-cols-[2fr_1fr_1fr_1fr_1fr] 
            w-full 
            h-[50px] 
            items-center
            text-center
            text-[#41474C]
            ${index % 2 === 0 ? 'bg-white ' : 'bg-[#0064D2] bg-opacity-5'}
          `}
        >
          <div className="pl-4 text-left">{feature.name}</div>
          <div className="flex">
            {feature.bronze && (
              <img 
                src={check} 
                alt="Check" 
                className="w-[25px] h-[25px] inline-block" 
              />
            )}
          </div>
          <div className="flex">
            {feature.silver && (
              <img 
                src={check} 
                alt="Check" 
                className="w-[25px] h-[25px] inline-block" 
              />
            )}
          </div>
          <div className="flex">
            {feature.gold && (
              <img 
                src={check} 
                alt="Check" 
                className="w-[25px] h-[25px] inline-block" 
              />
            )}
          </div>
          <div className="flex">
            {feature.platinum && (
              <img 
                src={check} 
                alt="Check" 
                className="w-[25px] h-[25px] inline-block" 
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureComparisonTable;