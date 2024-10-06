"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { topVariant } from "@/lib/motion";

const ProductDetailsColors = () => {
  return (
    <motion.div
      variants={topVariant({ delay: 0.6 })}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='relative space-y-4'
    >
      <span className='block text-lg font-bold'>Color:</span>
      <div className='flex items-center gap-2'>
        <span
          data-color='red'
          className='block size-12 rounded-full border border-red-400 bg-red-400'
        />
        <div
          data-color='violet'
          className='flex size-12 items-center justify-center rounded-full border border-black bg-violet-400 text-white'
        >
          <Check strokeWidth={2.5} />
        </div>
        <span
          data-color='orange'
          className='block size-12 rounded-full border border-orange-200 bg-orange-200'
        />
        <span
          data-color='white'
          className='block size-12 rounded-full border border-green-200 bg-green-200'
        />
      </div>
    </motion.div>
  );
};

export default ProductDetailsColors;
