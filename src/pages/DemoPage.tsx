import React from 'react';
import LeftSidebar from '../components/SideBar';

const DemoPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 p-4">
      <LeftSidebar />
    </div>
  );
};

export default DemoPage;