import React from 'react';
import ProductCard from '../components/ProductCard';
import product1 from '../images/product1.PNG';

const Pharmacy = () => {
    // Sample product data
    const product = {
        id: "prod123",
        name: "Pacimal 650 Tabs",
        image_url: product1,
        description: "Pain relief medication",
        price: 26000,
        rating: 5,
        discount: 16,
        vendor_name: "Abacus Pharma"
    };
    
    const handleAddToCart = (productId: string) => {
        console.log(`Product ${productId} added to cart`);
        // i will add  cart logic here
    };
    
    return (
        <div className="p-4">
            <ProductCard 
                product={product} 
                onAddToCart={handleAddToCart} 
            />
        </div>
    );
};

export default Pharmacy;