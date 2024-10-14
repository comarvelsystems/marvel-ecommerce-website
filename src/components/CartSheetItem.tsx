"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "./ui/button";
import Heading from "./Heading";
import { topVariant } from "@/lib/motion";

interface Props {
  id?: string;
  title: string;
  imageUrl: string;
  price: number;
  priceAfterDiscount: number;
  total: number;
  href: string;
  index: number;
}

const CartSheetItem: React.FC<Props> = ({
  title,
  imageUrl,
  price,
  priceAfterDiscount,
  total,
  href,
  index,
}) => {
  return (
    <motion.li
      variants={topVariant({})}
      initial='hidden'
      animate='show'
      custom={index + 1}
      className='relative rounded border border-border/40 bg-background p-2.5 md:p-5'
    >
      <div className='items-start justify-between md:flex md:gap-x-12'>
        <div className='flex flex-1 gap-x-4'>
          <Link href='/product-slug'>
            <Image
              src={imageUrl}
              alt={title}
              width={0}
              height={0}
              sizes='100vw'
              className='h-20 w-24 rounded object-cover object-center'
            />
          </Link>
          <div className='space-y-1'>
            <Heading
              as='h6'
              className='leading-6 duration-300 hover:text-primary'
            >
              <Link href={href}>{title}</Link>
            </Heading>
            <div className='flex items-center gap-1.5'>
              <span>{priceAfterDiscount} SAR</span>
              <span className='text-sm text-muted-foreground/70 line-through'>
                {price} SAR
              </span>
            </div>
            <p className='text-sm font-bold text-primary ltr:md:pr-12 rtl:md:pl-12'>
              <span>Total: </span>
              <span className='inline-block'>{total} SAR</span>
            </p>
          </div>
        </div>
        <div className='mt-5 flex items-center justify-between border-t border-border/40 pt-2 md:mt-0 md:items-start md:border-none md:pt-0'>
          <div className='flex items-center rounded-lg border border-border'>
            <div
              className='cursor-pointer rounded-sm p-2.5 text-muted-foreground/70 hover:text-foreground'
              // onClick={() => setCount(count + 1)}
            >
              <Minus size={18} strokeWidth={2.5} />
            </div>
            <span className='block w-6 text-center text-base font-bold'>1</span>
            <div
              className='cursor-pointer rounded-sm p-2.5 text-muted-foreground/70 hover:text-foreground'
              // onClick={() => setCount(count - 1)}
            >
              <Plus size={18} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
      <Button
        variant='destructive'
        size='icon'
        className='absolute bottom-4 right-1 flex size-6 cursor-pointer items-center justify-center rounded-full text-background xs:right-4 rtl:left-1 rtl:xs:left-4'
      >
        <X size={16} />
      </Button>
    </motion.li>
  );
};

export default CartSheetItem;
