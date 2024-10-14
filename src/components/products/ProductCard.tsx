import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import Heading from "../Heading";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

interface Props {
  id?: string;
  title: string;
  brand: string;
  imageUrl: string;
  priceAfterDiscount: number;
  price: number;
  status: boolean;
}

const ProductCard: React.FC<Props> = ({
  title,
  brand,
  imageUrl,
  priceAfterDiscount,
  price,
  status,
}) => {
  return (
    <Card className='relative overflow-hidden rounded-xl border-border/70 shadow-none hover:border-border'>
      <CardContent className='p-0'>
        <div className='absolute top-0 z-10 w-full'>
          <div className='flex items-center justify-between p-1 sm:p-3'>
            <Button
              size='icon'
              variant='outline'
              className='rounded-full border border-border/40'
            >
              <Heart size={18} strokeWidth={2.5} />
            </Button>
            {status && (
              <span className='select-none rounded-full bg-destructive/90 px-4 py-1.5 text-xs font-semibold text-background'>
                New
              </span>
            )}
          </div>
        </div>
        <div className='flex aspect-[4/5] w-full items-center justify-center bg-background md:aspect-[3/4] lg:aspect-[2/2]'>
          <Link href='/product-slug' className='relative h-full w-full'>
            <Image
              src={imageUrl}
              alt='product image'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='mx-auto object-contain'
            />
          </Link>
        </div>

        <div className='relative z-50 bg-background p-2 sm:p-4'>
          <div className='space-y-2.5'>
            <div className='flex items-center justify-between'>
              <Link href='#' className='block text-sm text-muted-foreground/70'>
                {brand}
              </Link>
            </div>
            <Link href='/product-slug' className='block'>
              <Heading as='h6' className='text-xs sm:text-sm'>
                {title}
              </Heading>
            </Link>
            <div className='flex flex-col items-start justify-between gap-y-2 sm:flex-row sm:items-center'>
              <div className='flex flex-row items-center gap-2 sm:flex-col sm:items-start sm:gap-0'>
                {priceAfterDiscount ? (
                  <>
                    <span className='block text-sm font-semibold text-destructive sm:text-base'>
                      {priceAfterDiscount} SAR
                    </span>
                    <span className='block text-xs text-muted-foreground/70 line-through'>
                      {price} SAR
                    </span>
                  </>
                ) : (
                  <span className='block text-sm font-semibold sm:text-base'>
                    {price} SAR
                  </span>
                )}
              </div>
              <Button
                variant='outline'
                className='w-full rounded-lg border-none bg-muted text-muted-foreground hover:bg-primary hover:text-background sm:w-auto'
              >
                <ShoppingCart
                  size={20}
                  strokeWidth={2.5}
                  className='flex-shrink-0 flex-grow-0'
                />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
