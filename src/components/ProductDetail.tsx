import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Plus, Minus, Check, Share2 } from 'lucide-react';

// Use the existing Product interface to ensure compatibility
interface Product {
    id: string;
    name: string;
    image_url: string;
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
    
    // Sample additional images (in a real app, these would come from the product object)
    const additionalImages = [
        product.image_url,
        product.image_url, 
        product.image_url, 
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
                    <div className="w-536 h-[463] lg:w-1/2">
                        <div className="rounded-3xl bg-blue-50 p-4 flex items-center justify-center mb-4">
                            <img 
                                src={additionalImages[selectedThumbnail]} 
                                alt={product.name} 
                                className="object-contain mix-blend-multiply" 
                                style={{ maxHeight: '382px', maxWidth: '382' }}
                            />
                        </div>
                        
                        {/* Thumbnail Navigation */}
                        <div className="flex items-center justify-center mb-6">
                            <button 
                                onClick={handlePrevImage}
                                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-4"
                            >
                                <ChevronLeft size={16} />
                            </button>
                            
                            <div className="flex space-x-3 overflow-x-auto">
                                {additionalImages.map((img, index) => (
                                    <div 
                                        key={index}
                                        onClick={() => setSelectedThumbnail(index)}
                                        className={`rounded-3xl p-2 cursor-pointer flex-shrink-0 ${selectedThumbnail === index ? 'border-2 border-blue-500' : ''}`}
                                        style={{ width: '100px', height: '100px' }}
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
                                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center ml-4"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                    
                    {/* Details Container*/}
                    <div className="w-full lg:w-1/2 lg:pl-8">
                        {/* Product Name */}
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-medium mb-4 font-gt-walsheim">
                                {product.name}
                                </h1>
                                <div className="w-[33px] h-[33px] flex items-center justify-center border border-gray-400 rounded-full ml-auto">
                                    <Share2 className="text-gray-500 w-[16px] h-[16px]" />
                                </div>
                        </div>
                        
                        {/* Composition */}
                        <p className="font-semibold text-custom-blue mb-4 font-poppins">
                            Composition: {product.composition || 'Pregablin 65, Pregablin 80, Ciprofloxasin 10, Profloxamarin 70'}
                        </p>
                        
                        {/* Rating */}
                        <div className="flex mb-4">
                            {[...Array(5)].map((_, index) => (
                                <Star 
                                    key={index} 
                                    className={index < product.rating ? "text-custom-blue fill-custom-blue" : "text-gray-300"} 
                                    size={24} 
                                />
                            ))}
                        </div>
                        
                        {/* Price Section */}
                        <div className="flex items-center mb-2 font-gt-walsheim">
                            <span className="line-through text-gray mr-2">
                                {formatCurrency(originalPrice)}
                            </span>
                            <span className="text-green-600">-{product.discount}%</span>
                        </div>
                        
                        {/* Current Price */}
                        <div className="mb-4 text-custom-blue px-4 py-2 rounded-lg inline-block font-gt-walsheim text-3xl md:text-4xl">
                            {formatCurrency(product.price)}
                        </div>
                        
                        {/* Product Info List */}
                        <div className="mb-4 space-y-3">
                            {[
                                { label: <>Policy: <span className='text-custom-blue'> Non Returnable</span></>, icon: <Check size={16} /> },
                                { label: <>Expires on: <span className="text-custom-blue">{product.expiry || '26 Feb 2029'}</span></>, 
                                icon: <Check size={16} /> },
                                { label: <>Consume type: <span className="text-custom-blue">{product.consumeType || 'Oral'}</span></>, icon: <Check size={16} /> },
                                { label: <>Mfr/Marketer: <span className='text-custom-blue'>{product.vendor_name}</span></>, icon: <Check size={16} /> }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center mr-2">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm">{item.label}</span>
                                </div>
                            ))}
                        </div>
                        
                        {/* Sold Amount */}
                        <div className="mb-6 text-custom-blue px-3 py-1 rounded inline-block font-poppins font-semibold">
                            {product.soldCount || 262} sold in the last 24 hours
                        </div>
                        
                        {/* Quantity Selector and Order Button */}
                        <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center justify-between border border-gray-300 rounded w-36 h-12">
                            <button 
                            onClick={decrementQuantity} 
                            className="w-1/3 h-full flex items-center justify-center"
                            >
                                <Minus size={16} />
                            </button>
                            {/*border separators */}
                            <span className="w-1/3 h-full flex items-center justify-center border-l border-r border-gray-300">
                            {quantity}
                            </span>
                            <button 
                            onClick={incrementQuantity} 
                            className="w-1/3 h-full flex items-center justify-center"
                            >
                                <Plus size={16} />
                            </button>
                            </div>
                            
                            <button 
                                className="bg-blue-500 text-white rounded-lg px-8 py-3"
                            >
                                Order it now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Tabs Section */}
            <div className="w-full bg-blue-600 bg-opacity-5 mt-8">
                <div className="container mx-auto">
                    <div className="flex items-center overflow-x-auto">
                        {tabs.map((tab, index) => (
                            <button 
                                key={index}
                                onClick={() => setActiveTab(tab)}
                                className={`py-4 px-6 whitespace-nowrap ${activeTab === tab ? 'border-b-2 border-blue-500 font-medium' : ''}`}
                                style={{ fontFamily: 'GT Walsheim Pro' }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Tab Content Section - You would add the actual content here */}
            <div className="container mx-auto p-4 min-h-32">
                {activeTab === 'Product details' && (
                    <div className="py-4">
                        <p>{product.description || "Detailed product information would appear here."}</p>
                    </div>
                )}
                {activeTab === 'Safety advice' && (
                    <div className="py-4">
                        <p>Safety information and usage guidelines would appear here.</p>
                    </div>
                )}
                {activeTab === 'Reviews' && (
                    <div className="py-4">
                        <p>Customer reviews and ratings would appear here.</p>
                    </div>
                )}
                {activeTab === 'Product substitutes' && (
                    <div className="py-4">
                        <p>Alternative products and substitutes would appear here.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;