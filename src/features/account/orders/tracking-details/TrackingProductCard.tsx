import Link from "next/link";
import Image from "next/image";
import { RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import { topVariant } from "@/lib/motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const TrackingProductCard = () => {
  return (
    <motion.div
      variants={topVariant({ delay: 0.2 })}
      initial='hidden'
      whileInView='show'
      className='relative'
    >
      <Card>
        <CardHeader className='border-b border-border/40'>
          <CardTitle className='text-xl'>Item Summary</CardTitle>
        </CardHeader>
        <CardTitle>
          <div className='flex flex-col gap-y-2 p-2.5 md:flex-row md:justify-between md:gap-x-12 md:p-5'>
            <div className='flex flex-1 items-center gap-x-4'>
              <Link href='/product-slug' className='flex-shrink-0'>
                <Image
                  src='/images/products/product-2.webp'
                  alt='product'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='h-28 w-28 rounded object-cover object-center'
                />
              </Link>
              <div className='w-full space-y-4'>
                <Heading as='h6' className='leading-6'>
                  QT82 TWS Wireless BT Headphone Black
                </Heading>
                <div className='flex items-center gap-x-2 text-sm font-normal text-muted-foreground'>
                  <div className='rounded-full bg-primary/10 p-1 text-primary'>
                    <RotateCcw size={16} strokeWidth={2.5} />
                  </div>
                  This item is returnable
                </div>
                <span className='block text-xl font-bold'>
                  250.50 <span className='text-sm font-normal'>SAR</span>
                </span>
              </div>
            </div>
          </div>
        </CardTitle>
      </Card>
    </motion.div>
  );
};

export default TrackingProductCard;
