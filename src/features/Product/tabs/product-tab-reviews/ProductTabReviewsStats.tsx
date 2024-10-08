import ProductTabReviewsProgress from "./ProductTabReviewsProgress";
import RatingStars from "@/components/RatingStars";

const ProductTabReviewsStats = () => {
  return (
    <div className='space-y-2'>
      <span className='text-4xl font-bold'>4.6</span>
      <div className='flex items-center'>
        <RatingStars size={24} score={4} />
      </div>
      <p className='text-sm text-muted-foreground/80'>Based on 2195 reviews</p>
      <ProductTabReviewsProgress />
    </div>
  );
};

export default ProductTabReviewsStats;
