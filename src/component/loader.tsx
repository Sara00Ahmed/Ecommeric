import React from 'react';

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Loader Circle */}
      <svg
        className="animate-spin h-16 w-16 text-blue-500 opacity-75"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          fill="none"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0"
        />
      </svg>
    </div>
  );
}
