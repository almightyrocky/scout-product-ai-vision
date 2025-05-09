
import { useState } from 'react';
import ProductList, { Product } from '@/components/ProductList';

// Sample product data
const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    reviewLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    buyLink: "https://www.amazon.com"
  },
  {
    id: 2,
    name: "Smartphone with 108MP Camera",
    price: 849.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8fDA%3D",
    reviewLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    buyLink: "https://www.amazon.com"
  },
  {
    id: 3,
    name: "Ultra HD Smart TV 55\"",
    price: 549.99,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB0dnxlbnwwfHwwfHx8MA%3D%3D",
    reviewLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    buyLink: "https://www.amazon.com"
  },
  {
    id: 4,
    name: "Professional Gaming Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
    reviewLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    buyLink: "https://www.amazon.com"
  },
  {
    id: 5,
    name: "Fitness Smartwatch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    reviewLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    buyLink: "https://www.amazon.com"
  },
  {
    id: 6,
    name: "Coffee Maker with Grinder",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1606791405792-1004f1718d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlJTIwbWFrZXJ8ZW58MHx8MHx8fDA%3D",
    reviewLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    buyLink: "https://www.amazon.com"
  },
  {
    id: 7,
    name: "Wireless Gaming Mouse",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
    reviewLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    buyLink: "https://www.amazon.com"
  },
  {
    id: 8,
    name: "Portable Bluetooth Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    reviewLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    buyLink: "https://www.amazon.com"
  }
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container py-6">
          <h1 className="font-bold text-2xl text-gradient">Product Catalog</h1>
        </div>
      </header>

      <main className="container px-4 py-12">
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 leading-tight">
            Our Products
          </h2>
          <ProductList products={sampleProducts} />
        </section>
      </main>
    </div>
  );
};

export default ProductsPage;
