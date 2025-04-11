// src/types/ProductType.ts
export default interface ProductType {
  id: string | number; // string لـ Firebase, number لـ FakeStoreAPI
  title: string;
  description: string;
  price: number;
  image: string;
  category: string; // "category" بـ c صغيرة
}