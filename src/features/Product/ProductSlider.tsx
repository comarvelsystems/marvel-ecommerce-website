"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Parallax, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { topVariant } from "@/lib/motion";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const SWIPER_IMAGES = [
  {
    id: "1",
    imageUrl: "/images/product-page/product-page-1.webp",
  },
  {
    id: "2",
    imageUrl: "/images/product-page/product-page-2.webp",
  },
  {
    id: "3",
    imageUrl: "/images/product-page/product-page-3.webp",
  },
  {
    id: "4",
    imageUrl: "/images/product-page/product-page-4.webp",
  },
  {
    id: "5",
    imageUrl: "/images/product-page/product-page-5.webp",
  },
];

const SWIPER_THUMBNAILS = [
  {
    id: "1",
    imageUrl: "/images/product-page/product-page-1.webp",
  },
  {
    id: "2",
    imageUrl: "/images/product-page/product-page-2.webp",
  },
  {
    id: "3",
    imageUrl: "/images/product-page/product-page-3.webp",
  },
  {
    id: "4",
    imageUrl: "/images/product-page/product-page-4.webp",
  },
  {
    id: "5",
    imageUrl: "/images/product-page/product-page-5.webp",
  },
];

const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <motion.div
      variants={topVariant({ top: 100, delay: 0 })}
      initial='hidden'
      animate='show'
      className='relative h-auto overflow-hidden rounded-xl lg:h-[600px] lg:w-[560px]'
    >
      <Swiper
        spaceBetween={10}
        parallax={true}
        speed={1400}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Parallax, FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        {SWIPER_IMAGES.map(({ id, imageUrl }, index) => (
          <SwiperSlide key={id} className='h-96 md:h-[480px] lg:h-[640px]'>
            <Image
              src={imageUrl}
              width={0}
              height={0}
              sizes='100vw'
              alt={`Slide ${index + 1}`}
              className='h-auto w-full'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        parallax={true}
        speed={1000}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Parallax, FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        {SWIPER_THUMBNAILS.map(({ id, imageUrl }, index) => (
          <SwiperSlide key={id}>
            <Image
              src={imageUrl}
              width={0}
              height={0}
              sizes='100vw'
              alt={`Slide ${index + 1}`}
              className='h-auto w-full'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ProductSlider;
