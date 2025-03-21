import React, { useEffect, useState } from 'react';
import product1 from '../images/product1.PNG';
import product2 from '../images/product2.PNG';
import product3 from '../images/product3.PNG';

// Types for the order details
interface OrderProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderDetails {
  orderId: string;
  date: string;
  totalProducts: number;
  status: 'order accepted' | 'processing' | 'on its way' | 'delivered';
  statusProgress: number; // 0-100 percentage of current status completion
  subtotal: number;
  shippingFees: number;
  tax: number;
  discount: number;
  total: number;
  paymentMethod: string;
  deliveryDetails: {
    name: string;
    address: string;
    email: string;
    phone: string;
  };
  products: OrderProduct[];
}

interface OrderStep {
  id: string;
  label: string;
  index: number;
}

interface OrderDetailsPageProps {
  orderId: string;
}

const OrderDetailsPage: React.FC<OrderDetailsPageProps> = ({ orderId }) => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);

  // Defining order steps
  const orderSteps: OrderStep[] = [
    { id: 'order_accepted', label: 'Order Accepted', index: 0 },
    { id: 'processing', label: 'Processing', index: 1 },
    { id: 'on_its_way', label: 'On its way', index: 2 },
    { id: 'delivered', label: 'Delivered', index: 3 }
  ];

  useEffect(() => {
    const fetchOrderDetails = () => {
      setTimeout(() => {
        const fetchedDetails = {
          ...sampleOrderDetails,
          orderId: orderId
        };
        
        setOrderDetails(fetchedDetails);
        setLoading(false);
      }, 500);
    };
    
    fetchOrderDetails();
  }, [orderId]);

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading order details...</div>;
  }

  if (!orderDetails) {
    return <div className="flex justify-center items-center h-64">Order not found</div>;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  // Getting the current step index based on status
  const getCurrentStepIndex = (status: OrderDetails['status']) => {
    switch (status.toLowerCase()) {
      case 'order accepted':
        return 0;
      case 'processing':
        return 1;
      case 'on its way':
        return 2;
      case 'delivered':
        return 3;
      default:
        return 0; // Default to first step if status doesn't match
    }
  };
    
  // Calculating the overall progress percentage
  const calculateProgressPercentage = (status: OrderDetails['status'], statusProgress: number) => {
    const currentStepIndex = getCurrentStepIndex(status);
    const totalSteps = orderSteps.length - 1; // Number of segments between steps
    
    // Base progress from completed steps
    const baseProgress = (currentStepIndex / totalSteps) * 100;
    
    // Additional progress within current step
    const stepProgress = statusProgress / 100 * (1 / totalSteps) * 100;
    
    return Math.min(baseProgress + stepProgress, 100);
  };
  
  // Determining if a step is active (current) or completed
  const getStepStatus = (stepIndex: number, currentStepIndex: number) => {
    if (stepIndex < currentStepIndex) {
      return 'completed';
    } else if (stepIndex === currentStepIndex) {
      return 'active';
    } else {
      return 'pending';
    }
  };

  const currentStepIndex = getCurrentStepIndex(orderDetails.status);
  const progressPercentage = calculateProgressPercentage(orderDetails.status, orderDetails.statusProgress || 0);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top header section */}
      <div className="w-full max-w-[1045px] flex flex-col mb-8">
        <div className="flex items-center">
          <h1 className="font-semibold text-custom-blue mr-4">Order Details</h1>
          <span className="text-gray text-xs">
            {formatDate(orderDetails.date)}, {orderDetails.totalProducts} Products
          </span>
        </div>
        <div className="w-full h-px bg-gray-200 mt-2"></div>
      </div>

      {/* Order tracking section */}
      <div className="w-full max-w-[850px] mx-auto mb-10">
        <div className="flex flex-col">
          {/* Progress bar */}
          <div className="relative h-[60px] mb-2">
            {/* Circles and labels */}
            <div className="absolute top-0 left-0 right-0 flex justify-between">
              {orderSteps.map((step, idx) => (
                <div key={step.id} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center z-10 border ${
                      getStepStatus(idx, currentStepIndex) === 'completed'
                        ? 'bg-custom-blue text-white border-custom-blue'
                        : getStepStatus(idx, currentStepIndex) === 'active'
                        ? 'bg-custom-blue text-white border-custom-blue'
                        : 'bg-white text-gray-500 border-gray-300'
                    }`}
                  >
                    {getStepStatus(idx, currentStepIndex) === 'completed' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span style={{ fontFamily: 'GT Walsheim Pro', fontWeight: 400, fontSize: '16px', lineHeight: '40px' }}>{idx + 1}</span>
                    )}
                  </div>
                  <span className="text-sm mt-1">{step.label}</span>
                </div>
              ))}
            </div>

            {/* Background track*/}
            <div className="absolute top-5 left-5 right-5 h-1 bg-gray-200"></div>

            {/* Progress fill*/}
            <div 
              className="absolute top-5 left-8 h-1 bg-custom-blue transition-all duration-300 ease-in-out"
              style={{ width: `${progressPercentage * 0.85}%` }}
            ></div>
          </div>
          
        </div>
      </div>

      {/* Order summary tables section */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Order and Payment Details table */}
        <div className="w-full md:w-[424px] h-[272px] border border-[#0085FF] rounded-lg">
  <div className="flex">
    <div className="w-1/2 p-4 border-r border-[#0085FF]">
      <h3 className="font-medium text-custom-blue mb-2">Order ID</h3>
      <p className="text-sm font-semibold">{orderDetails.orderId}</p>
    </div>
    <div className="w-1/2 p-4">
      <h3 className="font-medium text-custom-blue mb-2">Payment Method</h3>
      <p className="text-sm text-[#1A612C] ">{orderDetails.paymentMethod}</p>
    </div>
  </div>
  
  <div className="border-t border-[#0085FF]">
    <div className="p-4">
      <div className="flex justify-between text-[#757573] text-sm mb-2">
        <span>Subtotal (ugx)</span>
        <span>{orderDetails.subtotal.toLocaleString()}</span>
      </div>
      <div className="flex justify-between text-[#757573] text-sm mb-2">
        <span>Shipping Fees (ugx)</span>
        <span>{orderDetails.shippingFees.toLocaleString()}</span>
      </div>
      <div className="flex justify-between text-[#757573] text-sm mb-2">
        <span>Tax (ugx)</span>
        <span>{orderDetails.tax.toLocaleString()}</span>
      </div>
      <div className="flex justify-between text-[#757573] text-sm mb-2">
        <span>Discount</span>
        <span>{orderDetails.discount.toLocaleString()}</span>
      </div>

      <div className="flex justify-between  mt-3">
        <span className="text-[#757573]">Total</span>
        <div className="relative">
          <span className="text-custom-blue">{orderDetails.total.toLocaleString()}</span>
          <div className="absolute top-0 w-full h-px bg-custom-blue"></div>
        </div>
      </div>
    </div>
  </div>
</div>
        {/* Delivery Address table */}
        <div className="w-full md:w-[531px] h-[272px] border border-[#0085FF] rounded-lg">
          <div className="p-4">
            <h3 className="font-medium text-custom-blue mb-2">Delivery Address</h3>
          </div>
          
          <div className="border-t border-[#0085FF]">
            <div className="p-4">
              <p className="text-sm font-semibold mb-2">{orderDetails.deliveryDetails.name}</p>
              <p className="text-sm mb-3 text-gray ">{orderDetails.deliveryDetails.address}</p>
              <p className="text-sm mb-2">
                <span className="font-semibold text-gray ">Email:</span>              </p>
               <p> {orderDetails.deliveryDetails.email}
               </p>
              <p className="text-sm">
                <span className="font-semibold text-gray ">Phone:</span>
              </p>
              <p> {orderDetails.deliveryDetails.phone}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products table */}
      <div className="w-full max-w-[985px] max-h-[402px] border border-[#0085FF] rounded-lg overflow-hidden">
        {/* Table header */}
        <div className="w-full h-10 bg-[#DDEFFF] flex items-center px-6">
          <div className="grid grid-cols-4 w-full text-[#4D4D4D] ">
            <div>Products</div>
            <div>Price(ugx)</div>
            <div>Quantity</div>
            <div>Subtotal(ugx)</div>
          </div>
        </div>

        {/* Table body */}
        <div className="w-full">
          {orderDetails.products.map((product) => (
            <div key={product.id} className="grid grid-cols-4 w-full px-6 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <div className="w-[50px] h-[50px] bg-gray-100 mr-4 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium">{product.name}</span>
              </div>
              <div className="flex items-center">
                <span>{product.price.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <span>{product.quantity}</span>
              </div>
              <div className="flex items-center">
                <span>{(product.price * product.quantity).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Sample data 
const sampleOrderDetails: OrderDetails = {
  orderId: "1065",
  date: "2025-08-03",
  totalProducts: 6,
  status: "processing",
  statusProgress: 80, 
  subtotal: 40800,
  shippingFees: 5000,
  tax: 2500,
  discount: 1000,
  total: 47300,
  paymentMethod: "MTN Mobile Money",
  deliveryDetails: {
    name: "Kyomuhendo Precious",
    address: "UK Mall, Level 2",
    email: "kyomuhendo@gmail.com",
    phone: "0008887777"
  },
  products: [
    {
      id: "p1",
      name: "Pacimal 650 Tabs",
      price: 6800,
      quantity: 2,
      image: product1
    },
    {
      id: "p2",
      name: "Calma Tabs",
      price: 13600,
      quantity: 1,
      image: product2
    },
    {
      id: "p3",
      name: "Adrenaline",
      price: 3400,
      quantity: 4,
      image: product3
    },
    {
        id: "p4",
        name: "Baidyanath sitopaladi",
        price: 3400,
        quantity: 4,
        image: product3
      }
  
  ]
};

export default OrderDetailsPage;