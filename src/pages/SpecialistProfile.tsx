import React from 'react';
import doctor from '../images/doctor.png';
import Clock from '../images/Clock.png';
import badge from '../images/badge.png';


const SpecialistProfile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-[377px] h-[278px] bg-white rounded-2xl border border-gray-200 p-4 relative">
        <div className="flex mb-6">
          <div className="w-[90px] h-[90px] rounded-full overflow-hidden">
            <img 
              src={doctor} 
              alt="Abaasa Hellon" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="ml-4 w-[207px]">
            <h2 className="text-lg font-bold text-black font-['GT_Walsheim_Pro']">
              Abaasa Hellon
            </h2>
            <p className="text-sm text-[#7A7D84] font-['GT_Walsheim_Pro'] font-normal">
              specialist | 12 years experience
            </p>
            <div className="w-[86px] h-6 bg-[#E3F1FF] rounded-[20px] flex items-center justify-center px-[10px] py-[2px] mt-2">
                <span className="text-[#0085FF] text-xs font-medium font-['GT_Walsheim_Pro']">
                Pediatric
                </span>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>
        
        <div className="flex w-full px-1">
          <div className="w-1/2 pr-2 border-r border-gray-200">
            <div className="flex items-center">
              <div className="w-5 h-5 mr-2">
                <img src={Clock} alt="Clock icon" />
              </div>
              <span className="text-sm font-bold text-[#232323] font-['GT_Walsheim_Pro']">
                Tue, thu
              </span>
            </div>
            <p className="text-xs text-[#7A7D84] font-['GT_Walsheim_Pro'] ml-7">
              10:00 AM-01:00 PM
            </p>
          </div>
          
          <div className="w-1/2 pl-4">
            <div className="flex items-center">
              <div className="w-5 h-5 mr-2">
                <img src={badge} alt="Badge icon" />
              </div>
              <span className="text-sm font-bold text-[#232323] font-['GT_Walsheim_Pro']">
                Specializes in;
              </span>
            </div>
            <p className="text-xs text-[#7A7D84] font-['GT_Walsheim_Pro'] ml-7">
              Skin,hair and nails
            </p>
          </div>
        </div>
        
        <button className="w-[322px] h-10 bg-[#0085FF] text-white rounded-lg flex items-center justify-center mt-6 mx-auto">
          Book an appointment
        </button>
      </div>
    </div>
  );
};

export default SpecialistProfile;