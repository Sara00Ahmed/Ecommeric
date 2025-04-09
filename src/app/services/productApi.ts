import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const fetchProducts = async function ()  {
  try {
    // Log to check if Firestore query is happening
    console.log('Fetching products from Firestore...');

    // Fetch products from Firestore
    const productsSnapshot = await getDocs(collection(db, "products"));

    // Log to check if productsSnapshot has data
    console.log('Products Snapshot:', productsSnapshot);

    // Convert snapshot into data array
    const productsData = productsSnapshot.docs.map(doc => {
      const data = doc.data();
      console.log('Product Data:', data); // Log each product data
      return {
        id: doc.id,  // Use doc.id to get the document ID from Firestore
        name: data.name,
        description: data.description,
        price: data.price,
        image: data.image,
      };
    });

    console.log('Fetched products:', productsData); // Log the fetched products array
    return productsData;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
