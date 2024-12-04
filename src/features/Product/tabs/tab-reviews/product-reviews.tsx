import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Heading from "@/components/Heading";
import ProductReviewsScore from "./product-reviews-score";
import ProductReviewsList from "./product-reviews-list";
import ProductReviewsFilters from "./product-reviews-filters";

const ProductReviews = () => {
  const t = useTranslations("product.product-reviews");

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
        <Heading as='h6'>{t("title")}</Heading>
      </div>
      <div className='space-y-8'>
        <ProductReviewsScore />
        <div className='space-y-2'>
          <ProductReviewsFilters />
          <ProductReviewsList />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductReviews;
