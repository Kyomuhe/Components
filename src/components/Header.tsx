import React, { useState, ChangeEvent, FC } from 'react';
import { LayoutGrid, MapPin, Search, PhoneCall, Mail, CarFront, Bell, ShoppingCart } from 'lucide-react';
import { FaBars } from 'react-icons/fa';
import Footer from './footer';
import Pharmacy from '../pages/pharmacy';
import profile from '../images/profile.PNG';
// importing components
import AppButton from '../components/AppButton';
import FormInput from '../components/FormInput';

// Define types for the component's props, if any
interface HeaderProps {
  // Add any props here if needed
}

const Header: FC<HeaderProps> = () => {
  // Setting Pharmacy as the default active tab
  const [activeTab, setActiveTab] = useState<string>('Pharmacy');
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false); // State for mobile menu
  const [location, setLocation] = useState<string>('Kansanga');
  const [profileImage, setProfileImage] = useState<string>(profile);

  const handleNavClick = (tabName: string): void => {
    setActiveTab(tabName);
    if (tabName !== 'Pharmacy') {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setProfileImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLocationChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setLocation(e.target.value);
  };

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <div className="flex-none">
        {/* Top Header */}
        <div className="flex justify-between items-center p-2.5 text-sm border-b border-gray-300">
          <div className="flex items-center gap-2.5">
            <PhoneCall className="text-blue-500" />
            <span>0200898888</span>
            <Mail className="text-blue-500" />
            <span>helpdesk@ncre.com</span>
          </div>
          {/* Top Header Links */}
          <div className="hidden md:flex items-center gap-2.5">
            <span className="w-px h-4 bg-gray-500 mx-2.5"></span>

            <span>
              <CarFront className="text-gray-500 mr-1" /> How it works
            </span>
            <span className="w-px h-4 bg-gray-500 mx-2.5"></span>
            <span>
              <CarFront className="text-gray-500 mr-1" /> Help Center
            </span>
          </div>
        </div>

        {/* Bottom Header */}
        <div className="flex flex-col p-4 border-t border-gray-300">
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col">
              <h1 className="text-blue-500 text-2xl font-bold">ncare.</h1>
              <AppButton
              variant="primary"
              className="rounded-full mt-2"
              leftIcon={<LayoutGrid />}
              rightIcon={null}     
              onClick={() => {}}   
              >
                SHOP BY CATEGORIES
              </AppButton>            
              </div>

            {/* Mobile Menu Toggle */}
            <AppButton
            variant="secondary"
            className="md:hidden p-2 bg-transparent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            leftIcon={null}  
            rightIcon={null} 
            >
              <FaBars className="text-2xl text-blue-500" />
              </AppButton>
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
                <ShoppingCart className="text-blue-500" />
                <Bell className="text-blue-500" />
                
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
                <ShoppingCart className="text-blue-500" />
                <Bell className="text-blue-500" />
                {/* Circular area for user profile*/}
                <div className="bg-white rounded-full p-1">
                  <img
                    src={profileImage}
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
            <div className="relative flex items-center w-full md:max-w-2xl border border-blue-600 rounded-full">              
              <div className="relative flex items-center bg-blue-500 rounded-l-full px-3 py-2 z-10">
                <MapPin className="text-white ml-1" size={16} />
 
                <select 
                  className="bg-blue-500 text-white border-none outline-none pr-6" 
                  value={location} 
                  onChange={handleLocationChange}
                >
                  <option>Kansanga</option>
                  <option>Kabuuma</option>
                  <option>Kalangala</option>
                  <option>Massajja</option>
                  <option>Wadegeya</option>
                  <option>Masaka</option>
                </select>
                <div className="absolute -right-4 top-0 h-full w-6 bg-blue-500 z-0">
                  <div className="absolute top-0 right-0 h-full w-8 bg-blue-50 rounded-l-full" />
                </div>
              </div>
              {/*  search input */}
              <div className="flex items-center bg-blue-50 flex-grow rounded-r-full pl-6 pr-3 py-2 ">
                <input
                  type="text"
                  placeholder="Search medicines and health products"
                  className="bg-blue-50 w-full outline-none border-0"
                />
                <Search className="text-blue-500 ml-2" size={18} />
              </div>
            </div>
            <AppButton
            variant="primary"
            className="rounded-full whitespace-nowrap w-full md:w-auto"
            onClick={() => {}} 
            leftIcon={null}  
            rightIcon={null} 
            >
              Upload Rx
            </AppButton>


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