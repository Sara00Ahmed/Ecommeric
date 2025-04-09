"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <div>
        <div className="flex items-center space-x-2">
      <Image
        src="/logo3.jpg"
        alt="E-commerce Store Logo"
        width={50}
        height={50}
        quality={100}
      />
      <Link href="/" className="text-2xl font-bold">E-commerce Store</Link>
    </div>
</div>
  )
}
