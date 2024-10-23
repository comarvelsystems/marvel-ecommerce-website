import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { topVariant } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface Props {
  id?: string;
  title: string;
  imageUrl: string;
  orderNumber: string;
  datetime: string;
  href: string;
  isDelivered: boolean;
  index: number;
}

const OrdersListItem: React.FC<Props> = ({
  title,
  imageUrl,
  href,
  orderNumber,
  datetime,
  isDelivered,
  index,
}) => {
  return (
    <motion.li
      variants={topVariant({})}
      initial='hidden'
      animate='show'
      custom={index + 1}
      className='relative rounded border border-border bg-background'
    >
      <div className='mb-3 flex flex-col gap-3 border-b border-border/40 p-3 sm:flex-row sm:items-center sm:justify-between'>
        <Heading
          as='h3'
          className='flex-1 text-base font-medium text-muted-foreground'
        >
          <span
            className={cn(isDelivered ? "text-green-500" : "text-destructive")}
          >
            {isDelivered ? "Delivered" : "Cancelled"}
          </span>{" "}
          on {datetime}
        </Heading>
        <p className='text-muted-foreground'>Order ID: {orderNumber}</p>
      </div>
      <div className='flex flex-col gap-y-2 p-2.5 md:flex-row md:justify-between md:gap-x-12 md:p-5'>
        <div className='flex flex-1 items-center gap-x-4'>
          <div className='flex-shrink-0'>
            <Image
              src={imageUrl}
              alt={title}
              width={0}
              height={0}
              sizes='100vw'
              className='h-28 w-28 rounded object-cover object-center'
            />
          </div>
          <div className='w-full space-y-4'>
            <Heading as='h6' className='leading-6'>
              QT82 TWS Wireless BT Headphone Black
            </Heading>
            <Button variant='outline' size='sm' asChild>
              <Link href={href}>Show your product</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className='mt-3 flex items-center gap-3 border-t border-border/40 p-3 sm:justify-end'>
        <Button variant='outline' asChild>
          <Link href='/orders/track/item/id'>Track order</Link>
        </Button>
        <Button variant='outline' asChild>
          <Link href='/orders/productId/product-review'>
            Write a product review
          </Link>
        </Button>
      </div>
    </motion.li>
  );
};

export default OrdersListItem;
