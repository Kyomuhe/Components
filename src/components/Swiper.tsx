import React, { useEffect } from "react";
export interface SwiperItem {
  title: string;
  description: string;
  buttonText: string;
  actionLink: string;
  imageUrl: string;
}

interface SwiperProps {
  items: SwiperItem[];
  onSlideChange?: (index: number) => void;
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}

const Swiper: React.FC<SwiperProps> = ({ 
  items, 
  onSlideChange, 
  currentSlide, 
  setCurrentSlide 
}) => {
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = currentSlide === items.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(newIndex);
      if (onSlideChange) onSlideChange(newIndex);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide, items.length, onSlideChange, setCurrentSlide]);

  return (
    <div className="relative w-[423px] h-[501px] overflow-hidden">
      {/* Images */}
      <div 
        className="flex transition-transform duration-500 h-full" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {items.map((item, index) => (
          <img
            key={index}
            src={item.imageUrl}
            alt={`Slide ${index + 1}`}
            className="min-w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Swiper;
