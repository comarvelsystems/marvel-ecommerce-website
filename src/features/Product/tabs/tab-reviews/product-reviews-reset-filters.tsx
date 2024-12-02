import { FilterX } from "lucide-react";
import { Button } from "@/components/ui/button";
import useFilter from "@/hooks/use-filter";

const ProductReviewsResetFilters = () => {
  const { reset } = useFilter();

  return (
    <Button
      variant='destructive'
      className='flex-grow gap-1.5 sm:flex-grow-0'
      onClick={() => reset({ sortby: "" })}
    >
      <FilterX size={16} />
    </Button>
  );
};

export default ProductReviewsResetFilters;
