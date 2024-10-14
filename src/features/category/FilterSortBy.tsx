import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterSortBy = () => {
  return (
    <Select>
      <SelectTrigger className='w-20 flex-shrink-0 sm:w-32 md:w-40'>
        <SelectValue placeholder='Sort By' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='best'>best seller</SelectItem>
          <SelectItem value='most-least'>From most to least</SelectItem>
          <SelectItem value='least-most'>From least to most</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterSortBy;
