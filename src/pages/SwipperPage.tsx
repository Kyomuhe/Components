import React, { useState } from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import Swiper, { SwiperItem } from "../components/Swiper";
import back1 from "../images/back1.PNG";
import back2 from "../images/back2.PNG";
import back3 from "../images/back3.PNG";


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

  // This is the state to track current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full h-[518px] bg-[#F3F9FF] flex">
      <div className="w-[587px] pl-16 pt-16 flex flex-col " style={{ marginLeft: "220px" }}>
      
        <div className="w-[495px]">
            {/* Title */}
          <h1 className="text-4xl font-medium leading-tight">
            <span className="text-black">{swiperItems[currentSlide].title}</span>, <br />
            <span className="text-green-600">Treat | Buy</span>{" "}
            <span className="text-blue-600">now Pay Later.</span>
          </h1>
        </div>

        {/* Description section */}
        <div className="w-full mt-6 p-4 text-black">
          <p className="text-xl font-light tracking-wide">
            {swiperItems[currentSlide].description}
          </p>
        </div>

        {/* Button and pagination container */}
        <div className="flex items-center mt-12">
          {/* App download button with bluish border */}
          <div className="w-[283px] h-[38px] rounded-[23px] border-[8px] border-[#0085FF5E] flex items-center justify-center bg-custom-blue">
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
              {swiperItems[currentSlide].buttonText}
            </span>
          </div>

          {/* Pagination container*/}
          <div className="w-24 ml-4">
            {/* Pagination indicators from Swiper component */}
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
      </div>

      {/* Swiper component */}
      <div className="ml-auto">
        <Swiper 
          items={swiperItems}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      </div>
    </div>
  );
};

export default SwipperPage;
