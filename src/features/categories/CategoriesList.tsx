"use client";

import { motion } from "framer-motion";
import { topVariant } from "@/lib/motion";
import { Category } from "@/utils/@types";
import CategoryItem from "@/components/CategoryItem";

interface Props {
  categories: Category[] | undefined;
}

const CategoriesList: React.FC<Props> = ({ categories }) => {
  return (
    <ul className='grid min-h-[470px] grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8'>
      {categories?.map((category, index) => (
        <motion.li
          variants={topVariant({})}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          custom={index + 1}
          className='relative'
          key={category.category_id}
        >
          <CategoryItem {...category} />
        </motion.li>
      ))}
    </ul>
  );
};

export default CategoriesList;
