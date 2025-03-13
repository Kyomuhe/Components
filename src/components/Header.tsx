import React, { useState, ChangeEvent, FC, useEffect, useRef } from 'react';
import { LayoutGrid, MapPin, Search, PhoneCall, Mail, ChevronDown, HelpCircle, CircleChevronRight } from 'lucide-react';
import { FaBars, FaHeadset } from 'react-icons/fa';

import DefaultPage from '../pages/DefaultPage';
import CartIcon from './CartIcon';

// importing components
import AppButton from '../components/AppButton';

interface HeaderProps {
  onTabChange: (tabName: string | null) => void;
  activeTab: string | null;
}

const Header: FC<HeaderProps> = ({ onTabChange, activeTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [location, setLocation] = useState<string>('Kansanga');
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (tabName: string): void => {
    onTabChange(tabName); 
  };

  const handleLocationChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setLocation(e.target.value);
  };

  const toggleCategoriesDropdown = (): void => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };


  const handleLoginRegister = () => {
    window.location.href ='DefaultPage';
  };
  
  // Handles click outside to close the categories menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target as Node)) {
        setIsCategoriesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="font-sans w-full bg-white relative z-40" style={{ height: 'auto', minHeight: '118px' }} ref={headerRef}>
      {/* Top Header */}
      <div className="flex justify-between items-center p-2.5 text-sm border-b border-gray-300 w-full" style={{ height: '39px' }}>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center rounded-full bg-[#363636] w-6 h-6">
            <PhoneCall className="text-white" size={20} />
          </div>
          <span>0200898888</span>
          <div className="flex items-center justify-center rounded-full bg-[#363636] w-6 h-6">
            <Mail className="text-white" size={20} />
          </div>
          <span>helpdesk@ncre.com</span>
        </div>
        <div className="hidden md:flex items-center gap-2.5">
          <span className="w-px h-4 bg-gray-500 mx-2.5"></span>

          <span className="flex items-center">
            <HelpCircle className="text-gray-500 mr-1" size={20} /> How it works
          </span>
          <span className="w-px h-4 bg-gray-500 mx-2.5"></span>
          <span className="flex items-center">
            <FaHeadset className="text-gray-500 mr-1" size={20} /> Help Center
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 w-full" style={{ height: '57px' }}>
        {/* Logo and Navigation Container */}
        <div className="flex items-center justify-between w-full">
          {/* ncare Logo */}
          <h1 className="text-blue-500 leading-none ml-16" 
            style={{ 
              width: '137px', 
              height: '57px',
              fontFamily: 'GT Walsheim Pro',
              fontSize: '50px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}>
            <span className="font-light">n</span><span className="font-bold">care.</span>
          </h1>
          
          {/* Navigation Tabs in Desktop */}
          <nav className="hidden md:flex items-center">
            {['Pharmacy', 'Doctors', 'Homecare', 'Appointments', 'Lab tests', 'Health tips'].map(
              (item, index) => (
                <span
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`cursor-pointer transition-colors duration-200 mx-3 ${
                    activeTab === item ? 'text-blue-500 font-medium' : ''
                  } hover:text-blue-400`}
                  style={{ width: '82px', height: '22px' }}
                >
                  {item}
                </span>
              )
            )}
          </nav>
            
{/* Icon and Login/Register Button */}
<div className="hidden md:flex items-center space-x-6">
  <CartIcon />
  
  {/* Login/Register */}
  <AppButton
    variant="primary"
    className="flex items-center justify-center"
    leftIcon={null}
    rightIcon={null}
    onClick={handleLoginRegister}
    style={{ 
      background: '#1A612C',
      width: '144px',
      height: '47px',
      borderRadius: '8px',
    }}
  >
    <span className="whitespace-nowrap" style={{
      width: '104px',
      height: '18px',
      padding: '0 4px'
    }}>
      Login Register
    </span>
  </AppButton>
</div>
          {/* Mobile Menu Toggle - Only shows on small screens */}
          <div className="md:hidden">
            <AppButton
              variant="secondary"
              className="p-2 bg-transparent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              leftIcon={null}
              rightIcon={null}
            >
              <FaBars className="text-blue-500" size={20} />
            </AppButton>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 p-4 bg-white shadow-md fixed left-0 right-0 z-50" style={{ top: headerRef.current ? `${headerRef.current.getBoundingClientRect().top + 96}px` : '96px' }}>
          {['Pharmacy', 'Doctors', 'Homecare', 'Appointments', 'Lab tests', 'Health tips'].map(
            (item) => (
              <span
                key={item}
                onClick={() => {
                  handleNavClick(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`cursor-pointer transition-colors duration-200 py-2 ${
                  activeTab === item ? 'text-blue-500 font-medium' : ''
                } hover:text-blue-400`}
              >
                {item}
              </span>
            )
          )}
          <div className="flex items-center gap-4 py-2">
            <CartIcon/>
            <AppButton
              variant="primary"
              className="rounded-md mt-2 flex items-center justify-center"
              leftIcon={null}
              rightIcon={null}
              onClick={handleLoginRegister}
              style={{ 
                background: '#1A612C',
                width: '144px',
                height: '47px',
                borderRadius: '8px',
              }}
            >
              <span className="whitespace-nowrap" style={{
                width: '104px',
                height: '18px'
              }}>
                Login Register
              </span>
            </AppButton>
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40" 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ top: headerRef.current ? `${headerRef.current.getBoundingClientRect().bottom}px` : '225px' }}
        ></div>
      )}

      {/* Categories, Search and Upload */}
      <div className="flex flex-col md:flex-row items-center px-4 w-full mt-4 gap-4 md:gap-4">
        {/* Shop by Categories Button and Menu */}
        <div className="relative w-full md:w-auto" ref={categoriesRef}>
          <AppButton
            variant="primary"
            className="rounded-full flex items-center w-full md:w-auto"
            leftIcon={<LayoutGrid size={20} />}
            rightIcon={null}
            onClick={toggleCategoriesDropdown}
            style={{ 
              width: '316px', 
              height: '49px',
              maxWidth: '100%' 
            }}
          >
            SHOP BY CATEGORIES
          </AppButton>

          {/* Categories Menu*/}
          {isCategoriesOpen && (
            <div 
              className="absolute z-50 shadow-lg bg-white" 
              style={{ 
                width: '316px',
                maxHeight: '450px',
                overflowY: 'auto',
                borderBottomRightRadius: '10px',
                borderBottomLeftRadius: '10px'
              }}
            >
              <div className="flex flex-col">
                {['Value of the day', 'Top offers', 'New arrivals'].map((category, index) => (
                  <div 
                    key={index} 
                    className="px-4 py-3 border-b border-gray-200 cursor-pointer hover:bg-gray-50"
                  >
                    <div style={{ 
                      width: '172px',
                      height: '17px',
                      fontFamily: 'GT Walsheim Pro',
                      fontWeight: 500,
                      fontSize: '20px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#2D2C2C'
                    }}>
                      {category}
                    </div>
                  </div>
                ))}
                
                {/* Remaining categories with CircleChevronRight icon */}
                {[
                  'Baby care', 
                  'Pain Relief', 
                  'Supplements', 
                  'Women Care', 
                  'Personal care', 
                  'Home Essentials', 
                  'Skin Conditions', 
                  'Sexual Health', 
                  'Herbals'
                ].map((category, index) => (
                  <div 
                    key={index + 3} 
                    className="px-4 py-3 border-b border-gray-200 cursor-pointer hover:bg-gray-50 flex justify-between items-center"
                  >
                    <div style={{ 
                      width: '153px',
                      height: '18px',
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      fontSize: '20px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#555555'
                    }}>
                      {category}
                    </div>
                    <CircleChevronRight size={20} className="text-gray-500" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search Container*/}
        <div 
          className="relative flex w-full md:flex-1 overflow-hidden" 
          style={{ 
            height: '46px', 
            maxWidth: '743px',
            borderRadius: '9999px',
          }}
        >
          {/* Location selector*/}
          <div 
            className="relative flex items-center bg-blue-500 h-full pl-3 pr-2 z-10"
            style={{
              borderTopLeftRadius: '9999px',
              borderBottomLeftRadius: '9999px',
              width: '150px',
            }}
          >
            <MapPin className="text-white" size={20} />
            <select 
            className="bg-blue-500 text-white border-none outline-none pr-8 h-full appearance-none" 
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
            <ChevronDown className="text-white absolute right-2 pointer-events-none z-20" size={14} />            
            {/* C-shaped curve overlay */}
            <div 
              className="absolute right-0 top-0 h-full w-10 overflow-hidden"
              style={{ right: '-10px' }}
            >
              <div 
                className="absolute bg-blue-500 h-full w-20 rounded-full"
                style={{ left: '-10px' }}
              ></div>
            </div>
          </div>

          {/* Search input */}
          <div 
            className="flex items-center bg-blue-50 flex-grow h-full pl-6 pr-3"
            style={{
              borderTopRightRadius: '9999px',
              borderBottomRightRadius: '9999px',
              borderTop: '1px solid #0085FF',
              borderRight: '1px solid #0085FF',
              borderBottom: '1px solid #0085FF',
            }}
          >
            <input
              type="text"
              placeholder="Search medicines and health products"
              className="bg-blue-50 w-full outline-none border-0 text-sm md:text-base"
              style={{ minWidth: "0", width: "100%" }}
            />
            <Search className="text-blue-500 ml-2 flex-shrink-0" size={20} />
          </div>
        </div>

        {/* Upload Rx Button */}
        <AppButton
          variant="primary"
          className="rounded-full flex items-center justify-center font-medium text-white w-full md:w-auto"
          onClick={() => {}} 
          leftIcon={null}  
          rightIcon={null}
          style={{ 
            width: '118px', 
            height: '34px', 
            borderRadius: '23px', 
            borderWidth: '5px',
            maxWidth: '100%'
          }}
        >
          Upload Rx
        </AppButton>
      </div>

      {/* Overlay when categories dropdown is open */}
      {isCategoriesOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40" 
          onClick={() => setIsCategoriesOpen(false)}
          style={{ top: headerRef.current ? `${headerRef.current.getBoundingClientRect().bottom}px` : '225px' }}
        ></div>
      )}

      <div className="h-px bg-gray-300 w-full mt-4 mb-0"></div>
    </div>
  );
};

export default Header;