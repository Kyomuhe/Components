import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/footer';
import DefaultPage from './pages/DefaultPage';
import Pharmacy from './pages/Products';
import { CartProvider } from './components/CartContext';
import TestimonialsPage from './pages/TestimonialPage';
import DemoPage from './pages/DemoPage';
import Care from './pages/Care';
import SideBar from './components/SideBar';
import Profile from './components/Profile';
import SwipperPage from './pages/SwipperPage';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  
  // receives the selected tab from Header or SideBar
  const handleTabChange = (tabName: string | null) => {
    setActiveTab(tabName);
    
    // switching to a tab that requires the sidebar
    if (['Profile', 'Overview', 'appointments', 'Notifications', 'Treat now, pay later',
         'Cart', 'Payments', 'Health savings', 'Insurance', 'Medications',
         'Messages', 'Health Records', 'Dependents', 'Lab Tests', 'Settings'].includes(tabName || '')) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  };
  
  // Function rendering the appropriate component based on the selected tab
  const renderMainContent = () => {
    if (!activeTab) {
      return <DefaultPage />;
    }

    switch (activeTab) {
      case 'Pharmacy':
        return <Pharmacy />;
      case 'Doctors':
        return <TestimonialsPage />;
      case 'Homecare':
        return <DemoPage onTabChange={handleTabChange} activeTab={activeTab} />;
      case 'Appointments':
        return <Care />;
      case 'Lab tests':
        return <SwipperPage />;
    
      case 'Profile':
        return <Profile />;
      default:
        return (
          <div className="p-4 text-center text-gray-600">
            This feature is not yet implemented
          </div>
        );
    }
  };

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header onTabChange={handleTabChange} activeTab={activeTab} />
        <div className="flex-grow flex">
          {showSidebar && (
            <div className="p-4">
              <SideBar onTabChange={handleTabChange} activeTab={activeTab} />
            </div>
          )}
          <div className={`flex-grow ${showSidebar ? 'ml-4' : ''}`}>
            {renderMainContent()}
          </div>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;