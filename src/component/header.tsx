import React from 'react';
import Button from './button';

export default function Header() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <div className="relative w-full h-[600px] lg:h-[800px]">
      {/* Background video */}
      <video
        src="/video1.mp4"
        autoPlay
        loop
        muted
        className="object-cover w-full h-full absolute top-0 left-0 z-0 border-neutral-950 rounded-lg shadow-xl"
      />

      {/* Overlay content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 text-center px-4 md:px-12 bg-white/50">
        <h1 className="text-5xl md:text-6xl font-extrabold text-neutral-950 leading-tight mb-4">
          Welcome to Our E-commerce Store
        </h1>
        <p className="text-xl md:text-2xl text-neutral-950 opacity-90 mb-6 max-w-2xl">
          Your one-stop shop for all your needs. Explore our exclusive collection now!
        </p>
        <Button />
      </div>
    </div>
  );
}
