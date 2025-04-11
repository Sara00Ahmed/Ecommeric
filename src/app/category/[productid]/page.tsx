// src/app/category/[productid]/page.tsx
import React from 'react';
import { ProductType } from '@/types/ProductType';
import ProductCard from '@/component/productcard';
import { db } from '@/app/services/firebase';
import { doc, getDoc } from 'firebase/firestore';

interface CategoryPageProps {
  params: { productid: string };
}

async function fetchProductFromFirebase(productId: string): Promise<ProductType | null> {
  try {
    const docRef = doc(db, 'products', productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Product data from Firebase:', docSnap.data());
      return { id: docSnap.id, ...docSnap.data() } as ProductType;
    } else {
      console.warn(`No product found with ID: ${productId}`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching product from Firebase:', error.message);
    return null;
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const productId = params?.productid || '';

  if (!productId) {
    console.warn('No product ID provided');
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Category Product Details</h1>
        <p className="text-lg text-red-600">No product ID provided</p>
      </div>
    );
  }

  const product = await fetchProductFromFirebase(productId);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Category Product Details - ID: {productId}</h1>
      {product ? (
        <ProductCard product={product} imageWidth={400} imageHeight={300} className="max-w-2xl mx-auto" />
      ) : (
        <p className="text-lg text-red-600">Product not found for ID: {productId}</p>
      )}
    </div>
  );
}