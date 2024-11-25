import { FilterX } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductTabReviewsResetFilters = () => {
  return (
    <Button variant='destructive' className='flex-grow gap-1.5 sm:flex-grow-0'>
      <FilterX size={16} />
    </Button>
  );
};

export default ProductTabReviewsResetFilters;
