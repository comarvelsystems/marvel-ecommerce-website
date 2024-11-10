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

// TODO: Replace with real api
const FAKE_FEATURED_CATEGORIES_SLIDES = [
  {
    id: "1",
    title: "Mobiles",
    imageUrl: "/images/categories/category-1.webp",
    href: "/category/mobiles",
    countItems: 65,
  },
  {
    id: "2",
    title: "Laptops",
    imageUrl: "/images/categories/category-2.webp",
    href: "/category/laptops",
    countItems: 36,
  },
  {
    id: "3",
    title: "Headphones",
    imageUrl: "/images/categories/category-3.webp",
    href: "/category/headphones",
    countItems: 56,
  },
  {
    id: "4",
    title: "Cameras",
    imageUrl: "/images/categories/category-4.webp",
    href: "/category/cameras",
    countItems: 123,
  },
  {
    id: "5",
    title: "Watches",
    imageUrl: "/images/categories/category-5.webp",
    href: "/category/watches",
    countItems: 34,
  },
  {
    id: "6",
    title: "Monitors",
    imageUrl: "/images/categories/category-6.webp",
    href: "/category/monitors",
    countItems: 54,
  },
  {
    id: "7",
    title: "Tablets",
    imageUrl: "/images/categories/category-7.webp",
    href: "category/tablets",
    countItems: 14,
  },
  {
    id: "8",
    title: "Power bank",
    imageUrl: "/images/categories/category-8.webp",
    href: "category/power-bank",
    countItems: 28,
  },
  {
    id: "9",
    title: "Headphones",
    imageUrl: "/images/categories/category-3.webp",
    href: "category/headphones",
    countItems: 26,
  },
  {
    id: "10",
    title: "Cameras",
    imageUrl: "/images/categories/category-4.webp",
    href: "category/cameras",
    countItems: 87,
  },
  {
    id: "11",
    title: "Monitors",
    imageUrl: "/images/categories/category-6.webp",
    href: "/category/monitors",
    countItems: 150,
  },
];

const FeaturedCategorySlider = () => {
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
        {FAKE_FEATURED_CATEGORIES_SLIDES.map((category, index) => (
          <CarouselItem
            key={category.id}
            className='basis-1/2 pl-1 xs:basis-[44%] sm:basis-4/12 md:basis-1/4 lg:basis-1/6 xl:basis-[12.5%]'
          >
            <motion.div
              variants={topVariant({})}
              initial='hidden'
              animate='show'
              className='relative'
              custom={index}
            >
              {/* <CategoryItem {...category} /> */}
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default FeaturedCategorySlider;
