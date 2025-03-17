import React from 'react';
import Rating from './Rating';

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
    // Optional fields that might be available in the detail view
    composition?: string;
    expiry?: string;
    consumeType?: string;
    returnable?: boolean;
    soldCount?: number;
}

interface ProductCardProps {
    product: Product;
    onAddToCart: (productId: string) => void;
    onProductSelect: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onProductSelect }) => {
    const originalPrice = product.price / (1 - product.discount / 100);

    // Handle image click to show product details
    const handleImageClick = () => {
        onProductSelect(product.id);
    };
    
    // Handle add to cart
    const handleAddToCart = (e: React.MouseEvent) => {
        // Stop event propagation to prevent navigation when clicking the button
        e.stopPropagation();
        onAddToCart(product.id);
    };
    
    const formatCurrency = (amount: number) => {
        return `Ugx ${amount.toLocaleString()}`;
    };
    
    return (
        <div 
            className="relative bg-white overflow-hidden border border-custom-blue float-left"
            style={{
                width: '189px',
                height: '278px',
                left: '64px',
                marginRight: '16px',
                marginBottom: '16px',
                borderRadius: '18px'
            }}
        >
            {/* Top section container for image and badge */}
            <div 
                className="relative"
                style={{
                    width: '188px',
                    height: '152px'
                }}
            >
                {/* Discount badge */}
                {product.discount > 0 && (
                    <div 
                        className="absolute text-white bg-custom-blue flex items-center justify-center opacity-75"
                        style={{
                            width: '48px',
                            height: '47px',
                            top: '0px',
                            left: '141px', 
                            borderTopRightRadius: '20px',
                            borderBottomLeftRadius: '20px'
                        }}
                    >
                        -{product.discount}%
                    </div>
                )}
                
                {/* Product image - now clickable */}
                <img 
                    src={product.image_url} 
                    alt={product.name}
                    onClick={handleImageClick}
                    className="object-contain cursor-pointer"
                    style={{
                        width: '102px',
                        height: '100px',
                        top: '35px', 
                        left: '40px',
                        objectFit: 'cover',
                        position: 'absolute'


                    }

                    }
                />
            </div>
            
            <div className="p-2">
                {/* Product Name */}
                <h3 className="font-medium text-sm mb-1 truncate">{product.name}</h3>
                
                
                {/* Vendor name and stars*/}
                <div className="flex items-center justify-between mb-2 mt-2">
                    <p className="text-xs text-gray-600">By {product.vendor_name}</p>
                    
                    {/* Using the rating component */}
                    <Rating rating={product.rating} />
                </div>
                
                {/* Separator line */}
                <div className="w-full h-px bg-gray-300 my-2"></div>
                
                {/* Previous price (crossed out) */}
                {product.discount > 0 && (
                    <p 
                        className="text-xs line-through whitespace-nowrap"
                        style={{
                            width: '49.75px',
                            height: '9.81px',
                            color: '#555555',
                            overflow: 'visible'
                        }}
                    >
                        {formatCurrency(originalPrice)}
                    </p>
                )}
                
                {/* Current price and add to cart*/}
                <div className="flex items-center justify-between mt-1">
                    <p 
                        className="text-base font-bold text-gray-900 whitespace-nowrap"
                        style={{
                            width: '79px',
                            height: '20px',
                            overflow: 'visible'
                        }}
                    >
                        {formatCurrency(product.price)}
                    </p>
                    
                    {/* Add to cart link */}
                    <a 
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onAddToCart(product.id);
                        }}
                        className="text-custom-blue hover:text-blue-700 text-sm whitespace-nowrap"
                        style={{
                            width: '69px',
                            height: '15px',
                            overflow: 'visible'
                        }}
                    >
                        Add to Cart
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;