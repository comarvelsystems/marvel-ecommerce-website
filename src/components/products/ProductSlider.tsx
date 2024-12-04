"use client";

import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/products/ProductCard";
import { scaleVariant } from "@/lib/motion";
import { useQueryClient } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { Language } from "@/utils/enums";
import useFetchCategoryProducts from "@/features/category/hooks/use-fetch-category-products";
import { useEffect, useMemo } from "react";
import { ProductList } from "@/utils/@types";
import ProductSkeleton from "./ProductSkeleton";

const ProductSlider = () => {
  const queryClient = useQueryClient();
  const locale = useLocale();

  const currentLang = locale.toLocaleUpperCase() as keyof typeof Language;

  const { data, isRefetching, isLoading } = useFetchCategoryProducts({
    limit: 10,
    categoryName: "care",
    categoryId: 1,
    languageId: Language[currentLang],
  });

  const pages = useMemo(() => {
    return data?.pages ?? ([] as ProductList[]);
  }, [data?.pages]);

  useEffect(() => {
    if (isRefetching) {
      queryClient.resetQueries({
        queryKey: ["products", `care-1`],
      });
    }
  }, [isRefetching, queryClient]);

  if (isLoading || isRefetching) {
    return <ProductSkeleton />;
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      dir='ltr'
      className='carousel w-full'
    >
      <CarouselContent>
        {pages.map((page, index) =>
          page?.products.map(product => (
            <CarouselItem
              key={product.product_id}
              className='relative basis-1/2 pl-2.5 sm:pl-4 md:basis-2/6 lg:basis-1/4 xl:basis-1/6'
            >
              <motion.div
                variants={scaleVariant()}
                initial='hidden'
                whileInView='show'
                viewport={{
                  once: true,
                }}
                custom={index + 1}
              >
                <ProductCard {...product} />
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

export default ProductSlider;
