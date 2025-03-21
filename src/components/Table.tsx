import React, { useState } from 'react';

// Defining types for the table data
export interface OrderData {
  orderId: string;
  date: string;
  amount: number;
  quantity: number;
  status: 'pending' | 'out for delivery' | 'completed' | 'failed';
}

// Props for our table component
interface OrderTableProps {
  title: string;
  data: OrderData[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onOrderSelect: (orderId: string) => void; // Add this new prop
}

// Status filter options
type StatusFilter = 'all' | 'completed' | 'pending' | 'failed';

export const OrderTable: React.FC<OrderTableProps> = ({
  title,
  data,
  currentPage,
  totalPages,
  onPageChange,
  onOrderSelect
}) => {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

  // Filter data based on selected status
  const filteredData = data.filter(item => {
    if (statusFilter === 'all') return true;
    return item.status === statusFilter;
  });

  // Getting status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-custom-blue';
      case 'failed':
        return 'text-red-500';
      case 'pending':
        return 'text-[#1A612C]';
      default:
        return 'text-black';
    }
  };

  // Filter buttons
  const FilterButton: React.FC<{
    label: string;
    value: StatusFilter;
    active: boolean;
  }> = ({ label, value, active }) => (
    <button
      className={`h-7 px-3 text-sm rounded-full border ${
        active
          ? 'border-blue-500 text-blue-500'
          : 'border-gray-200 text-gray-700'
      }`}
      onClick={() => setStatusFilter(value)}
    >
      {label}
    </button>
  );

  // Pagination buttons
  const renderPaginationButtons = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
      <button
        key={page}
        className={`flex items-center justify-center mx-1 w-8 h-8 rounded-lg font-medium ${
          currentPage === page
            ? 'text-white bg-blue-500'
            : 'bg-gray-200 text-black'
        }`}
        onClick={() => onPageChange(page)}
      >
        {page}
      </button>
    ));
  };

  const handleViewDetails = (orderId: string, e: React.MouseEvent) => {
    e.preventDefault(); 
    onOrderSelect(orderId);
  };

  return (
    <div className="w-full max-w-[949px]">
      {/* Main table container */}
      <div className="w-full border border-blue-500 rounded">
        {/* Header section */}
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-xl font-medium text-custom-blue">{title}</h2>
          
          {/* Filter buttons */}
          <div className="flex justify-center mx-auto space-x-3">
            <FilterButton
              label="All"
              value="all"
              active={statusFilter === 'all'}
            />
            <FilterButton
              label="Complete"
              value="completed"
              active={statusFilter === 'completed'}
            />
            <FilterButton
              label="Pending"
              value="pending"
              active={statusFilter === 'pending'}
            />
            <FilterButton
              label="Failed"
              value="failed"
              active={statusFilter === 'failed'}
            />
          </div>
          
          <div className="w-[122px]"></div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table header */}
            <thead>
              <tr className="bg-[#DDEFFF]">
                <th className="px-4 py-2 text-custom-blue text-left font-medium text-sm tracking-wide">Order ID</th>
                <th className="px-4 py-2 text-custom-blue text-left font-medium text-sm tracking-wide">Date</th>
                <th className="px-4 py-2 text-custom-blue text-left font-medium text-sm tracking-wide">Amount (ugx)</th>
                <th className="px-4 py-2 text-custom-blue text-left font-medium text-sm tracking-wide">Quantity</th>
                <th className="px-4 py-2 text-custom-blue text-left font-medium text-sm tracking-wide">Status</th>
                <th className="px-4 py-2 text-custom-blue text-left font-medium text-sm tracking-wide">More</th>
              </tr>
            </thead>
            
            {/* Table body */}
            <tbody>
              {filteredData.map((order, index) => (
                <tr key={order.orderId}>
                  <td className="px-4 py-3 font-semibold text-xs">{order.orderId}</td>
                  <td className="px-4 py-3 text-[#757573] text-xs">{order.date}</td>
                  <td className="px-4 py-3 font-semibold text-xs">{order.amount.toLocaleString()}</td>
                  <td className="px-4 py-3 font-semibold text-xs">{order.quantity}</td>
                  <td className="px-4 py-3 text-xs">
                    <span className={getStatusColor(order.status)} >
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <button 
                      onClick={(e) => handleViewDetails(order.orderId, e)}
                      className="text-green-700 text-xs hover:underline"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination*/}
      <div className="flex justify-end mt-4">
        <div className="flex items-center">
          <button
            className="text-gray text-xs font-medium px-2"
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          <div className="flex mx-2">
            {renderPaginationButtons()}
          </div>
          
          <button
            className="text-black text-xs font-medium px-2"
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};