// ClientSideOnly.tsx
"use client";

import { useEffect, useState } from 'react';
// مكون لعرض المحتوى فقط على العميل
const ClientSideOnly = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // التحقق أن الكود يعمل في بيئة العميل
  }, []);

  if (!isClient) {
    return null; // أو يمكن عرض loading indicator هنا
  }

  return <>{children}</>;
};

export default ClientSideOnly;
