// src/component/ProductFilter.tsx
"use client";

import React, { useState, useEffect } from 'react';
import ProductCard from './productcard';
import { ProductType } from '@/types/ProductType';

interface ProductFilterProps {
  initialProducts: ProductType[];
}

export default function ProductFilter({ initialProducts }: ProductFilterProps) {
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(initialProducts);
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  console.log('Initial products received:', initialProducts); // تسجيل البيانات الأولية

  // تحديث المنتجات المفلترة عند تغيير الفلاتر أو المنتجات الأولية
  useEffect(() => {
    let result = [...initialProducts];

    // فلترة حسب السعر
    if (priceFilter !== 'all') {
      if (priceFilter === 'under50') {
        result = result.filter((product) => product.price < 50);
      } else if (priceFilter === '50to100') {
        result = result.filter((product) => product.price >= 50 && product.price <= 100);
      } else if (priceFilter === 'over100') {
        result = result.filter((product) => product.price > 100);
      }
    }

    // فلترة حسب الفئة
    if (categoryFilter !== 'all') {
      result = result.filter((product) => product.category === categoryFilter);
    }

    console.log('Filtered products:', result); // تسجيل المنتجات المفلترة
    setFilteredProducts(result);
  }, [priceFilter, categoryFilter, initialProducts]);

  return (
    <div>
      {/* واجهة الفلترة */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        {/* فلتر السعر */}
        <div>
          <label htmlFor="priceFilter" className="mr-2">Filter by Price:</label>
          <select
            id="priceFilter"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="all">All Prices</option>
            <option value="under50">Under $50</option>
            <option value="50to100">$50 - $100</option>
            <option value="over100">Over $100</option>
          </select>
        </div>

        {/* فلتر الفئة */}
        <div>
          <label htmlFor="categoryFilter" className="mr-2">Filter by Category:</label>
          <select
            id="categoryFilter"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>
      </div>

      {/* عرض المنتجات المفلترة */}
      {filteredProducts.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product: ProductType) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-gray-600">No products match the selected filters.</p>
      )}
    </div>
  );
}