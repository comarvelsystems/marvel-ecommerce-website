import Image from "next/image";
import Link from "next/link";
import { Flame, Heart, ShoppingCart } from "lucide-react";
import Heading from "../Heading";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import StarIcon from "../StarIcon";

const ProductCard = () => {
  return (
    <Card className='relative rounded-xl shadow-none'>
      <div className='top absolute w-full p-5'>
        <div className='flex items-center justify-between'>
          <Button
            size='icon'
            variant='outline'
            className='rounded-xl border border-border'
          >
            <Heart size={20} strokeWidth={2.5} />
          </Button>
          <span className='ms-3 rounded bg-red-500/15 px-4 py-1 text-xs font-bold text-red-600'>
            -50%
          </span>
        </div>
      </div>
      <Link href='/product-slug' className='block p-4'>
        <Image
          src='/images/shop/product-1-1.jpg'
          alt='product image'
          width={236}
          height={236}
          className='mx-auto'
        />
      </Link>
      <div className='px-5 pb-5'>
        <div className='space-y-2.5'>
          <div className='flex items-center justify-between'>
            <Link
              href='#'
              className='block text-sm font-semibold text-muted-foreground'
            >
              Snack
            </Link>
            <div className='flex items-center gap-x-1'>
              <Flame size={20} strokeWidth={2.5} className='text-orange-500' />
              <span className='block text-sm font-semibold text-muted-foreground'>
                Sold 100 Items
              </span>
            </div>
          </div>
          <Link href='/product-slug' className='block'>
            <Heading as='h6'>
              Seeds of Change Organic Quinoa, Brown, & Red Rice
            </Heading>
          </Link>
          <div className='flex items-center rtl:space-x-reverse'>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon type='inActive' />
            <StarIcon type='inActive' />
            <span className='ms-2 text-xs font-semibold text-muted-foreground/60'>
              (4.0)
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <span className='block text-lg font-bold text-primary'>
                150.00 SAR
              </span>
              <span className='block text-sm font-semibold text-muted-foreground/60 line-through'>
                250.00 SAR
              </span>
            </div>
            <Button
              size='icon'
              variant='secondary'
              className='rounded-xl border border-border hover:border-primary hover:bg-primary hover:text-background'
            >
              <ShoppingCart size={20} strokeWidth={2.5} />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
