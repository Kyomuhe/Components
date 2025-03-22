import React from 'react';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import ara2 from '../images/ara2.png';
import ara3 from '../images/ara3.png';
import Frame from '../images/Frame.png';
import image9 from '../images/image9.PNG';
import profile2 from '../images/profile2.PNG';
import profile3 from '../images/profile3.PNG';
import ncareImage from '../images/ara1.png'; 

const EPharmacySection: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between px-6 md:px-12 lg:px-24 py-16 md:py-22 bg-white relative space-x-14">
        <div className="w-full max-w-lg">
          <h2 className="text-4xl md:text-5xl font-normal leading-tight text-[#1E242C] font-['GT_Walsheim_Pro']">
            How ePharmacy works
          </h2>

          <div className="mt-8 space-y-4">
            <div className="flex items-center">
              <span className="w-20 text-6xl md:text-7xl lg:text-8xl font-normal leading-none text-[#002B6B] opacity-15 font-['GT_Walsheim_Pro']">
                01
              </span>
              <div className="flex-1 h-24 ml-4 rounded-[20px] border border-[#EDEEF0] bg-white shadow-lg flex items-center">
                <div className="w-10 h-10 ml-4 rounded-full bg-[#E1E9FE] flex items-center justify-center">
                  <img src={Frame} className='w-[24px] h-[24px]' alt="Frame icon" />
                </div>
                <div className="ml-4 flex-1 h-14 flex flex-col">
                  <p className="font-['GT_Walsheim_Pro'] text-xl">
                    Place an Order 
                  </p>
                  <p className='text-xs text-[#414D60]'>Search or Upload Prescription</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="flex-1 h-24 mr-4 rounded-[20px] border border-[#EDEEF0] bg-white shadow-lg flex items-center">
                <div className="w-10 h-10 ml-4 rounded-full bg-[#E1E9FE] flex items-center justify-center">
                  <img src={icon2} className='w-[24px] h-[24px]' alt="Icon 2" />
                </div>
                <div className="ml-4 flex-1 h-14 flex flex-col">
                  <p className="font-['GT_Walsheim_Pro'] text-xl">
                    Fullfillment & delivery
                  </p>
                  <p className='text-xs text-[#414D60]'>Products packed $ delivered at doorstep</p>
                </div>
              </div>
              <span className="w-20 text-6xl md:text-7xl lg:text-8xl font-normal leading-none text-[#002B6B] opacity-15 font-['GT_Walsheim_Pro']">
                02
              </span>
            </div>

            <div className="flex items-center">
              <span className="w-20 text-6xl md:text-7xl lg:text-8xl font-normal leading-none text-[#002B6B] opacity-15 font-['GT_Walsheim_Pro']">
                03
              </span>
              <div className="flex-1 h-24 ml-4 rounded-[20px] border border-[#EDEEF0] bg-white shadow-lg flex items-center">
                <div className="w-10 h-10 ml-4 rounded-full bg-[#E1E9FE] flex items-center justify-center">
                  <img src={icon1} className='w-[24px] h-[24px]' alt="Icon 1" />
                </div>
                <div className="ml-4 flex-1 h-14 flex flex-col">
                  <p className="font-['GT_Walsheim_Pro'] text-xl">
                    Need a refill?
                  </p>
                  <p className='text-xs text-[#414D60]'>We will remind you when its Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-lg h-[490px] relative hidden md:block">
          <div className="absolute left-0 top-0">
            <img className="w-[180px] h-[280px] rounded-[20px]" src={ara3} alt="Ara 3" />
            <div className="w-[180px] h-[80px] mt-4 rounded-[20px] border border-[#EDEEF0] bg-white shadow-lg flex items-center">
              <div className="w-[90px] h-[50px] ml-4 relative">
                <img className="w-12 h-12 rounded-full absolute left-0 top-0 z-30" src={profile2} alt="Profile 2" />
                <img className="w-12 h-12 rounded-full absolute left-3 top-0 z-20" src={profile3} alt="Profile 3" />
                <img className="w-12 h-12 rounded-full absolute left-6 top-0 z-10" src={image9} alt="Image 9" />
              </div>
              <div className="ml-2 flex items-center">
                <p className="font-['GT_Walsheim_Pro'] text-sm">26k+ patients</p>
              </div>
            </div>
          </div>

          <img className="absolute left-[200px] top-0 w-[300px] h-[400px] rounded-[20px]" src={ara2} alt="Ara 2" />
        </div>
      </div>

      <div className="mx-auto mt-16 w-[1200px] h-[256px] rounded-[10px] bg-custom-blue relative">
        <img 
          src={ncareImage} 
          alt="NCare" 
          className="absolute w-[346px] h-[191px] top-8 left-[30px]" 
        />
        
        <div className="absolute top-12 left-[420px] text-white">
          <h2 className="text-4xl  font-['GT_Walsheim_Pro']">Ncare</h2>
          <p className="mt-4 text-xl font-['GT_Walsheim_Pro']">We are the leading High Quality</p>
          <p className="text-xl font-['GT_Walsheim_Pro']">virtual Health Platforms.</p>
        </div>
        
        <div className="absolute top-7 right-[50px] flex flex-col space-y-4">
          <button className="w-[301px] h-[50px] rounded-[30px] bg-[#353B51] border-[8px] border-[#D6D4D3] text-white font-['GT_Walsheim_Pro']">
            Download Ncare App
          </button>
          <button className="w-[301px] h-[50px] rounded-[30px] bg-[#353B51] border-[8px] border-[#D6D4D3] text-white font-['GT_Walsheim_Pro']">
            Help center
          </button>
        </div>
      </div>
    </div>
  );
};

export default EPharmacySection;