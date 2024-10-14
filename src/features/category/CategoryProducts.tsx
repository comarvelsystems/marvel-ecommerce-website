"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/products/ProductCard";
import { scaleVariant } from "@/lib/motion";

// TODO: replace with real api
const PRODUCTS = [
  {
    id: "1",
    title: "Apple Watch SE (2023) Aluminum Case with GPS 2",
    brand: "Apple",
    imageUrl: "/images/products/product-1.webp",
    priceAfterDiscount: 120,
    price: 200,
    status: true,
  },
  {
    id: "2",
    title: "Apple Watch SE (2023) Aluminum Case with GPS 2",
    brand: "Apple",
    imageUrl: "/images/products/product-2.webp",
    priceAfterDiscount: 0,
    price: 320,
    status: false,
  },
  {
    id: "3",
    title: "Apple Watch SE (2023) Aluminum Case with GPS 2",
    brand: "Apple",
    imageUrl: "/images/products/product-3.webp",
    priceAfterDiscount: 0,
    price: 320,
    status: false,
  },
  {
    id: "4",
    title: "Apple Watch SE (2023) Aluminum Case with GPS 2",
    brand: "Apple",
    imageUrl: "/images/products/product-4.webp",
    priceAfterDiscount: 150,
    price: 320,
    status: true,
  },
  {
    id: "5",
    title: "Apple Watch SE (2023) Aluminum Case with GPS 2",
    brand: "Apple",
    imageUrl: "/images/products/product-5.webp",
    priceAfterDiscount: 0,
    price: 410,
    status: false,
  },
  {
    id: "6",
    title: "Apple Watch SE (2023) Aluminum Case with GPS 2",
    brand: "Apple",
    imageUrl: "/images/products/product-6.webp",
    priceAfterDiscount: 0,
    price: 89,
    status: false,
  },
  {
    id: "7",
    title: "Apple Watch SE (2023) Aluminum Case with GPS 2",
    brand: "Apple",
    imageUrl: "/images/products/product-7.webp",
    priceAfterDiscount: 0,
    price: 110,
    status: true,
  },
  {
    id: "8",
    title: "Apple Watch SE (2023) Aluminum Case with GPS 2",
    brand: "Apple",
    imageUrl: "/images/products/product-8.webp",
    priceAfterDiscount: 90,
    price: 110,
    status: false,
  },
  {
    id: "9",
    title: "Apple Watch SE (2023) Aluminum Case with GPS 2",
    brand: "Apple",
    imageUrl: "/images/products/product-1.webp",
    priceAfterDiscount: 0,
    price: 210,
    status: false,
  },
  {
    id: "10",
    title: "Apple Watch SE (2023) Aluminum Case with GPS 2",
    brand: "Apple",
    imageUrl: "/images/products/product-2.webp",
    priceAfterDiscount: 0,
    price: 520,
    status: false,
  },
];

const CategoryProducts = () => {
  return (
    <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5'>
      {PRODUCTS.map((product, index) => (
        <motion.div
          key={product.id}
          variants={scaleVariant()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          custom={index + 1}
          className='relative'
        >
          <ProductCard {...product} />
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryProducts;
