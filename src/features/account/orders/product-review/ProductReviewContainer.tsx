import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import ProductReviewCard from "./ProductReviewCard";

const ProductReviewContainer = () => {
  return (
    <section className='space-y-8'>
      <header className='space-between flex flex-wrap gap-5 sm:flex-nowrap'>
        <div className='flex-1 space-y-1.5'>
          <Button
            variant='link'
            className='gap-1.5 px-0 text-muted-foreground/60 !no-underline hover:text-primary'
            asChild
          >
            <Link href='/orders'>
              <ArrowLeftIcon size={18} />
              Back to orders
            </Link>
          </Button>
          <Heading as='h1' className='!text-3xl'>
            Product Review
          </Heading>
          <p className='font-medium text-muted-foreground'>
            Help others know what to buy!
          </p>
        </div>
      </header>
      <ProductReviewCard />
    </section>
  );
};

export default ProductReviewContainer;
