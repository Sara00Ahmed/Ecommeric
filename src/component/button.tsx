"use client"
import React from 'react'
import { useRouter  } from 'next/navigation';



export default function button() {
 const router = useRouter()

  return (
    <div>
       {/* Navigation Button */}
  <button
  onClick={() => router.push('/products')}
  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-md transform hover:scale-105 transition duration-300">
Start Shopping
</button>
    </div>
  )
}
