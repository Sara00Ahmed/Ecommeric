import React from 'react';
import Link from 'next/link';

const AccountLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* شريط التنقل الجانبي */}
      <nav className="w-64 bg-sky-800 text-white p-6 flex-shrink-0">
        <h1 className="text-3xl font-bold mb-8 text-teal-100">Account </h1>
        <ul className="space-y-4">
          <li>
            <Link href="/account/profile" className="block p-2 hover:bg-teal-700 rounded-md">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/account/reservations" className="block p-2 hover:bg-teal-700 rounded-md">
              Reservations
            </Link>
          </li>
          <li>
            <Link href="/account" className="block p-2 hover:bg-teal-700 rounded-md">
              Overview
            </Link>
          </li>
          <li>
            <Link href="/account/signout" className="block p-2 hover:bg-teal-700 rounded-md">
              Sign Out
            </Link>
          </li>
        </ul>
      </nav>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
};

export default AccountLayout;