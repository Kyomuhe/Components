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
  link: string;
  className?: string;
}

// Defining the structure for menu sections
interface MenuSection {
  id: string;
  items: MenuItem[];
}

const SideBar: React.FC = () => {
  // Defining the menu sections and their items
  const menuSections: MenuSection[] = [
    {
      id: 'main',
      items: [
        { id: 'overview', label: 'Overview', icon: <Eye size={18} />, link: '/overview' },
        { id: 'profile', label: 'Profile', icon: <User size={18} />, link: '/profile' },
        { id: 'appointments', label: 'Appointments', icon: <Calendar size={18} />, link: '/appointments' },
        { id: 'notifications', label: 'Notifications', icon: <Bell size={18} />, link: '/notifications' },
        { id: 'treatNowPayLater', label: 'Treat now, pay later', icon: <CreditCard size={18} />, link: '/treat-now-pay-later' },
      ]
    },
    {
      id: 'finances',
      items: [
        { id: 'cart', label: 'Cart', icon: <ShoppingCart size={18} />, link: '/cart' },
        { id: 'payments', label: 'Payments', icon: <CircleDollarSign size={18} />, link: '/payments' },
        { id: 'healthSavings', label: 'Health savings', icon: <HandCoins size={18} />, link: '/health-savings' },
        { id: 'insurance', label: 'Insurance', icon: <Shield size={18} />, link: '/insurance' },
        { id: 'medications', label: 'Medications, Refills', icon: <Pill size={18} />, link: '/medications' },
      ]
    },
    {
      id: 'health',
      items: [
        { 
          id: 'messages', 
          label: 'Messages', 
          icon: <MessageSquare size={18} />, 
          link: '/messages',
          className: 'text-custom-blue'
        },
        { id: 'healthRecords', label: 'Health Records', icon: <FileText size={18} />, link: '/health-records' },
        { id: 'dependents', label: 'Dependents', icon: <Users size={18} />, link: '/dependents' },
        { id: 'labTests', label: 'Lab Tests, Results', icon: <FlaskConical size={18} />, link: '/lab-tests' },
      ]
    },
    {
      id: 'account',
      items: [
        { id: 'settings', label: 'Settings', icon: <Settings size={18} />, link: '/settings' },
        { 
          id: 'logout', 
          label: 'Logout', 
          icon: <LogOut size={18}  />, 
          link: '/logout',
          className: 'text-red-600'
        },
      ]
    },
  ];

  // Rendering a single menu item
  const renderMenuItem = (item: MenuItem) => (
    <a 
      key={item.id} 
      href={item.link} 
      className={`flex items-center gap-2 hover:bg-blue-50 rounded px-2 py-1 ${item.className || ''}`}
    >
      <div className={item.className || "text-gray-600"}>{item.icon}</div>
      <span className={`${item.className || "text-gray-800"} text-[17px] font-normal leading-tight`}>
        {item.label}
      </span>
    </a>
  );

  return (
    <div 
      className="w-60 h-[773px] bg-[#F9FCFF] rounded-lg flex flex-col p-4 gap-6 sticky top-4"
      style={{ 
        fontFamily: 'GT Walsheim Pro, sans-serif',
      }}
    >
      {/* Rendering the first three sections */}
      {menuSections.slice(0, 3).map((section) => (
        <div key={section.id} className="flex flex-col gap-3">
          {section.items.map(renderMenuItem)}
        </div>
      ))}

      {/* Upgrade banner */}
      <div className="w-full h-[35px] bg-custom-blue rounded flex items-center px-3 gap-3 text-white">
        <Award size={18} />
        <span className="text-[15px] font-medium">Upgrade to silver plan</span>
      </div>

      {/* Rendering the account section */}
      <div className="flex flex-col gap-3">
        {menuSections[3].items.map(renderMenuItem)}
      </div>
    </div>
  );
};

export default SideBar;