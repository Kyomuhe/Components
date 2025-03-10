import React from 'react';
import { Star }from 'lucide-react';

// Product interface
interface Product {
    id: string;
    name: string;
    image_url: string;
    description: string;
    price: number;
    rating: number;
    discount: number;
    vendor_name: string;
}

interface ProductCardProps {
    product: Product;
    onAddToCart: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    // Calculating the original price based on current price and discount
    const originalPrice = product.price / (1 - product.discount / 100);
    
    // Formating currency to UGX
    const formatCurrency = (amount: number) => {
        return `Ugx ${amount.toLocaleString()}`;
    };
    
    // Rendering stars based on rating
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={`text-yellow-400 ${i <= rating ? 'fill-current' : 'text-gray-300'}`}>
                    <Star/>
                </span>
            );
        }
        return stars;
    };
    
    return (
        <div className="relative w-64 bg-white rounded-3xl shadow-md overflow-hidden">
            {/* Discount badge */}
            {product.discount > 0 && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-xl rounded-tr-xl">
                    -{product.discount}%
                </div>
            )}
            
            {/* Product image */}
            <div className="h-48 w-full overflow-hidden">
                <img 
                    src={product.image_url} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Product details */}
            <div className="p-4">
                {/* Product name */}
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                
                {/* Vendor name */}
                <p className="text-sm text-gray-600 mb-2">By {product.vendor_name}</p>
                
                {/* Rating stars */}
                <div className="flex mb-3">
                    {renderStars(product.rating)}
                </div>
                
                {/* Price section */}
                <div className="flex items-center justify-between">
                    <div>
                        {product.discount > 0 && (
                            <p className="text-sm text-gray-500 line-through">
                                {formatCurrency(originalPrice)}
                            </p>
                        )}
                        <p className="text-lg font-bold text-gray-900">
                            {formatCurrency(product.price)}
                        </p>
                    </div>
                    
                    {/* Add to cart button */}
                    <button 
                        onClick={() => onAddToCart(product.id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;