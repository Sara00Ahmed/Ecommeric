import React from 'react'
import Image from 'next/image';

interface props {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div>
      <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition">
              {/* Category Image */}
              <Image
                src={product.image.trim()}  // Ensure the image URL is correct
                alt={product.title || "Product image"}  // Fallback alt text
                width={300}  // Adjust size according to design
                height={200}
                quality={100}
                className="w-full h-48 object-cover mb-4"
              />

              {/* Category Title */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h2>

              {/* Category Description */}
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>

              {/* Category Price */}
              <p className="text-blue-600 font-bold">${product.price}</p>
            </div>
    </div>
  )
}
