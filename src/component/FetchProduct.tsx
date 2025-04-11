// src/component/FetchProduct.tsx
import { ProductType } from '@/types/ProductType';

export async function fetchProducts(): Promise<ProductType[]> {
  const response = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  console.log('Raw API data:', data); // تسجيل البيانات الخام

  return data.map((item: any) => ({
    id: parseInt(item.id, 10) || 0,
    title: item.title || 'No title',
    description: item.description || 'No description',
    price: item.price || 0,
    image: item.image || '/images/fallback.jpg',
    category: item.category || 'Uncategorized',
  }));
}