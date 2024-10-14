import Heading from "@/components/Heading";
import Filters from "./Filters";
import CategoryProducts from "./CategoryProducts";

const CategoryContainer = ({ title }: { title: string }) => {
  return (
    <div className='space-y-5 p-0 lg:p-5'>
      <div className='flex w-full flex-row justify-between gap-5 sm:items-center lg:flex-1'>
        <Heading as='h4'>{title}</Heading>
        <Filters />
      </div>
      <CategoryProducts />
    </div>
  );
};

export default CategoryContainer;
