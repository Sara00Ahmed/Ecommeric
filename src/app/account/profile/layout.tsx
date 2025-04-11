import React from 'react';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-teal-600">Profile Section</h2>
      <div>{children}</div>
    </div>
  );
}