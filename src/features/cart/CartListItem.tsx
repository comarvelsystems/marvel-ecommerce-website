"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Minus, Plus, Trash2, X } from "lucide-react";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { topVariant } from "@/lib/motion";

interface Props {
  id?: string;
  title: string;
  imageUrl: string;
  price: number;
  href: string;
  index: number;
}

const CartListItem: React.FC<Props> = ({
  title,
  imageUrl,
  price,
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
      <div className='justify-between md:flex md:gap-x-12'>
        <div className='flex flex-1 gap-x-4'>
          <Link href='/product-slug' className='flex-shrink-0'>
            <Image
              src={imageUrl}
              alt={title}
              width={0}
              height={0}
              sizes='100vw'
              className='h-28 w-28 rounded object-cover object-center'
            />
          </Link>
          <div className='w-full space-y-4'>
            <Heading
              as='h6'
              className='leading-6 duration-300 hover:text-primary'
            >
              <Link href={href}>{title}</Link>
            </Heading>
            <div className='flex flex-col gap-y-1 text-xs'>
              <span className='text-muted-foreground'>Order in 22 h 39 m</span>
              <span className='font-bold'>
                Get it by <span className='text-primary'>Sat, Oct 12</span>
              </span>
            </div>
            <div className='flex w-full flex-1 flex-col gap-1 sm:flex-row'>
              <Button
                variant='outline'
                size='sm'
                className='gap-x-1.5 text-xs text-muted-foreground'
              >
                <Trash2 size={16} />
                Remove
              </Button>
              <Button
                variant='outline'
                size='sm'
                className='gap-x-1.5 text-xs text-muted-foreground'
              >
                <Heart size={16} />
                Move to Wishlist
              </Button>
            </div>
          </div>
        </div>
        <div className='mt-5 flex flex-row items-center justify-between gap-1.5 border-t border-border/40 pt-3 md:mt-0 md:flex-col md:items-end md:border-none md:pt-0'>
          <span className='text-2xl font-bold'>
            {price} <span className='text-sm font-normal'>SAR</span>
          </span>
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
    </motion.li>
  );
};

export default CartListItem;
