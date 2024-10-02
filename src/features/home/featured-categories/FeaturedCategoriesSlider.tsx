"use client";

import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { topLoopVariant } from "@/lib/motion";

// TODO: Replace with real api
const FAKE_FEATURED_CATEGORIES_SLIDES = [
  {
    id: 1,
    title: "Vegetables",
    imageUrl: "/images/shop/cat-1.png",
    href: "#",
    countItems: 65,
  },
  {
    id: 2,
    title: "Strawberry",
    imageUrl: "/images/shop/cat-2.png",
    href: "#",
    countItems: 36,
  },
  {
    id: 3,
    title: "snack",
    imageUrl: "/images/shop/cat-3.png",
    href: "#",
    countItems: 56,
  },
  {
    id: 4,
    title: "Black plum",
    imageUrl: "/images/shop/cat-4.png",
    href: "#",
    countItems: 123,
  },
  {
    id: 5,
    title: "Custard",
    imageUrl: "/images/shop/cat-5.png",
    href: "#",
    countItems: 34,
  },
  {
    id: 6,
    title: "Red Apple",
    imageUrl: "/images/shop/cat-9.png",
    href: "#",
    countItems: 54,
  },
  {
    id: 7,
    title: "Peach",
    imageUrl: "/images/shop/cat-11.png",
    href: "#",
    countItems: 14,
  },
  {
    id: 8,
    title: "Oganic Kiwi",
    imageUrl: "/images/shop/cat-12.png",
    href: "#",
    countItems: 28,
  },
  {
    id: 9,
    title: "Cake & Milk",
    imageUrl: "/images/shop/cat-13.png",
    href: "#",
    countItems: 26,
  },
  {
    id: 10,
    title: "Headphone",
    imageUrl: "/images/shop/cat-15.png",
    href: "#",
    countItems: 87,
  },
  {
    id: 11,
    title: "Orange",
    imageUrl: "/images/shop/cat-7.png",
    href: "#",
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
    >
      <CarouselContent>
        {FAKE_FEATURED_CATEGORIES_SLIDES.map(
          ({ id, title, imageUrl, href, countItems }, index) => (
            <CarouselItem
              key={id}
              className='basis-1/2 pl-2 sm:basis-[30%] md:basis-1/5 xl:basis-2/12'
            >
              <motion.div
                variants={topLoopVariant({ index })}
                initial='hidden'
                animate='show'
                className='relative p-1.5'
              >
                <Card className='rounded-xl border-transparent bg-primary/10 pt-4 transition-colors duration-300 hover:border-primary'>
                  <Link href={href}>
                    <CardContent className='flex flex-col items-center'>
                      <Image
                        src={imageUrl}
                        alt={title}
                        width={120}
                        height={120}
                        priority
                      />
                      <div className='text-center'>
                        <Heading as='h6'>{title}</Heading>
                        <span className='text-sm font-semibold text-muted-foreground'>
                          {countItems} items
                        </span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            </CarouselItem>
          ),
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default FeaturedCategorySlider;
