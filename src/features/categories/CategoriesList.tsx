"use client";

import { motion } from "framer-motion";
import { topVariant } from "@/lib/motion";
import { Category } from "@/utils/@types";
import CategoryItem from "@/components/CategoryItem";
import { cn } from "@/lib/utils";

interface Props {
  categories: Category[] | undefined;
  totalPages: number;
}

const CategoriesList: React.FC<Props> = ({ categories, totalPages }) => {
  return (
    <ul
      className={cn(
        "grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8",
        totalPages > 1 && "md:min-h-[494px]",
      )}
    >
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
