"use client";

import { motion } from "framer-motion";
import { topVariant } from "@/lib/motion";

const ProductDetailsPrice = () => {
  return (
    <motion.div
      variants={topVariant({ delay: 0.5 })}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='relative flex items-center gap-4'
    >
      <span className='block text-4xl font-bold text-primary'>1,500 SAR</span>
      <div>
        <span className='block text-sm font-semibold text-red-600'>
          50% Off
        </span>
        <span className='block text-xl font-bold text-muted-foreground/60 line-through'>
          2000.00 SAR
        </span>
      </div>
    </motion.div>
  );
};

export default ProductDetailsPrice;
