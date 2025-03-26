import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionItemProps {
  number: string;
  question: string;
  description?: string;
}

const FaqsComponent: React.FC<AccordionItemProps> = ({ 
  number, 
  question, 
  description 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`
        w-[605px] 
        border 
        rounded-[20px] 
        ${isExpanded ? 'h-[242px] bg-[#E6F0FF] border-[#8AB9FF] shadow-[10px_25px_100px_0px_#002B6B40]' : 'h-[106px] bg-white border-[#E6E9EA]'}
        transition-all duration-300 ease-in-out
      `}
    >
      <div className="flex items-center p-6 relative">
        {/* Circular Number Area */}
        <div 
          className={`
            w-[45px] h-[45px] 
            rounded-full 
            flex items-center justify-center 
            ${isExpanded ? 'bg-white' : 'bg-[#EDEEF0]'}
          `}
        >
          <span className="text-black font-medium">{number}</span>
        </div>

        {/* Question Text */}
        <div className="ml-6 flex-grow">
          <span 
            className="
              text-[26px] 
              font-normal 
              leading-[100%] 
              text-[#1E242C] 
              tracking-normal
              block 
              w-full 
              h-[27px]
            "
          >
            {question}
          </span>
        </div>

        {/* Expand/Collapse Button */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="
            w-[24px] h-[24px] 
            border border-[2px] border-black 
            rounded-full 
            flex items-center justify-center
          "
        >
          {isExpanded ? (
            <Minus color="black" size={16} />
          ) : (
            <Plus color="black" size={16} />
          )}
        </button>
      </div>

      {/* Description (shown only when expanded) */}
      {isExpanded && description && (
        <div className="px-6 pb-6 text-[#1E242C]">
          <p className="text-base">{description}</p>
        </div>
      )}
    </div>
  );
};

export default FaqsComponent;