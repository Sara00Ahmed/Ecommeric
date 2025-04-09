// // pages/products/[id].js
// import { products } from "../products/page";
// import { useRouter } from "next/navigation";
// "use client";
// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   description: string;
//   price: number;
// }

// const ProductDetail = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   // Handle case where query is not yet available (Next.js dynamic routing)
//   if (!router.isReady) {
//     return <p>Loading...</p>;
//   }

//   // Convert id to a number, with fallback if invalid
//   const productId = id ? parseInt(id as string, 10) : NaN;

//   // Find the product, ensuring type safety
//   const product = products.find((product: Product) => product.id === productId);

//   if (!product) {
//     return <p>Product not found!</p>;
//   }

//   return (
//     <div>
//     <h1>{product.name}</h1>
//     <Image src={product.image} alt={product.name} width={200} height={200} quality={100}/>
//     <p>{product.description}</p>
//     <p><strong>Price:</strong> ${product.price}</p>
//     <button>Add to Cart</button>
//   </div>
//   );
// };

// export default ProductDetail;