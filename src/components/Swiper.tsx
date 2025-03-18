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
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = currentSlide === items.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(newIndex);
      if (onSlideChange) onSlideChange(newIndex);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide, items.length, onSlideChange, setCurrentSlide]);

  return null;
};

export default Swiper;