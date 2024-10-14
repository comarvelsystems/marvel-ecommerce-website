"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BannerImage from "./BannerImage";
import { topVariant } from "@/lib/motion";

interface Props {
  data: {
    banners: {
      id: string;
      imageUrl: string;
      href: string;
      col: number;
    }[];
  };
}

const colsSpan = [
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-4",
  "md:col-span-5",
  "md:col-span-6",
  "md:col-span-7",
  "md:col-span-8",
  "md:col-span-9",
  "md:col-span-10",
  "md:col-span-11",
  "md:col-span-12",
];

const RegularBanner: React.FC<Props> = ({ data }) => {
  return (
    <section className='s-padding'>
      <div className='s-container'>
        <div className='grid grid-cols-12 gap-6'>
          {data.banners.map(({ id, imageUrl, href, col }, index) => {
            return (
              <motion.div
                key={id}
                variants={topVariant({ top: 150 })}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                custom={index + 1}
                className={`group relative h-auto overflow-hidden rounded-xl ${colsSpan[col - 1]} col-span-full`}
              >
                <Link href={href}>
                  <BannerImage
                    imageUrl={imageUrl}
                    alt={`Banner ${index + 1}`}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RegularBanner;
