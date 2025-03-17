import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Plus, Minus, Check, Share2 } from 'lucide-react';

interface Product {
    id: string;
    name: string;
    image_url: string;
    image_url1: string;
    image_url2: string;
    price: number;
    rating: number;
    discount: number;
    vendor_name: string;
    // these fields will only be used in the detailed view
    composition?: string;
    expiry?: string;
    consumeType?: string;
    returnable?: boolean;
    soldCount?: number;
    description: string;
}

interface ProductDetailPageProps {
    product: Product;
    onBack?: () => void; 
}

const ProductDetail: React.FC<ProductDetailPageProps> = ({ product, onBack }) => {
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('Product details');
    const [selectedThumbnail, setSelectedThumbnail] = useState(0);
    
    const additionalImages = [
        product.image_url,
        product.image_url1, 
        product.image_url2, 
    ];

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);
    
    const tabs = ['Product details', 'Safety advice', 'Reviews', 'Product substitutes'];
    
    const formatCurrency = (amount: number): string => {
        return `Ugx ${amount.toLocaleString()}`;
    };
    
    const originalPrice = product.price / (1 - product.discount / 100);
    
    const handlePrevImage = () => {
        setSelectedThumbnail(prev => (prev > 0 ? prev - 1 : additionalImages.length - 1));
    };
    
    const handleNextImage = () => {
        setSelectedThumbnail(prev => (prev < additionalImages.length - 1 ? prev + 1 : 0));
    };

    return (
        <div className="w-full bg-white">
            {/* Back button */}
            {onBack && (
                <button 
                    onClick={onBack}
                    className="flex items-center text-blue-500 p-4 hover:underline"
                >
                    <ChevronLeft size={16} className="mr-2" />
                    Back to products
                </button>
            )}
            
            {/* Main Container */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row">
                    {/* Image Container */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center">
                        {/* Main image container*/}
                        <div 
                            className="rounded-3xl flex items-center justify-center mb-4 w-full max-w-full"
                            style={{ 
                                width: '100%',
                                maxWidth: '536px', 
                                height: 'auto',
                                aspectRatio: '536/463',
                                background: '#E6F0FB'
                            }}
                        >
                            <div className="flex items-center justify-center" 
                                style={{ 
                                    width: '60%', 
                                    maxWidth: '382px', 
                                    height: 'auto',
                                    aspectRatio: '1/1'
                                }}
                            >
                                <img 
                                    src={additionalImages[selectedThumbnail]} 
                                    alt={product.name} 
                                    className="object-contain w-full h-full mix-blend-multiply"
                                />
                            </div>
                        </div>
                        
                        {/* Thumbnail Navigation*/}
                        <div className="flex items-center justify-center mb-6 w-full max-w-lg px-2">
                            <button 
                                onClick={handlePrevImage}
                                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-2 flex-shrink-0"
                            >
                                <ChevronLeft size={16} />
                            </button>
                            
                            <div className="flex space-x-2 md:space-x-3 overflow-x-auto justify-center">
                                {additionalImages.map((img, index) => (
                                    <div 
                                        key={index}
                                        onClick={() => setSelectedThumbnail(index)}
                                        className={`rounded-3xl p-1 md:p-2 cursor-pointer flex-shrink-0 ${selectedThumbnail === index ? 'border-2 border-blue-500' : ''}`}
                                        style={{ 
                                            width: '70px', 
                                            height: '70px',
                                            background: '#E6F0FB',
                                            maxWidth: 'calc(33% - 8px)'
                                        }}
                                    >
                                        <img 
                                            src={img} 
                                            alt={`Thumbnail ${index + 1}`}
                                            className="object-contain w-full h-full mix-blend-multiply"
                                        />
                                    </div>
                                ))}
                            </div>
                            
                            <button 
                                onClick={handleNextImage}
                                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center ml-2 flex-shrink-0"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                    
                    {/* Details Container - Better mobile responsiveness */}
                    <div className="w-full lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
                        {/* Product Name */}
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 md:mb-4 font-gt-walsheim pr-2">
                                {product.name}
                            </h1>
                            <div className="w-[33px] h-[33px] flex items-center justify-center border border-gray-400 rounded-full flex-shrink-0">
                                <Share2 className="text-gray-500 w-[16px] h-[16px]" />
                            </div>
                        </div>
                        
                        {/* Composition */}
                        <p className="font-semibold text-custom-blue mb-2 md:mb-4 font-poppins text-sm sm:text-base">
                            Composition: {product.composition || 'Pregablin 65, Pregablin 80, Ciprofloxasin 10, Profloxamarin 70'}
                        </p>
                        
                        {/* Rating */}
                        <div className="flex mb-2 md:mb-4">
                            {[...Array(5)].map((_, index) => (
                                <Star 
                                    key={index} 
                                    className={index < product.rating ? "text-custom-blue fill-custom-blue" : "text-gray-300"} 
                                    size={20} 
                                />
                            ))}
                        </div>
                        
                        {/* Price Section */}
                        <div className="flex items-center mb-1 md:mb-2 font-gt-walsheim">
                            <span className="line-through text-gray text-sm md:text-base mr-2">
                                {formatCurrency(originalPrice)}
                            </span>
                            <span className="text-green-600 text-sm md:text-base">-{product.discount}%</span>
                        </div>
                        
                        {/* Current Price */}
                        <div className="mb-2 md:mb-4 text-custom-blue px-2 md:px-4 py-1 md:py-2 rounded-lg inline-block font-gt-walsheim text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                            {formatCurrency(product.price)}
                        </div>
                        
                        {/* Product Info List */}
                        <div className="mb-3 md:mb-4 space-y-2 md:space-y-3">
                            {[
                                { label: <>Policy: <span className='text-custom-blue'> Non Returnable</span></>, icon: <Check size={14} /> },
                                { label: <>Expires on: <span className="text-custom-blue">{product.expiry || '26 Feb 2029'}</span></>, 
                                icon: <Check size={14} /> },
                                { label: <>Consume type: <span className="text-custom-blue">{product.consumeType || 'Oral'}</span></>, icon: <Check size={14} /> },
                                { label: <>Mfr/Marketer: <span className='text-custom-blue'>{product.vendor_name}</span></>, icon: <Check size={14} /> }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-black flex items-center justify-center mr-2">
                                        {item.icon}
                                    </div>
                                    <span className="text-xs sm:text-sm">{item.label}</span>
                                </div>
                            ))}
                        </div>
                        
                        {/* Sold Amount */}
                        <div className="mb-4 md:mb-6 text-custom-blue px-2 md:px-3 py-1 rounded inline-block font-poppins font-semibold text-xs sm:text-sm">
                            {product.soldCount || 262} sold in the last 24 hours
                        </div>
                        
                        {/* Quantity Selector and Order Button - Mobile friendly layout */}
                        <div className="flex flex-wrap items-center gap-3 md:gap-4">
                            <div className="flex items-center justify-between border border-gray-300 rounded w-28 sm:w-32 lg:w-36 h-10 md:h-12">
                                <button 
                                    onClick={decrementQuantity} 
                                    className="w-1/3 h-full flex items-center justify-center"
                                >
                                    <Minus size={14} />
                                </button>
                                {/*border separators */}
                                <span className="w-1/3 h-full flex items-center justify-center border-l border-r border-gray-300 text-sm md:text-base">
                                    {quantity}
                                </span>
                                <button 
                                    onClick={incrementQuantity} 
                                    className="w-1/3 h-full flex items-center justify-center"
                                >
                                    <Plus size={14} />
                                </button>
                            </div>
                            
                            <button 
                                className="bg-blue-500 text-white rounded-lg px-4 sm:px-6 md:px-8 py-2 md:py-3 text-sm md:text-base"
                            >
                                Order it now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Tabs Section - Improved scrolling for mobile */}
            <div className="w-full bg-blue-600 bg-opacity-5 mt-4 md:mt-8">
                <div className="container mx-auto">
                    <div className="flex items-center overflow-x-auto px-2 md:px-0">
                        {tabs.map((tab, index) => (
                            <button 
                                key={index}
                                onClick={() => setActiveTab(tab)}
                                className={`py-2 md:py-4 px-3 md:px-6 whitespace-nowrap text-sm md:text-base ${activeTab === tab ? 'border-b-2 border-blue-500 font-medium' : ''}`}
                                style={{ fontFamily: 'GT Walsheim Pro' }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Tab Content Section */}
            <div className="container mx-auto p-4 min-h-32">
                {activeTab === 'Product details' && (
                    <div className="py-2 md:py-4 text-sm md:text-base">
                        <p>{product.description || "Detailed product information would appear here."}</p>
                    </div>
                )}
                {activeTab === 'Safety advice' && (
                    <div className="py-2 md:py-4 text-sm md:text-base">
                        <p>Safety information and usage guidelines would appear here.</p>
                    </div>
                )}
                {activeTab === 'Reviews' && (
                    <div className="py-2 md:py-4 text-sm md:text-base">
                        <p>Customer reviews and ratings would appear here.</p>
                    </div>
                )}
                {activeTab === 'Product substitutes' && (
                    <div className="py-2 md:py-4 text-sm md:text-base">
                        <p>Alternative products and substitutes would appear here.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;