"use client";

import { motion } from "framer-motion";
import CategoryItem from "@/components/CategoryItem";
import { topVariant } from "@/lib/motion";

// TODO: Replace with real api
const CATEGORIES = [
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

const CategoriesList = () => {
  return (
    <ul className='grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8'>
      {CATEGORIES.map((category, index) => (
        <motion.li
          variants={topVariant({})}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          custom={index + 1}
          className='relative'
          key={category.id}
        >
          <CategoryItem {...category} />
        </motion.li>
      ))}
    </ul>
  );
};

export default CategoriesList;
