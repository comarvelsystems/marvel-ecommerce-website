"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { topVariant } from "@/lib/motion";

const FilterPrice = () => {
  return (
    <Accordion type='single' defaultValue='item-1' collapsible>
      <AccordionItem value='item-1' className='border-border/40'>
        <AccordionTrigger className='font-bold !no-underline'>
          Price
        </AccordionTrigger>
        <AccordionContent className='space-y-2'>
          <motion.div
            variants={topVariant({})}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='relative flex items-center gap-2'
          >
            <div className='relative'>
              <div className='absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground/60 rtl:left-3 rtl:right-auto'>
                SAR
              </div>
              <Input
                min={0}
                max={1000}
                type='number'
                placeholder='from'
                className='focus-reset w-full focus:border-primary'
              />
            </div>
            <div className='text-sm text-muted-foreground'> - </div>
            <div className='relative'>
              <div className='absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground/60 rtl:left-3 rtl:right-auto'>
                SAR
              </div>
              <Input
                min={0}
                max={1000}
                type='number'
                placeholder='to'
                className='focus-reset w-full focus:border-primary'
              />
            </div>
            <Button variant='secondary' size='icon' className='flex-shrink-0'>
              <ArrowRight size={16} />
            </Button>
          </motion.div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterPrice;
