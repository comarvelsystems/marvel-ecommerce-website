import Link from "next/link";
import Heading from "@/components/Heading";
import FeaturedCategorySlider from "./FeaturedCategoriesSlider";
import { Button } from "@/components/ui/button";

const FeaturedCategories = () => {
  return (
    <section className='s-padding'>
      <div className='s-container'>
        <div className='space-y-8'>
          <div className='flex flex-col items-start gap-4 xl:flex-row xl:items-center'>
            <Heading as='h3' className='text-xl sm:text-3xl'>
              Featured Categories
            </Heading>
            <Button
              variant='link'
              asChild
              className='text-muted-foreground !no-underline hover:text-primary'
            >
              <Link href='/categories'>Browse all</Link>
            </Button>
          </div>
          <FeaturedCategorySlider />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
