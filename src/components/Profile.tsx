import React from "react";
import profile3 from '../images/profile3.PNG';

const Profile: React.FC = () => {
  // Dummy data for doctors
  const doctors = [
    { name: "Dr. Frank Ntambi", specialty: "Dermatologist", hospital: "Ccare Hospital", experience: "6 years", image: profile3 },
    { name: "Dr. Abaasa Hellon", specialty: "Cardiologist", hospital: "Norvik Hospital", experience: "5 years", image:profile3 },
    { name: "Dr. Nagasha Ritah", specialty: "Physiologist", hospital: "Case Hospital", experience: "6 years", image:profile3},
    { name: "Dr. Hassan Wafula", specialty: "Obstetric", hospital: "Nsambya Hospital", experience: "16 years", image: profile3 },
    { name: "Dr. Delight Cliton", specialty: "Gynecologist", hospital: "Mengo Hosipital", experience: "7 years", image: profile3},
  ];

  return (
    <div className="absolute w-[296px] h-[773px] top-[200px] left-[413px] bg-[#F9FCFF] rounded-[5px] flex flex-col">
      {/* Profile completion header */}
      <div className="absolute w-[180px] h-[20px] top-[23px] left-[24px] flex justify-between items-center">
        <span className="font-[GT_Walsheim_Pro] font-medium text-base">My Profile</span>
        <span className="font-[GT_Walsheim_Pro] font-medium text-blue-500">51% complete</span>
      </div>

{/* Profile image area */}
<div className="absolute w-[100px] h-[100px] top-[67px] left-[108px] rounded-full flex items-center justify-center overflow-hidden">
  {/* Progress circle - 51% blue, rest gray */}
  <div className="absolute inset-0">
    <svg viewBox="0 0 100 100" className="absolute inset-0">
      <circle cx="50" cy="50" r="48" fill="transparent" stroke="#E0E0E0" strokeWidth="4" />
      <circle 
        cx="50" 
        cy="50" 
        r="48"
        fill="transparent" 
        stroke="#0085FF" 
        strokeWidth="4" 
        strokeDasharray="301.6" 
        strokeDashoffset="147.8" 
        transform="rotate(-90 50 50)" 
      />
    </svg>
  </div>
  
    {/* Profile image */}
    <div className="w-[72px] h-[72px] rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
      <img src={profile3} alt="Profile" className="w-full h-full object-cover" />
    </div>
  </div>

      {/* Name greeting */}
      <div className="absolute w-[208px] h-[19px] top-[191px] left-[44px] font-[GT_Walsheim_Pro] font-medium text-[17px] text-center capitalize">
        Good Morning, Abaasa
      </div>

      {/* NcareId */}
      <div className="absolute w-[208px] h-[14px] top-[216px] left-[44px] font-[GT_Walsheim_Pro] font-medium text-[12px] text-center capitalize text-[#7E7E7E]">
        NcareId: 250012
      </div>

      {/* Edit Photo link */}
      <div className="absolute w-[133px] h-[24px] top-[245px] left-[82px] font-[DM_Sans] font-medium text-base text-center underline text-custom-blue">
        Edit Photo
      </div>

{/* Plan information section */}
<div className="absolute w-full top-[293px] left-0 flex">
  {/* Current plan */}
  <div className="w-[148px] h-[64px] bg-[#0085FF] flex items-center">
    <div className="w-[28px] h-[28px] ml-[13px] bg-white rounded-full flex items-center justify-center">
      <div className="w-[14px] h-[10px] bg-[#0085FF] rounded-[4px] relative">
        {/* Inner white circle */}
        <div className="w-[5px] h-[5px] bg-white rounded-full absolute top-[2.5px] left-[4.5px]">
          {/* Down arrow */}
          <div className="absolute w-[6px] h-[6px]" style={{ top: '-10px', left: '-0.5px' }}>
            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 0V6M3.5 6L1 3.5M3.5 6L6 3.5" stroke="#0085FF" strokeWidth="1"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="ml-[10px]">
      <div className="w-[69px] h-[14px] font-[GT_Walsheim_Pro] font-medium text-[12px] text-white">
        Current plan
      </div>
      <div className="w-[48px] h-[21px] font-[GT_Walsheim_Pro] font-bold text-[18px] text-white">
        Silver
      </div>
    </div>
  </div>
  
  {/* Expiry */}
  <div className="w-[148px] h-[64px] bg-[#FD3C4A] flex items-center">
    <div className="w-[28px] h-[28px] ml-[13px] bg-white rounded-full flex items-center justify-center">
      <div className="w-[14px] h-[10px] bg-[#FD3C4A] rounded-[4px] relative">
        {/* Inner white circle */}
        <div className="w-[5px] h-[5px] bg-white rounded-full absolute top-[2.5px] left-[4.5px]">
          {/* Up arrow  */}
          <div className="absolute w-[6px] h-[6px]" style={{ top: '-10px', left: '-0.5px' }}>
            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 8V2M3.5 2L1 4.5M3.5 2L6 4.5" stroke="#FD3C4A" strokeWidth="1"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="ml-[10px]">
      <div className="w-[69px] h-[14px] font-[GT_Walsheim_Pro] font-medium text-[12px] text-white">
        Expires on:
      </div>
      <div className="w-[80px] h-[21px] font-[GT_Walsheim_Pro] font-bold text-[15px] text-white whitespace-nowrap">
        Feb 06 2026
      </div>
    </div>
  </div>
</div>      
{/* Popular Doctors section */}
      <div className="absolute w-[138px] h-[18px] top-[377px] left-[24px] font-[GT_Walsheim_Pro] font-medium text-base text-[#202020] capitalize">
        Popular Doctors
      </div>

      {/* Doctors list */}
      <div className="absolute w-[248px] top-[409px] left-[24px]">
        {doctors.map((doctor, index) => (
          <div key={index} className="w-full mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                  {/* doctor images */}
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-[GT_Walsheim_Pro] font-medium text-sm">{doctor.name}</div>
                  <div className="text-xs text-grey">{doctor.specialty}, {doctor.hospital}</div>
                </div>
              </div>
              <div className="bg-custom-blue text-white text-xs py-1 px-2 rounded-lg">
                {doctor.experience}
              </div>
            </div>
            {index < doctors.length - 1 && <div className="w-full h-px bg-gray-200 mt-2"></div>}
          </div>
        ))}
      </div>

      {/* Explore all button */}
      <div className="absolute w-[226px] h-[37px] bottom-[20px] left-[35px] bg-custom-blue rounded-[40px] flex items-center justify-center text-white font-medium text-sm">
        Explore all Doctors
      </div>
    </div>
  );
};

export default Profile;