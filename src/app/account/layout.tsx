// src/app/account/layout.tsx
import React from 'react';
import Link from 'next/link';
const AccountLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <h1 className="text-3xl mb-5 text-teal-300">Account Section</h1>
      <nav>
        <ul>
          <li>
            <Link href="/account/profile">Profile</Link>
          </li>
          <li>
            <Link href="/account/reservation">Reservation</Link>
          </li>
        </ul>
      </nav>
      {/* هذا هو المكان الذي سيتم فيه عرض المحتوى الخاص بالصفحات الفرعية */}
      <div>{children}</div>
    </div>
  );
};

export default AccountLayout;
