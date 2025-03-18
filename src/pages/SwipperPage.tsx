import React, { useState, useEffect } from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import Swiper, { SwiperItem } from "../components/Swiper";
import back1 from "../images/back1.PNG";
import back2 from "../images/back2.PNG";
import back3 from "../images/back3.PNG";
import { PhoneIncoming } from "lucide-react";

const SwipperPage: React.FC = () => {
  // Sample data
  const swiperItems: SwiperItem[] = [
    {
      title: "Healthcare in OneClick",
      description: "We are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry",
      buttonText: "Get Ncare App",
      actionLink: "https://example.com/app1",
      imageUrl: back1
    },
    {
      title: "Medical Services",
      description: "Access top quality medical services from the comfort of your home. Our professionals are available 24/7 to address your healthcare needs.",
      buttonText: "Learn More",
      actionLink: "https://example.com/app2",
      imageUrl: back2
    },
    {
      title: "Patient First",
      description: "Our patient-first approach ensures that you receive personalized care tailored to your specific needs and circumstances.",
      buttonText: "Book Appointment",
      actionLink: "https://example.com/app3",
      imageUrl: back3
    }
  ];

  // tracks current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full overflow-hidden">
        {/* Sliding Content Container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {swiperItems.map((item, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              <div className="w-full max-w-full h-[470px] bg-[#F3F9FF] flex flex-col md:flex-row mx-auto relative">
                {/* Content Section */}
                <div className="w-full md:w-1/2 px-4 md:px-8 pt-8 md:pt-16 flex flex-col md:ml-8">
                  <div className="w-full max-w-[587px]">
                    {/* Title */}
                    <h1 className="text-3xl md:text-[35px] font-medium leading-tight tracking-normal capitalize relative left-[200px]">
                      <span className="text-black">{item.title}</span>, <br />
                      <span className="text-green-600">Treat | Buy</span>{" "}
                      <span className="text-blue-600">now Pay Later.</span>
                    </h1>
                  </div>

                  {/* Description section */}
                  <div className="w-full max-w-[587px] mt-4 md:mt-8 p-2 md:p-0 text-black relative left-[200px]">
                    <p className="text-lg md:text-[20px] font-light tracking-wider capitalize">
                      {item.description}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="flex items-center mt-8 md:mt-12 relative left-[200px]">
                    <div className="w-[283px] h-[45.25px] rounded-[23px] border-[6px] border-[#8fd3fe] flex items-center justify-center bg-custom-blue">
                      {/* Google Play icon */}
                      <div className="flex items-center justify-center h-6 w-6 bg-black mr-2">
                        <FaGooglePlay className="text-white text-xs" />
                      </div>
                      
                      {/* Apple icon */}
                      <div className="flex items-center justify-center h-6 w-6 bg-white border border-black mr-3">
                        <FaApple className="text-black text-xs" />
                      </div>
                      
                      {/* Text */}
                      <span className="text-white font-medium">
                        {item.buttonText}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-[423px] h-[250px] md:h-[501px] overflow-hidden md:absolute md:right-0 md:top-0">
                  <img
                    src={item.imageUrl}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination area*/}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:left-[300px] md:transform-none">
          <div className="flex">
            {swiperItems.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 mx-1 cursor-pointer ${
                  index === currentSlide
                    ? "w-14 bg-blue-500 rounded-lg"
                    : "w-3 bg-gray-300 rounded-full"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <Swiper 
        items={swiperItems}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
};

export default SwipperPage;