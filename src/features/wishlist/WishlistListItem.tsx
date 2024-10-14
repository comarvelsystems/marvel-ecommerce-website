"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Trash2 } from "lucide-react";
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

const WishlistListItem: React.FC<Props> = ({
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
      className='relative rounded border border-border bg-background p-2.5 md:p-5'
    >
      <div className='flex flex-col gap-y-2 md:flex-row md:justify-between md:gap-x-12'>
        <div className='flex flex-1 items-center gap-x-4'>
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
            <span className='block text-2xl font-bold'>
              {price} <span className='text-sm font-normal'>SAR</span>
            </span>
          </div>
        </div>
        <div className='place-self-end'>
          <div className='flex w-full flex-1 gap-2'>
            <Button
              variant='outline'
              size='sm'
              className='gap-x-1.5 text-xs text-muted-foreground'
            >
              <Trash2 size={16} />
            </Button>
            <Button
              variant='secondary'
              size='sm'
              className='gap-x-1.5 text-xs text-muted-foreground'
            >
              <ShoppingCart size={16} />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export default WishlistListItem;
