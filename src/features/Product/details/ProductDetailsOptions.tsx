"use client";

import { motion } from "framer-motion";
import { topVariant } from "@/lib/motion";

const ProductDetailsOptions = () => {
  return (
    <motion.div
      variants={topVariant({ delay: 0.2 })}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='text-md relative space-x-2 text-muted-foreground/90'
    >
      <span>Model: A248429</span>
      <span className='relative -top-0.5 text-xs font-black text-muted-foreground/60'>
        |
      </span>
      <span>SKU: SL4JK74</span>
    </motion.div>
  );
};

export default ProductDetailsOptions;
