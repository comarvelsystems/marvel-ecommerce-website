"use client";

import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import WideProductCard from "@/components/products/WideProductCard";
import { topVariant } from "@/lib/motion";

// TODO: Replace with real api
const PRODUCTS = [
  {
    id: "1",
    imageUrl: "/images/shop/thumbnail-4.jpg",
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    priceAfterDiscount: 84.0,
    price: 100.0,
  },
  {
    id: "2",
    imageUrl: "/images/shop/thumbnail-5.jpg",
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    priceAfterDiscount: 84.0,
    price: 100.0,
  },
  {
    id: "3",
    imageUrl: "/images/shop/thumbnail-6.jpg",
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    priceAfterDiscount: 84.0,
    price: 100.0,
  },
];

const Trending = () => {
  return (
    <motion.div
      variants={topVariant({ top: 100, delay: 0.2 })}
      initial='hidden'
      whileInView='show'
      viewport={{
        once: true,
      }}
      className='relative space-y-8'
    >
      <div className='relative border-b border-border/60 pb-4 before:absolute before:bottom-0 before:h-0.5 before:w-20 before:bg-primary/50 before:content-[attr(before)]'>
        <Heading as='h4'>Trending</Heading>
      </div>
      <div className='space-y-6'>
        {PRODUCTS.map(product => (
          <WideProductCard key={product.id} {...product} />
        ))}
      </div>
    </motion.div>
  );
};

export default Trending;
