import React, { useEffect, useRef } from 'react';
import { X, Trash, Plus, Minus } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  image_url: string;
  price: number;
  discount?: number;
  quantity: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, newQuantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem
}) => {
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node) && isOpen) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Calculating total price
  const totalPrice = items.reduce((sum, item) => {
    const itemPrice = item.price * item.quantity;
    return sum + itemPrice;
  }, 0);

  // Calculating original price (before discount)
  const getOriginalPrice = (price: number, discount?: number) => {
    if (!discount) return price;
    return Math.round(price / (1 - discount / 100));
  };

  // Formating price to UGX currency
  const formatPrice = (price: number) => {
    return `UGX ${price.toLocaleString()}`;
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
      )}
      
      {/* Cart Sidebar */}
      <div 
        ref={cartRef}
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out overflow-y-auto max-w-xs w-[95%] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-semibold text-custom-blue">Cart Items</h2>
            <button 
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100 text-red-500"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Cart items */}
          <div className="flex-grow overflow-y-auto py-4">
            {items.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Your cart is empty
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map(item => (
                  <li key={item.id} className="flex border-b pb-4">
                    {/* Product image */}
                    <div className="flex-shrink-0 w-16 h-16">
                      <img 
                        src={item.image_url} 
                        alt={item.name} 
                        className="object-cover h-full w-full rounded-md"
                      />
                    </div>
                    
                    {/* Product details */}
                    <div className="ml-4 flex-grow">
                      <h3 className="font-bold">{item.name}</h3>
                      
                      {/* Price section */}
                      <div className="flex items-start mt-1">
                        <div className="flex flex-col">
                          {/* Current price */}
                          <span className="font-medium text-primary">
                            {formatPrice(item.price)}
                          </span>
                          
                          {/* Original price if discounted */}
                          {item.discount && (
                            <span className="text-sm text-grey line-through">
                              {formatPrice(getOriginalPrice(item.price, item.discount))}
                            </span>
                          )}
                        </div>
                        
                        {/* Discount badge */}
                        {item.discount && (
                          <span className="ml-2 text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded h-5 mt-1">
                            {item.discount}% off
                          </span>
                        )}
                      </div>
                      
                      {/* Quantity controls and delete */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="px-2 py-1 hover:bg-gray-100 text-red-500"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-2">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-gray-100 text-green-600"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1 text-red-500 hover:bg-red-50 rounded"
                        >
                          <Trash size={16} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Footer */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-custom-blue">Total:</span>
              <span className="font-bold text-lg">{formatPrice(totalPrice)}</span>
            </div>
            <button 
              className="w-full py-3 bg-custom-blue text-white rounded-md font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={items.length === 0}
              onClick={() => console.log('Proceed to checkout')}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;