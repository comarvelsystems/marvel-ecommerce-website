"use client";

import { motion } from "framer-motion";
import { CheckIcon, MapPin } from "lucide-react";
import Heading from "@/components/Heading";
import { topVariant } from "@/lib/motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CheckoutAddressList from "./CheckoutAddressList";

const CheckoutAddress = () => {
  return (
    <motion.div
      variants={topVariant({ delay: 0 })}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='relative'
    >
      <Card className='p-0 shadow-none'>
        <CardHeader className='border-b border-border/40 px-4 py-2'>
          <div className='flex items-center justify-between gap-4'>
            <Heading as='h3' className='flex-1 text-base'>
              Address <span className='text-muted-foreground'>(Home)</span>
            </Heading>
            <CheckoutAddressList>
              <div className='flex flex-shrink flex-grow-0 items-center gap-x-1 rounded-md bg-primary/5 px-2 py-2 text-xs font-semibold text-primary hover:bg-primary/10'>
                <MapPin size={14} strokeWidth={2.5} />
                Change
              </div>
            </CheckoutAddressList>
          </div>
        </CardHeader>
        <CardContent className='flex items-center gap-4 px-4 py-4 md:py-7'>
          <div className='flex size-10 flex-shrink-0 flex-grow-0 items-center justify-center rounded-full bg-primary/5 text-primary'>
            <MapPin size={20} strokeWidth={2.5} />
          </div>
          <div className='space-y-1.5 overflow-hidden'>
            <p className='truncate text-muted-foreground'>
              King Abdulaziz Avenue, Building 1245, Al Olaya District, Riyadh
              12211, Kingdom of Saudi Arabia
            </p>
            <div className='flex items-center gap-1.5 text-sm font-medium'>
              <div className='flex size-5 items-center justify-center rounded-full bg-green-600 text-background'>
                <CheckIcon size={16} strokeWidth={2.5} />
              </div>
              +966-55-123-4567
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CheckoutAddress;
