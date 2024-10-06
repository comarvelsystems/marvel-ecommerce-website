"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { topVariant } from "@/lib/motion";

const ProductDetailsActions = () => {
  return (
    <motion.div
      variants={topVariant({ delay: 0.8 })}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='relative flex items-center gap-4'
    >
      <div className='flex items-center gap-4 rounded-md border border-border px-4'>
        <span className='text-lg font-bold'>1</span>
        <div>
          <div className='cursor-pointer rounded-sm p-1 text-muted-foreground hover:text-foreground'>
            <ChevronUp size={20} strokeWidth={2.5} />
          </div>
          <div className='cursor-pointer rounded-sm p-1 text-muted-foreground hover:text-foreground'>
            <ChevronDown size={20} strokeWidth={2.5} />
          </div>
        </div>
      </div>
      <Button size='lg' className='flex-grow gap-x-3 py-7 text-lg'>
        <ShoppingCart />
        Add to Cart
      </Button>
      <Button
        variant='outline'
        size='icon'
        className='size-14 flex-shrink-0 items-center justify-center'
      >
        <Heart />
      </Button>
    </motion.div>
  );
};

export default ProductDetailsActions;
