import { FC } from "react";
import { CategoryItem } from "@/components";
import { Categories } from "@/utils/@types";

interface Props {
  pages: (Categories | undefined)[];
}

const CategoryList: FC<Props> = ({ pages }) => {
  return (
    <ul className='grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
      {pages?.map((page, index) =>
        page?.categories?.map(
          category =>
            category.status === 1 && (
              <CategoryItem
                key={category.category_id}
                {...category}
                index={index + 1}
              />
            ),
        ),
      )}
    </ul>
  );
};

export default CategoryList;
