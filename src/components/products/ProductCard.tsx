import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { Product } from "@/utils/@types";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Placeholder } from "@/assets/images";
import { Link } from "@/i18n/routing";

const ProductCard: React.FC<Product> = ({
  product_id,
  name,
  image,
  price,
  special,
  manufacturer_name: brand,
  stock_status_name,
  quantity,
}) => {
  const encodedProductName = encodeURIComponent(name);

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
            {/* {true && (
              <span className='select-none rounded-full bg-destructive/90 px-4 py-1.5 text-xs font-semibold text-background'>
                New
              </span>
            )} */}
          </div>
        </div>
        <div className='flex aspect-[4/5] w-full items-center justify-center bg-background md:aspect-[3/4] lg:aspect-[2/2]'>
          <Link
            href={`/${encodedProductName}?pid=${product_id}`}
            className='relative h-full w-full'
          >
            <Image
              src={
                image
                  ? `https://s.marvel-cloud.com/api/image/${image}`
                  : Placeholder
              }
              alt={name}
              fill
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='mx-auto object-contain'
              placeholder='blur'
              blurDataURL={Placeholder.blurDataURL}
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
            <Link
              href={`/${product_id}`}
              className='block h-10 overflow-hidden'
            >
              <p
                className='line-clamp-2 text-ellipsis text-xs font-medium sm:text-sm'
                title={name}
              >
                {name}
              </p>
            </Link>
            <div className='flex flex-col items-start justify-between gap-y-2 sm:flex-row sm:items-center'>
              <div className='flex flex-row items-center gap-2 sm:flex-col sm:items-start sm:gap-0'>
                {special ? (
                  <>
                    <span className='block text-sm font-semibold text-destructive sm:text-base'>
                      {special}
                    </span>
                    <span className='block text-xs text-muted-foreground/70 line-through'>
                      {price}
                    </span>
                  </>
                ) : (
                  <span className='block text-sm font-semibold sm:text-base'>
                    {price}
                  </span>
                )}
              </div>

              {quantity === 0 ? (
                <span className='select-none text-xs font-medium text-destructive'>
                  {stock_status_name}
                </span>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
