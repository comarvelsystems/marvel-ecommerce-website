import Heading from "@/components/Heading";
import StarRating from "@/components/StarRating";

const ProductReviewRating = () => {
  return (
    <div className='space-y-2'>
      <Heading as='h4' className='text-base'>
        How do you rate this product?
      </Heading>
      <StarRating />
    </div>
  );
};

export default ProductReviewRating;
