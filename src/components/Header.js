import React, { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaSearch,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaBell,
  FaCar,
  FaWindowRestore,
  FaBars,
} from 'react-icons/fa';
import Footer from './footer';
import Pharmacy from '../pages/pharmacy';
import profile from '../images/profile.PNG'

const Header = () => {
  // Setting Pharmacy as the default active tab
  const [activeTab, setActiveTab] = useState('Pharmacy');
  const [showMessage, setShowMessage] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const handleNavClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName !== 'Pharmacy') {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  };

  const [profileImage, setProfileImage] = useState(profile);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };



  return (
    <div className="font-sans min-h-screen flex flex-col">
      <div className="flex-none">
        {/* Top Header */}
        <div className="flex justify-between items-center p-2.5 text-sm border-b border-gray-300">
          <div className="flex items-center gap-2.5">
            <FaPhone className="text-blue-500" />
            <span>0200898888</span>
            <FaEnvelope className="text-blue-500" />
            <span>helpdesk@ncre.com</span>
          </div>
          {/* Header Links */}
          <div className="hidden md:flex items-center gap-2.5">
            <span className="w-px h-4 bg-gray-500 mx-2.5"></span>

            <span>
              <FaCar className="text-gray-500 mr-1" /> How it works
            </span>
            <span className="w-px h-4 bg-gray-500 mx-2.5"></span>
            <span>
              <FaCar className="text-gray-500 mr-1" /> Help Center
            </span>
          </div>
        </div>

        {/* Bottom Header */}
        <div className="flex flex-col p-4 border-t border-gray-300">
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col">
              <h1 className="text-blue-500 text-2xl font-bold">loggo.</h1>
              <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full mt-2">
                <FaWindowRestore className="text-white" />
                <span>SHOP BY CATEGORIES</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-blue-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FaBars className="text-2xl" />
            </button>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {['Pharmacy', 'Doctors', 'Homecare', 'Appointments', 'Lab tests', 'Health tips'].map(
                (item) => (
                  <span
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`cursor-pointer transition-colors duration-200 ${
                      activeTab === item ? 'text-blue-500 font-medium' : ''
                    } hover:text-blue-400`}
                  >
                    {item}
                  </span>
                )
              )}
            <div className="flex items-center gap-4">
            <FaShoppingCart className="text-blue-500" />
            <FaBell className="text-blue-500" />
            
            {/* User Profile Image with Upload Option */}
            <div className="relative">
              <input 
                type="file" 
                accept="image/*"
                className="hidden" 
                id="profileImageUpload"
                onChange={handleImageUpload}
              />
              <label htmlFor="profileImageUpload" className="cursor-pointer">
                <div className="bg-white rounded-full p-1 border-2 border-blue-500">
                  <img 
                    src={profileImage} 
                    alt="User Profile" 
                    className="w-8 h-8 rounded-full object-cover hover:opacity-75"
                  />
                </div>
              </label>
            </div>
          </div>
            </nav>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden flex flex-col gap-4 mt-4">
              {['Pharmacy', 'Doctors', 'Homecare', 'Appointments', 'Lab tests', 'Health tips'].map(
                (item) => (
                  <span
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`cursor-pointer transition-colors duration-200 ${
                      activeTab === item ? 'text-blue-500 font-medium' : ''
                    } hover:text-blue-400`}
                  >
                    {item}
                  </span>
                )
              )}
              <div className="flex items-center gap-4">
                <FaShoppingCart className="text-blue-500" />
                <FaBell className="text-blue-500" />
                  {/* Circular area for user profile*/}
                  <div className=" bg-white rounded-full p-1">
                    <img
                      src="https://via.placeholder.com/30"
                      alt="User"
                      className="w-6 h-6 rounded-full"
                    />
                </div>
              </div>
            </div>
          )}

          {/* Search and Upload Rx Section */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:pl-[calc(12rem)] mt-4 md:-mt-2">
            {/* Search Container */}
            <div className="flex items-center bg-blue-50 rounded-full p-2 w-full md:max-w-2xl border border-blue-600">
              <div className="flex items-center bg-blue-500 rounded-l-full px-3 py-1">
                <select className="bg-blue-500 text-white border-none outline-none">
                  <option>Kansanga</option>
                  <option>Kabuuma</option>
                  <option>Kalangala</option>
                  <option>Massajja</option>
                  <option>Wadegeya</option>
                  <option>Masaka</option>
                </select>
                <FaMapMarkerAlt className="text-black ml-2" />
              </div>
              <input
                type="text"
                placeholder="Search medicines and health products"
                className="bg-blue-50 px-4 py-2 w-full outline-none"
              />
              <FaSearch className="text-blue-500 mr-2" />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full whitespace-nowrap w-full md:w-auto">
              Upload Rx
            </button>
          </div>
        </div>
        {/* Bottom Line */}
        <div className="h-px bg-gray-300 w-full"></div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow">
        {activeTab === 'Pharmacy' && <Pharmacy />}
        {showMessage && (
          <div className="p-4 text-center text-gray-600">
            This feature is not yet implemented
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
};

export default Header;