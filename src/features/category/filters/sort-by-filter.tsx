import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortByFilter = () => {
  return (
    <Select name='sortBy'>
      <SelectTrigger className='w-32 flex-shrink-0 md:w-40'>
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

export default SortByFilter;
