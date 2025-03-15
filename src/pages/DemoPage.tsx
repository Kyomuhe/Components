import React from 'react';
import SideBar from '../components/SideBar';

interface DemoPageProps {
  onTabChange: (tabName: string) => void;
  activeTab: string | null;
}

const DemoPage: React.FC<DemoPageProps> = ({ onTabChange, activeTab }) => {
  return (
    <div className="flex min-h-screen bg-gray-100 p-4">
      <SideBar onTabChange={onTabChange} activeTab={activeTab} />
      <div className="ml-4 flex-grow">
      </div>
    </div>
  );
};

export default DemoPage;
