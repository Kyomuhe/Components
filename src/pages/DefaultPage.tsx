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
    <div className="flex-grow p-4 md:p-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-24 xl:gap-32">
          {/* Left Side - Images */}
          <div className="w-full lg:w-auto mb-8 lg:mb-0">
            {/* Mobile view - scrollable grid */}
            <div className="block lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-square rounded-xl overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Desktop view with original exact dimensions */}
            <div className="hidden lg:block" style={{
              width: '524.6796875px',
              height: '717px',
              position: 'relative',
            }}>
              {/* First column - 3 images */}
              <div style={{
                width: '156.84375px',
                height: '533.08203125px',
                position: 'absolute',
                top: '51.35px',
                left: '0px',
              }}>
                {[0, 1, 2].map((index) => (
                  <div 
                    key={index} 
                    className="rounded-xl overflow-hidden"
                    style={{
                      width: '156.84375px',
                      height: '165.24609375px',
                      marginBottom: index < 2 ? '20px' : '0px'
                    }}
                  >
                    <img
                      src={images[index]}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Second column - 4 images */}
              <div style={{
                width: '156.84375px',
                height: '717px',
                position: 'absolute',
                top: '0px',
                left: '183.92px',
              }}>
                {[3, 4, 5, 6].map((index) => (
                  <div 
                    key={index} 
                    className="rounded-xl overflow-hidden"
                    style={{
                      width: '156.84375px',
                      height: '165.24609375px',
                      marginBottom: index < 6 ? '20px' : '0px'
                    }}
                  >
                    <img
                      src={images[index]}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Third column - 3 images */}
              <div style={{
                width: '156.84375px',
                height: '533.08203125px',
                position: 'absolute',
                top: '59.75px',
                left: '367.84px',
              }}>
                {[7, 8, 9].map((index) => (
                  <div 
                    key={index} 
                    className="rounded-xl overflow-hidden"
                    style={{
                      width: '156.84375px',
                      height: '165.24609375px',
                      marginBottom: index < 9 ? '20px' : '0px'
                    }}
                  >
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
          
          {/* Right Side - Login */}
          <div className="w-full lg:w-1/3">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultPage;