import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "iPhone 15 Pro",
            price: 999.99,
            image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500"
        },
        {
            id: 2,
            name: "Samsung Galaxy S24",
            price: 849.99,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
        },
        {
            id: 3,
            name: "MacBook Air M3",
            price: 1199.99,
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
        },
        {
            id: 4,
            name: "Sony WH-1000XM5 Headphones",
            price: 399.99,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
        },
        {
            id: 5,
            name: "iPad Pro 12.9",
            price: 1099.99,
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
        },
        {
            id: 6,
            name: "Apple Watch Series 9",
            price: 429.99,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
        },
        {
            id: 7,
            name: "Dell XPS 13 Laptop",
            price: 999.99,
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
        },
        {
            id: 8,
            name: "Nintendo Switch OLED",
            price: 349.99,
            image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500"
        },
        {
            id: 9,
            name: "AirPods Pro (2nd Gen)",
            price: 249.99,
            image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500"
        },
        {
            id: 10,
            name: "Canon EOS R5 Camera",
            price: 3899.99,
            image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500"
        }
    ]

    // http://localhost:3000/api/products?search=iphone
    if (req.query.search) {
        const filteredProducts = products.filter(product =>
             product.name.includes(req.query.search));
        res.send(filteredProducts);
        return;
    }
    
    setTimeout(() => {
        res.json(products);
    }, 3000);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});