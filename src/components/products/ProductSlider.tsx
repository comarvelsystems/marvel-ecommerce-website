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

const ProductSlider = () => {
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
      className='carousel w-full'
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className='relative basis-full pl-5 sm:basis-1/2 md:basis-2/6 xl:basis-1/5'
          >
            <motion.div
              variants={scaleVariant({ index, duration: 0.3 })}
              initial='hidden'
              whileInView='show'
              viewport={{
                once: true,
              }}
            >
              <ProductCard />
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductSlider;
