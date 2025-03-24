import React from 'react';

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  currency: string;
  period: string;
  introText: string;
  features: string[];
  isSelected: boolean;
  color: string;
  borderColor: string;
  onClick: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  subtitle,
  price,
  currency,
  period,
  introText,
  features,
  isSelected,
  color,
  borderColor,
  onClick
}) => {
  const baseBorderWidth = 1; // Base border width in pixels
  const topBorderWidth = baseBorderWidth * 3; // Top border is triple thickness
  
  // Generating V patterns
  const generateVPatterns = () => {
    const patterns = [];
    const baseWidth = 20;
    const baseHeight = 25;
    const increment = 5;
    
    for (let i = 0; i < 12; i++) {
      const width = baseWidth + (i * increment);
      const height = baseHeight + (i * increment);
      const top = 10 + (i * 5);
      const right = Math.max(0, 5 - i);
      const opacity = 0.1 + (i * 0.01);
      
      patterns.push(
        <div 
          key={i} 
          className="absolute" 
          style={{ 
            top: `${top}%`, 
            right: `${right}px`, 
            opacity: opacity, 
            zIndex: 1 
          }}
        >
          <svg 
            width={width} 
            height={height} 
            viewBox={`0 0 ${width} ${height}`} 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d={`M0 0 L${width/2} ${height} L${width} 0`} 
              stroke="white" 
              strokeWidth="2" 
              fill="none" 
            />
          </svg>
        </div>
      );
    }
    
    return patterns;
  };
  
  return (
    <div 
      className="relative w-64 h-[542px] p-6 flex flex-col gap-4 cursor-pointer transition-all duration-300 shadow-md overflow-hidden"
      onClick={onClick}
      style={{ 
        width: '250.73px',
        borderRadius: '16px',
        backgroundColor: isSelected ? '#0085FF' : 'white',
        border: isSelected ? 'none' : `${baseBorderWidth}px solid ${borderColor}`,
      }}
    >
      {/* Triple-thick curved top border */}
      {!isSelected && (
        <div 
          className="absolute top-0 left-0 right-0"
          style={{ 
            height: `${topBorderWidth}px`,
            background: borderColor,
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
          }}
        />
      )}
      
      {/* V-shaped white patterns when selected */}
      {isSelected && generateVPatterns()}
      
      <div className="flex flex-col gap-0 z-10">
        <h2 
          className={`font-bold text-2xl leading-tight ${isSelected ? 'text-white' : 'text-custom-blue'}`}
          style={{ 
            width: '203.4px',
            height: '25.89px',
            fontFamily: 'GT Walsheim Pro, sans-serif',
            fontSize: '25px',
            lineHeight: '100%',
            marginBottom: '2px' 
          }}
        >
          {title}
        </h2>
        
        <p 
          className={`text-base ${isSelected ? 'text-[#D0D4DE]' : 'text-[#8690AB]'}`}
          style={{ 
            width: '171px',
            height: '15px',
            fontFamily: 'Archivo, sans-serif',
            fontWeight: 400,
            fontSize: '17px',
            lineHeight: '100%',
          }}
        >
          {subtitle}
        </p>
      </div>
      
      <div className="flex items-end z-10 mt-2">
        <span 
          className={`font-bold text-4xl ${isSelected ? 'text-blue-900' : 'text-blue-900'}`}
          style={{ 
            fontFamily: 'GT Walsheim Pro, sans-serif',
            fontWeight: 700,
            fontSize: '35px',
            lineHeight: '100%',
          }}
        >
          {price}
        </span>
        
        <span 
          className={`text-sm ${isSelected ? 'text-blue-900' : 'text-blue-900'}`}
          style={{ 
            fontFamily: 'GT Walsheim Pro, sans-serif',
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '100%',
            marginLeft: '1px', // Minimal space between price and currency
          }}
        >
          {currency}/{period}
        </span>
      </div>
      
      <p 
        className={`text-base font-medium mb-4 z-10 ${isSelected ? 'text-white' : 'text-blue-900'}`}
        style={{ 
          width: '203px',
          height: '14px',
          fontFamily: 'GT Walsheim Pro, sans-serif',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '100%',
        }}
      >
        {introText}
      </p>
      
      <button 
        className={`w-full py-3 font-medium z-10 ${isSelected ? 'bg-[#F2F4F5] text-blue-500' : 'bg-blue-500 text-white'}`}
        style={{ 
          width: '203.46px',
          height: '43.92px',
          borderRadius: '15px',
        }}
      >
        Get Started
      </button>
      
      <div className="mt-4 flex flex-col gap-3 z-10">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div 
              className={`w-4 h-4 zigzag-circle flex items-center justify-center ${isSelected ? 'bg-[#F2F4F5]' : 'bg-blue-500'}`}
              style={{ 
                width: '14.74px',
                height: '14.74px',
                background: isSelected ? '#FFFFFF' : '#0085FF',
                position: 'relative',
                
              }}
            >
              
              {/* Check mark */}
              <svg 
                width="10" 
                height="10" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" 
                  fill={isSelected ? '#0085FF' : '#FFFFFF'}
                />
              </svg>
            </div>
            <span className={`text-sm font-semibold ${isSelected ? 'text-black' : 'text-black'}`}>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;