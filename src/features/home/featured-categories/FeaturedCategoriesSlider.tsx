"use client";

import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { topVariant } from "@/lib/motion";
import CategoryItem from "@/components/CategoryItem";
import useInfinite from "@/hooks/use-infinite";
import useFetchCategories from "@/hooks/use-fetch-categories";
import { Language } from "@/utils/enums";
import { CategoriesSkeleton } from "@/components";
import { useLocale } from "next-intl";
import { Category } from "@/utils/@types";

const FeaturedCategorySlider = () => {
  const locale = useLocale();
  const currentLang = locale.toUpperCase() as keyof typeof Language;

  const { isRefetching, isLoading, pages } = useInfinite(
    useFetchCategories,
    "categories",
    undefined,
    16,
    Language[currentLang],
  );

  if (isLoading || isRefetching) {
    return <CategoriesSkeleton length={8} />;
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className='carousel w-full'
      dir='ltr'
    >
      <CarouselContent>
        {pages?.map((page: any) =>
          page.categories?.map((category: Category, index: number) => (
            <CarouselItem
              key={category.category_id}
              className='basis-1/2 list-none pl-4 xs:basis-[44%] sm:basis-4/12 md:basis-1/4 lg:basis-1/6 xl:basis-[12.5%]'
            >
              <motion.div
                variants={topVariant({})}
                initial='hidden'
                animate='show'
                className='relative'
                custom={index}
              >
                <CategoryItem {...category} index={index} />
              </motion.div>
            </CarouselItem>
          )),
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default FeaturedCategorySlider;
