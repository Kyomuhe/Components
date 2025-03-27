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
import Payments from './pages/Payments';
import TablePage from './pages/TablePage';
import OrderDetailsPage from './components/OrderDetails';
import EPharmacy from './pages/EPharmacy';
import SpecialistProfile from './pages/SpecialistProfile';
import PricingPage from './pages/PricingPage';
import FaqsPage from './pages/FaqsPage';
import FeaturesComparisonPage from './pages/FeaturesComparisonPage';
import DateTimeSelector from './components/DateTimeSelector';

interface AppState {
  activeTab: string | null;
  showSidebar: boolean;
  selectedOrderId: string | null;
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>({
    activeTab: null,
    showSidebar: false,
    selectedOrderId: null
  });
  
  // receives the selected tab from Header or SideBar
  const handleTabChange = (tabName: string | null) => {
    setAppState(prevState => ({
      ...prevState,
      activeTab: tabName,
      // Reseting selectedOrderId when changing tabs
      selectedOrderId: null,
      showSidebar: ['Profile', 'Overview', 'appointments', 'Notifications', 'Treat now, pay later',
         'Cart', 'Payments', 'Health savings', 'Insurance', 'Medications',
         'Messages', 'Health Records', 'Dependents', 'Lab Tests', 'Settings'].includes(tabName || '')
    }));
  };
  
  // function to handle order selection
  const handleOrderSelect = (orderId: string) => {
    setAppState(prevState => ({
      ...prevState,
      activeTab: 'OrderDetails',
      selectedOrderId: orderId
    }));
  };
  
  // Function rendering the appropriate component based on the selected tab
  const renderMainContent = () => {
    const { activeTab, selectedOrderId } = appState;
    
    if (!activeTab) {
      return <DefaultPage />;
    }

    switch (activeTab) {
      case 'Pharmacy':
        return <Pharmacy />;
      case 'Doctors':
        return <EPharmacy />;
      case 'Homecare':
        return <DemoPage onTabChange={handleTabChange} activeTab={activeTab} />;
      case 'Appointments':
        return <Care />;
      case 'Lab tests':
        return <SwipperPage />;
      case 'Health tips':
        // Passing the handleOrderSelect function to TablePage
        return <TablePage onOrderSelect={handleOrderSelect} />;
      case 'OrderDetails':
        // Rendering OrderDetailsPage with the selected order ID
        return selectedOrderId ? <OrderDetailsPage orderId={selectedOrderId} /> : <div>No order selected</div>;
      case 'Profile':
        return <Profile />;
      case 'Payments':
        return <Payments />;
      case 'Overview':
        return <TestimonialsPage/>;
      case 'appointments':
        return <SpecialistProfile/>;
      case 'Treat now, pay later':
        return <PricingPage/>;
      case 'Notifications':
        return <FaqsPage/>
      case 'Health savings':
        return <FeaturesComparisonPage/>
      case 'Settings':
        return <DateTimeSelector/>
      default:
        return (
          <div className="p-4 text-center text-gray-600">
            This feature is not yet implemented
          </div>
        );
    }
  };

  const { activeTab, showSidebar } = appState;

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