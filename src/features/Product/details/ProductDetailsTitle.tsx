"use client";

import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import { topVariant } from "@/lib/motion";

const ProductDetailsTitle = () => {
  return (
    <motion.div
      variants={topVariant({})}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='relative'
    >
      <Heading as='h1' className='!text-3xl'>
        Apple Watch SE (2023) Aluminum Case with GPS 2
      </Heading>
    </motion.div>
  );
};

export default ProductDetailsTitle;
