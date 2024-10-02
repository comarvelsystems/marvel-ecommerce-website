"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import styles from "./Slider.module.css";

// TODO: Replace with real api
const FAKE_IMAGES = [
  {
    id: 1,
    imageUrl: "/images/slider/slider-1.png",
  },
  {
    id: 2,
    imageUrl: "/images/slider/slider-2.png",
  },
];

const Slider = () => {
  return (
    <section className='mb-8'>
      <div className='s-container'>
        <Carousel
          dir='ltr'
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
            Fade(),
          ]}
          className={`${styles.slider} custom`}
        >
          <CarouselContent>
            {FAKE_IMAGES.map(({ id, imageUrl }, index) => (
              <CarouselItem
                key={id}
                className='h-[350px] overflow-hidden xl:h-[538px]'
              >
                <Image
                  src={imageUrl}
                  alt={`Slider ${index}`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  priority
                  quality={80}
                  className='size-full rounded-3xl object-cover'
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;
