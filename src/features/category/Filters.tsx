import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import FilterSortBy from "./FilterSortBy";
import FilterSheet from "./sidebar-filter/FilterSheet";

const Filters = () => {
  return (
    <div className='flex items-center gap-2 sm:gap-3'>
      <FilterSheet>
        <Button className='gap-2 lg:hidden'>
          <Filter className='sm:size-[18px size-[14px]' />
          <span className='hidden md:block'>Product Filters</span>
        </Button>
      </FilterSheet>
      <FilterSortBy />
    </div>
  );
};

export default Filters;
