import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/footer';
import DefaultPage from './pages/DefaultPage';
import Pharmacy from './pages/Products';
import { CartProvider } from './components/CartContext';
import TestimonialsPage from './pages/TestimonialPage';
import DemoPage from './pages/DemoPage';
import Care from './pages/Care';


const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  
  // This function will receive the selected tab from Header
  const handleTabChange = (tabName: string | null) => {
    setActiveTab(tabName);
  };
  
  // Function to render the appropriate component based on the selected tab
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
        return <DemoPage />;
      case 'Appointments':
        return <Care/>;
      
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
      <div className="flex-grow">
        {renderMainContent()}
      </div>
      <Footer />
    </div>
    </CartProvider>
  );
};

export default App;