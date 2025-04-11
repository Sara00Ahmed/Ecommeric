import React from 'react';
import ProductCard from '@/component/productcard';
import { ProductType } from '@/types/ProductType';
import { db } from '@/app/services/firebase';
import { collection, getDocs } from 'firebase/firestore';
// import Link from 'next/link';

async function fetchProductsFromFirebase(): Promise<ProductType[]> {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const products = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as ProductType));
    console.log('Products from Firebase:', products);
    return products;
  } catch (error) {
    console.error('Error fetching products from Firebase:', error.message);
    return [];
  }
}

export default async function ProductList() {
  const products = await fetchProductsFromFirebase();

  return (
    <div>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: ProductType) => (
            <div key={product.id}>
              <ProductCard product={product} />
              {/* <Link href={`/category/${product.id}`} className="text-blue-500 mt-2 inline-block">
                View Details
              </Link> */}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg">No products available.</p>
      )}
    </div>
  );
}