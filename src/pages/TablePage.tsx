import React, { useState } from 'react';
import { OrderTable, OrderData } from '../components/Table';

interface TablePageProps {
  onOrderSelect: (orderId: string) => void;
}


// data
const sampleOrders: OrderData[] = [
  {
    orderId: '#1065',
    date: '06,Aug 2025',
    amount: 88000,
    quantity: 3,
    status: 'pending'
  },
  {
    orderId: '#1066',
    date: '06,Aug 2025',
    amount: 88000,
    quantity: 12,
    status: 'out for delivery'
  },
  {
    orderId: '#1067',
    date: '06,Aug 2025',
    amount: 88000,
    quantity: 1,
    status: 'completed'
  },
  {
    orderId: '#1068',
    date: '06,Aug 2025',
    amount: 88000,
    quantity: 1,
    status: 'failed'
  },
  {
    orderId: '#1069',
    date: '06,Aug 2025',
    amount: 880000,
    quantity: 3,
    status: 'completed'
  },
  {
    orderId: '#1070',
    date: '06,Aug 2025',
    amount: 88000,
    quantity: 1,
    status: 'completed'
  },
  {
    orderId: '#1071',
    date: '06,Aug 2025',
    amount: 880000,
    quantity: 6,
    status: 'completed'
  }
];

const TablePage: React.FC<TablePageProps> = ({ onOrderSelect }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; 
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto px-4 py-8">      
      <OrderTable
        title="Order History"
        data={sampleOrders}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onOrderSelect={onOrderSelect} 

      />
    </div>
  );
};

export default TablePage;