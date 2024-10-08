import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Heading from "@/components/Heading";
import ProductTabReviewsStats from "./ProductTabReviewsStats";
import ProductTabReviewsFilters from "./ProductTabReviewsFilters";
import ProductTabReviewsCardList from "./ProductTabReviewsCardList";

const ProductTabsReviews = () => {
  return (
    <motion.div
      initial={{ opacity: 0, top: 20 }}
      animate={{ opacity: 1, top: 0 }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        stiffness: 100,
      }}
      className='relative space-y-6'
    >
      <div className='flex items-center gap-2 border-b border-border/40 pb-3 font-bold'>
        <Star size={20} />
        <Heading as='h6'>Overall Rating</Heading>
      </div>
      <div className='space-y-8'>
        <ProductTabReviewsStats />
        <div className='space-y-2'>
          <ProductTabReviewsFilters />
          <ProductTabReviewsCardList />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductTabsReviews;
