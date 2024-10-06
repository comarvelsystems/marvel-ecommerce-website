"use client";

import { motion } from "framer-motion";
import StarIcon from "@/components/StarIcon";
import { topVariant } from "@/lib/motion";

const ProductDetailsReviews = () => {
  return (
    <motion.div
      variants={topVariant({ delay: 0.3 })}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='relative flex items-center gap-0'
    >
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon type='inActive' />
      <span className='ms-2 text-base font-semibold text-muted-foreground/70'>
        (32 reviews)
      </span>
    </motion.div>
  );
};

export default ProductDetailsReviews;
