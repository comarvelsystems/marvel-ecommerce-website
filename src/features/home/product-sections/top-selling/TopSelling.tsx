"use client";

import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import WideProductCard from "@/components/products/WideProductCard";
import { topVariant } from "@/lib/motion";

// TODO: Replace with real api
const PRODUCTS = [
  {
    id: "1",
    imageUrl: "/images/shop/thumbnail-1.jpg",
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    priceAfterDiscount: 84.0,
    price: 100.0,
  },
  {
    id: "2",
    imageUrl: "/images/shop/thumbnail-2.jpg",
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    priceAfterDiscount: 84.0,
    price: 100.0,
  },
  {
    id: "3",
    imageUrl: "/images/shop/thumbnail-3.jpg",
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    priceAfterDiscount: 84.0,
    price: 100.0,
  },
];

const TopSelling = () => {
  return (
    <motion.div
      variants={topVariant({ top: 100 })}
      initial='hidden'
      whileInView='show'
      viewport={{
        once: true,
      }}
      className='relative space-y-8'
    >
      <div className='relative border-b border-border/60 pb-4 before:absolute before:bottom-0 before:h-0.5 before:w-20 before:bg-primary/50 before:content-[attr(before)]'>
        <Heading as='h4'>Top Selling</Heading>
      </div>
      <div className='space-y-6'>
        {PRODUCTS.map(product => (
          <WideProductCard key={product.id} {...product} />
        ))}
      </div>
    </motion.div>
  );
};

export default TopSelling;
