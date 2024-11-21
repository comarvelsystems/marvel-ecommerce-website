"use client";

import { motion } from "framer-motion";
import { topVariant } from "@/lib/motion";

const CategoryHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className='flex h-40 w-full items-center justify-center overflow-hidden rounded-md bg-muted p-6 text-center'>
      <motion.div
        variants={topVariant({ top: 20, delay: 0 })}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='relative'
      >
        {children}
      </motion.div>
    </header>
  );
};

export default CategoryHeader;
