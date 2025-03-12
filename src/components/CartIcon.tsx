import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../components/CartContext';

interface CartIconProps {
  className?: string;
}

const CartIcon: React.FC<CartIconProps> = ({ className = '' }) => {
  const { openCart, getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <div className={`relative cursor-pointer ${className}`} onClick={openCart}>
      <ShoppingCart size={24} />
      
      {/* Badge showing number of items */}
      {itemCount > 0 && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount > 99 ? '99+' : itemCount}
        </div>
      )}
    </div>
  );
};

export default CartIcon;