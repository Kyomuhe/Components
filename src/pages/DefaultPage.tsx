import React from 'react';
// importing images
import image1 from '../images/image1.PNG';
import image2 from '../images/image2.PNG';
import image3 from '../images/image3.PNG';
import image4 from '../images/image4.PNG';
import image5 from '../images/image5.PNG';
import image6 from '../images/image6.jpeg';
import image7 from '../images/image7.PNG';
import image8 from '../images/image8.PNG';
import image9 from '../images/image9.PNG';
import image10 from '../images/image10.PNG';

// Import components
import Login from '../components/login';

const DefaultPage: React.FC = () => {
  const images = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10
  ];
  
  return (
    <div className="flex-grow p-8 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          {/* Images */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-4">
              {[0, 1, 2].map((index) => (
                <div key={index} className="rounded-2xl overflow-hidden h-32">
                  <img
                    src={images[index]}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
              
            <div className="space-y-4">
              {[3, 4, 5, 6].map((index) => (
                <div key={index} className="rounded-2xl overflow-hidden h-32">
                  <img
                    src={images[index]}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
              
            <div className="space-y-4">
              {[7, 8, 9].map((index) => (
                <div key={index} className="rounded-2xl overflow-hidden h-32">
                  <img
                    src={images[index]}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
          
        {/* Login Component */}
        <Login />
      </div>
    </div>
  );
};

export default DefaultPage;