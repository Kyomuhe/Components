import React from 'react';

import { 
  Eye, 
  User, 
  Calendar, 
  Bell, 
  CreditCard,
  ShoppingCart, 
  FlaskConical,
  Shield, 
  Pill, 
  MessageSquare,
  FileText, 
  Users, 
  Award,
  Settings, 
  LogOut,
  CircleDollarSign,
  HandCoins
} from 'lucide-react';


// Defining the structure for menu items
interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  tabName: string; 
  className?: string;
}

interface MenuSection {
  id: string;
  items: MenuItem[];
}

interface SideBarProps {
  onTabChange: (tabName: string) => void;
  activeTab: string | null;
}

const SideBar: React.FC<SideBarProps> = ({ onTabChange, activeTab }) => {
  // Defining the menu sections and their items
  const menuSections: MenuSection[] = [
    {
      id: 'main',
      items: [
        { id: 'overview', label: 'Overview', icon: <Eye size={18} />, tabName: 'Overview' },
        { id: 'profile', label: 'Profile', icon: <User size={18} />, tabName: 'Profile' },
        { id: 'appointments', label: 'Appointments', icon: <Calendar size={18} />, tabName: 'appointments' },
        { id: 'notifications', label: 'Notifications', icon: <Bell size={18} />, tabName: 'Notifications' },
        { id: 'treatNowPayLater', label: 'Treat now, pay later', icon: <CreditCard size={18} />, tabName: 'Treat now, pay later' },
      ]
    },
    {
      id: 'finances',
      items: [
        { id: 'cart', label: 'Cart', icon: <ShoppingCart size={18} />, tabName: 'Cart' },
        { id: 'payments', label: 'Payments', icon: <CircleDollarSign size={18} />, tabName: 'Payments' },
        { id: 'healthSavings', label: 'Health savings', icon: <HandCoins size={18} />, tabName: 'Health savings' },
        { id: 'insurance', label: 'Insurance', icon: <Shield size={18} />, tabName: 'Insurance' },
        { id: 'medications', label: 'Medications, Refills', icon: <Pill size={18} />, tabName: 'Medications' },
      ]
    },
    {
      id: 'health',
      items: [
        { 
          id: 'messages', 
          label: 'Messages', 
          icon: <MessageSquare size={18} />, 
          tabName: 'Messages',
          className: 'text-custom-blue'
        },
        { id: 'healthRecords', label: 'Health Records', icon: <FileText size={18} />, tabName: 'Health-records' },
        { id: 'dependents', label: 'Dependents', icon: <Users size={18} />, tabName: 'Dependents' },
        { id: 'labTests', label: 'Lab Tests, Results', icon: <FlaskConical size={18} />, tabName: 'Lab Tests' },
      ]
    },
    {
      id: 'account',
      items: [
        { id: 'settings', label: 'Settings', icon: <Settings size={18} />, tabName: 'Settings' },
        { 
          id: 'logout', 
          label: 'Logout', 
          icon: <LogOut size={18}  />, 
          tabName: '/logout',
          className: 'text-red-600'
        },
      ]
    },
  ];

  // Rendering a single menu item
  const renderMenuItem = (item: MenuItem) => (
    <div 
      key={item.id} 
      onClick={() => onTabChange(item.tabName)}
      className={`flex items-center gap-2 hover:bg-blue-50 rounded px-2 py-1 cursor-pointer ${
        item.className || ''} ${activeTab === item.tabName ? 'bg-blue-100' : ''}`}
    >
      <div className={item.className || "text-gray-600"}>{item.icon}</div>
      <span className={`${item.className || "text-gray-800"} text-[17px] font-normal leading-tight`}>
        {item.label}
      </span>
    </div>
  );

  return (
    <div 
      className="w-60 h-[773px] bg-[#F9FCFF] rounded-lg flex flex-col px-0 py-4 gap-6 sticky top-4"
      style={{ 
        fontFamily: 'GT Walsheim Pro, sans-serif',
      }}
    >
      {/* Rendering the first three sections */}
      <div className="px-4">
        {menuSections.slice(0, 3).map((section) => (
          <div key={section.id} className="flex flex-col gap-3 mb-6">
            {section.items.map(renderMenuItem)}
          </div>
        ))}
      </div>

      {/* Upgrade banner - full width */}
      <div className="w-full h-[35px] bg-custom-blue flex items-center px-4 gap-3 text-white">
        <Award size={18} />
        <span className="text-[15px] font-medium">Upgrade to silver plan</span>
      </div>

      {/* Rendering the account section */}
      <div className="px-4 mt-2">
        <div className="flex flex-col gap-3">
          {menuSections[3].items.map(renderMenuItem)}
        </div>
      </div>
    </div>
  );
};

export default SideBar;