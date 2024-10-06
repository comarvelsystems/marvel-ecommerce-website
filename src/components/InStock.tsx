"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { topVariant } from "@/lib/motion";

const InStock = () => {
  return (
    <motion.div
      variants={topVariant({ delay: 0.4 })}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='relative'
    >
      <Badge
        variant='outline'
        className='gap-x-2 rounded-md border-transparent bg-green-500/10 px-4 py-2 text-green-500'
      >
        <CheckCircle2 size={18} strokeWidth={2.5} className='inline-block' />
        In Stock
      </Badge>
    </motion.div>
  );
};

export default InStock;
