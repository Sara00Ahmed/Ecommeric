// src/component/ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '@/types/ProductType';

interface ProductCardProps {
  product: ProductType;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  imageWidth = 300,
  imageHeight = 200,
  className = '',
}) => {
  const cardClasses = `bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition ${className}`.trim();
  const linkClasses = 'bg-teal-400 text-gray-950 py-2 px-4 rounded hover:bg-teal-600 transition text-lg font-semibold';
// التحقق من وجود product.image وتوفير قيمة افتراضية إذا لم تكن موجودة
const imageSrc = product.image && typeof product.image === 'string' ? product.image.trim() : '/images/fallback.jpg';
  return (
    <div className={cardClasses}>
      <Image
        src={imageSrc}
        alt={product.title || 'Product image'}
        width={imageWidth}
        height={imageHeight}
        quality={100}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h2>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
      <p className="text-blue-600 font-bold mb-4">${product.price.toFixed(2)}</p>
      <Link href={`/category/${product.id}`} className={linkClasses}>
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;