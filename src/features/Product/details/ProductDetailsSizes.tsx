"use client";

import { motion } from "framer-motion";
import { topVariant } from "@/lib/motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

// TODO: replace with real sizes
const SIZES = ["XS", "S", "M", "L", "XL"];

const ProductDetailsSizes = () => {
  const [size, setSize] = useState<string>(() => SIZES[SIZES.length - 1]);

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
        {SIZES.map((sizeName, index) => (
          <li
            key={index}
            className={cn(
              "flex size-12 cursor-pointer items-center justify-center rounded-md border border-border text-lg font-semibold text-muted-foreground hover:bg-muted",
              size === sizeName && "border-primary bg-primary/10 text-primary",
            )}
            onClick={() => setSize(sizeName)}
          >
            {sizeName}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProductDetailsSizes;
