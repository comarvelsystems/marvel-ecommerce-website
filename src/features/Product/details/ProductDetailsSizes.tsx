"use client";

import { motion } from "framer-motion";
import { topVariant } from "@/lib/motion";

const ProductDetailsSizes = () => {
  return (
    <motion.div
      variants={topVariant({ delay: 0.7 })}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='relative space-y-4'
    >
      <span className='block text-lg font-bold'>Size:</span>
      <ul className='flex items-center gap-2'>
        <li className='flex size-12 cursor-pointer items-center justify-center rounded-md border border-border text-lg font-semibold text-muted-foreground hover:bg-muted'>
          16
        </li>
        <li className='flex size-12 cursor-pointer items-center justify-center rounded-md border border-border text-lg font-semibold text-muted-foreground hover:bg-muted'>
          24
        </li>
        <li className='flex size-12 cursor-pointer items-center justify-center rounded-md border border-border text-lg font-semibold text-muted-foreground hover:bg-muted'>
          32
        </li>
        <li className='flex size-12 cursor-pointer items-center justify-center rounded-md border border-primary bg-primary/5 text-lg font-semibold text-primary hover:bg-muted'>
          40
        </li>
      </ul>
    </motion.div>
  );
};

export default ProductDetailsSizes;
