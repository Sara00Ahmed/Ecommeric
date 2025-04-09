"use client";

import React, { useEffect, useState } from 'react';
import { fetchProducts } from '@/app/services/productApi'; // Ensure correct import of the fetch function
import ProductCard from '@/component/productcard';

// Define the Product type
interface Product {
  id: string;  // Ensure this matches your product's ID type
  title: string;
  description: string;
  price: number;
  image: string; // Ensure this is a valid URL for images
}

const Category: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // State to hold products data

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts(); // Fetch products from API
        console.log('Fetched data:', data);
        setProducts(data); // Set fetched data into the state
      } catch (error) {
        console.error('Error fetching products:', error); // Handle fetch error
      }
    };

    getProducts(); // Call function to fetch products
  }, []);

  return (
    <div>
      <h1 className="text-3xl mb-5 text-teal-300 font-medium pt-5 m-5">Our Category</h1>
      <p className="pt-5 m-5 text-2xl">
      Our platform is designed to be user-friendly and secure, ensuring that you can shop with confidence and ease. With reliable customer support, fast shipping, and flexible return policies, we aim to exceed your expectations at every step. Experience the difference with [Your Store Name] — where convenience meets excellence.
      </p>
<hr className="my-8 border-t border-gray-300" />
      {/* Display products in cards */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: Product) => (
          <ProductCard  product={product} key={product.id}/>
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default Category;
