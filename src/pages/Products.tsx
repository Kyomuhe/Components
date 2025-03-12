import React from 'react';
import ProductCard from '../components/ProductCard';
import CartSidebar from '../components/CartSidebar';
import { useCart } from '../components/CartContext';
import product1 from '../images/product1.PNG';
import product2 from '../images/product2.PNG';
import product3 from '../images/product3.PNG';

const Products = () => {
    // Sample product data
    const products = [
        {
            id: "prod123",
            name: "Pacimal 650 Tabs",
            image_url: product1,
            description: "Pain relief medication",
            price: 26000,
            rating: 5,
            discount: 16,
            vendor_name: "Abacus Pharma"
        },
        {
            id: "prod124",
            name: "Calma Tabs",
            image_url: product2,
            description: "Pain relief medication",
            price: 70000,
            rating: 3,
            discount: 25,
            vendor_name: "kay Pharma"
        },
        {
            id: "prod126",
            name: "Adrenaline",
            image_url: product3,
            description: "Pain relief medication",
            price: 100000,
            rating: 2,
            discount: 25,
            vendor_name: "Beteise Pharma"
        },
    ];
    
    const { 
        addToCart, 
        items, 
        isOpen, 
        closeCart, 
        updateQuantity, 
        removeFromCart 
    } = useCart();
    
    return (
        <div className="p-4">
            <div className="flex flex-row flex-wrap gap-6">
                {products.map(product => (
                    <ProductCard 
                        key={product.id}
                        product={product} 
                        onAddToCart={() => addToCart(product)} 
                    />
                ))}
            </div>
            
            {/* Cart Sidebar */}
            <CartSidebar 
                isOpen={isOpen}
                onClose={closeCart}
                items={items}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeFromCart}
            />
        </div>
    );
};

export default Products;