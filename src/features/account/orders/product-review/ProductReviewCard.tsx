"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardHeader } from "@/components/ui/card";
import { topVariant } from "@/lib/motion";
import ProductReviewRating from "./ProductReviewRating";
import ProductReviewForm from "./ProductReviewForm";

const ProductReviewCard = () => {
  return (
    <motion.div
      variants={topVariant({ delay: 0 })}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='relative'
    >
      <Card className='shadow-none'>
        <CardHeader className='gap-5'>
          <Link
            href='/product-slug'
            target='_blank'
            className='flex items-center gap-4'
          >
            <div className='flex h-28 w-20 items-center overflow-hidden rounded-sm bg-background'>
              <Image
                src='/images/products/product-2.webp'
                width={109}
                height={80}
                alt='Product'
              />
            </div>
            <div>
              <span className='text-sm text-muted-foreground'>Samsung</span>
              <p>Apple Watch SE (2023) Aluminum Case with GPS 2</p>
              <span className='text-sm text-muted-foreground'>
                Delivered on Saturday, 23 July 2024
              </span>
            </div>
          </Link>
          <ProductReviewRating />
          <ProductReviewForm />
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export default ProductReviewCard;
