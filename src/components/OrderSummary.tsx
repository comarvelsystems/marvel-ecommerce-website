"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { opacityVariant, topVariant } from "@/lib/motion";
import { usePathname } from "next/navigation";

const OrderSummary = () => {
  const path = usePathname();

  return (
    <motion.div
      variants={opacityVariant()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='sticky top-24 mb-5 w-full rounded-md border border-border/40 bg-background p-7 sm:p-5 lg:ml-8 lg:w-96 lg:border-none lg:drop-shadow-xl rtl:lg:mr-8'
    >
      <motion.div
        variants={topVariant({})}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='relative space-y-5'
      >
        <Heading as='h6'>Order Summary</Heading>
        {path === "/cart" && (
          <div className='flex w-full max-w-sm items-center'>
            <Input
              type='text'
              placeholder='Coupon Code'
              className='rounded-r-none rtl:rounded-l-none'
            />
            <Button type='submit' className='rounded-l-none rtl:rounded-r-none'>
              Apply
            </Button>
          </div>
        )}
        <ul className='divide-y divide-border/40'>
          <li className='flex items-center justify-between py-3 text-sm'>
            <span className='text-muted-foreground'>Subtotal (3 items)</span>
            <span className='font-bold'>210 SAR</span>
          </li>
          <li className='flex items-center justify-between py-3 text-sm'>
            <span className='text-muted-foreground'>Shipping Fees</span>
            <span className='font-bold'>10 SAR</span>
          </li>
          <li className='flex items-center justify-between py-3 text-sm'>
            <span className='text-muted-foreground'>
              Total (Includes VAT 15%)
            </span>
            <span className='text-xl font-bold'>230 SAR</span>
          </li>
        </ul>
        <Button className='w-full' asChild>
          <Link href='/checkout'>
            {path === "/cart" ? "Checkout" : "Confirm Order"}
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default OrderSummary;
