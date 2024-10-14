"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { topVariant } from "@/lib/motion";

interface Props {
  id?: string;
  brand: string;
  title: string;
  imageUrl: string;
  price: number;
  count: number;
  shipping: string;
  index: number;
}

const CheckoutOrderListItem: React.FC<Props> = ({
  brand,
  title,
  imageUrl,
  price,
  count,
  shipping,
  index,
}) => {
  return (
    <motion.li
      variants={topVariant({})}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      custom={index + 1}
      className='relative'
    >
      <Card className='p-0 shadow-none'>
        <CardHeader className='border-b border-border/40 px-4 py-2'>
          <Heading as='h3' className='flex-1 text-base'>
            Shipment No. {index + 1}
          </Heading>
        </CardHeader>
        <CardContent className='px-4 py-4 md:py-7'>
          <div className='flex items-center gap-4'>
            <div className='relative size-24 flex-shrink-0 flex-grow-0 overflow-hidden rounded-lg bg-muted'>
              <Badge
                variant='default'
                className='absolute top-0 hover:bg-primary'
              >
                x{count}
              </Badge>
              <Image
                src={imageUrl}
                width={96}
                height={96}
                alt={title}
                className='object-cover object-center'
              />
            </div>
            <div className='space-y-2 overflow-hidden md:w-1/2'>
              <span className='text-xs font-medium text-muted-foreground/70'>
                {brand}
              </span>
              <Heading as='h6' className='truncate text-sm'>
                {title}
              </Heading>
              <span className='block text-sm font-bold'>{price} SAR</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className='border-t border-border/40 px-4 py-2'>
          <span className='text-sm font-semibold'>
            Get it by <span className='text-primary'>{shipping}</span>
          </span>
        </CardFooter>
      </Card>
    </motion.li>
  );
};

export default CheckoutOrderListItem;
