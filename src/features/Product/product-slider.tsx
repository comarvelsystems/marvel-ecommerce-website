"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Parallax, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Zoom from "react-medium-image-zoom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "react-medium-image-zoom/dist/styles.css";
import { Placeholder } from "@/assets/images";

interface Props {
  image: string;
  images: { product_id: number; product_image_id: number; image: string }[];
}

const ProductSlider: FC<Props> = ({ image, images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  //TODO: Delete This
  const imageUrl = `https://s.marvel-cloud.com/api/image`;

  return (
    <div className='h-auto space-y-3 overflow-hidden rounded-xl lg:h-[600px] lg:w-[560px]'>
      <Swiper
        spaceBetween={10}
        parallax={true}
        speed={1400}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Parallax, FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        <SwiperSlide className='h-96 md:h-[480px] lg:h-[640px]'>
          <Zoom>
            <Image
              src={`${imageUrl}/${image}`}
              width={0}
              height={0}
              sizes='100vw'
              priority
              blurDataURL={Placeholder.blurDataURL}
              alt={`Slide ${image + 1}`}
              className='h-auto w-full'
            />
          </Zoom>
        </SwiperSlide>
        {images?.length > 0 && (
          <>
            {images?.map(({ product_image_id, image }, index) => (
              <SwiperSlide
                key={product_image_id}
                className='h-96 md:h-[480px] lg:h-[640px]'
              >
                <Zoom>
                  <Image
                    src={`${imageUrl}/${image}`}
                    width={0}
                    height={0}
                    sizes='100vw'
                    priority
                    blurDataURL={Placeholder.blurDataURL}
                    alt={`Slide ${index + 1}`}
                    className='h-auto w-full'
                  />
                </Zoom>
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
      <Swiper
        onSwiper={swiper => setThumbsSwiper(swiper)}
        parallax={true}
        speed={1000}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Parallax, FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        {images?.length > 0 && (
          <>
            {images?.map(({ product_image_id, image }, index) => (
              <SwiperSlide key={product_image_id}>
                <Image
                  src={`${imageUrl}/${image}`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt={`Slide ${index + 1}`}
                  priority
                  blurDataURL={Placeholder.blurDataURL}
                  className='h-auto w-full'
                />
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
