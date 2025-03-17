import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductDetail from '../components/ProductDetail';
import CartSidebar from '../components/CartSidebar';
import { useCart } from '../components/CartContext';
import product1 from '../images/product1.PNG';
import product2 from '../images/product2.PNG';
import product3 from '../images/product3.PNG';
import product4 from '../images/product4.PNG';
import product41 from '../images/product41.PNG';
import product42 from '../images/product42.PNG';
import product31 from '../images/product31.PNG';
import product32 from '../images/product32.PNG';
import product21 from '../images/product21.PNG';
import product22 from '../images/product22.PNG';
import product11 from '../images/product11.PNG';
import product12 from '../images/product12.PNG';



const Products = () => {
    // State to track selected product for detail view
    const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
    
    // Sample product data with additional fields
    const products = [
        {
            id: "prod123",
            name: "Pacimal 650 Tabs",
            image_url: product1,
            image_url1: product11,
            image_url2: product12,
            description: "Pain relief medication",
            price: 26000,
            rating: 5,
            discount: 16,
            vendor_name: "Abacus Pharma",
            composition: "Pregablin 65, Pregablin 80, Ciprofloxasin 10, Profloxamarin 70",
            expiry: "26 Feb 2029",
            consumeType: "Oral",
            returnable: false,
            soldCount: 262
        },
        {
            id: "prod124",
            name: "Calma Tabs",
            image_url: product2,
            image_url1: product21,
            image_url2: product22,

            description: "Pain relief medication",
            price: 70000,
            rating: 3,
            discount: 25,
            vendor_name: "Kay Pharma",
            composition: "Ciprofloxasin 32, Profloxamarin 45",
            expiry: "15 Mar 2028",
            consumeType: "Oral",
            returnable: false,
            soldCount: 187
        },
        {
            id: "prod126",
            name: "Adrenaline",
            image_url: product3,
            image_url1: product31,
            image_url2: product32,

            description: "Pain relief medication",
            price: 100000,
            rating: 2,
            discount: 25,
            vendor_name: "Beteise Pharma",
            composition: "Adrenaline 2mg, Epinephrine 5mg",
            expiry: "30 Apr 2027",
            consumeType: "Injectable",
            returnable: false,
            soldCount: 93
        },
        {
            id: "prod127",
            name: "Baidyanath Sitopaladi Churna, 60 gm",
            image_url: product4,
            image_url1: product41,
            image_url2: product42,

            description: "Pain relief medication",
            price: 26000,
            rating: 4,
            discount: 16,
            vendor_name: "Abacus Pharmaceuticals pvt ltd",
            composition: "Sitopaladi, Churna, Herbal extract",
            expiry: "11 Jan 2028",
            consumeType: "Oral",
            returnable: false,
            soldCount: 315
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
    
    // Handle product selection
    const handleProductSelect = (productId: string) => {
        setSelectedProductId(productId);
    };
    
    // Handle back to products list
    const handleBackToProducts = () => {
        setSelectedProductId(null);
    };
    
    // Get the selected product if there is one
    const selectedProduct = selectedProductId 
        ? products.find(p => p.id === selectedProductId) 
        : null;
    
    // Show product detail if a product is selected
    if (selectedProduct) {
        return (
            <div className="p-4">
                <ProductDetail 
                    product={selectedProduct} 
                    onBack={handleBackToProducts} 
                />
                
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
    }
    
    // Otherwise show the product list
    return (
        <div className="p-4">
            <div className="flex flex-row flex-wrap gap-6">
                {products.map(product => (
                    <ProductCard 
                        key={product.id}
                        product={product} 
                        onAddToCart={() => addToCart(product)}
                        onProductSelect={handleProductSelect}
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