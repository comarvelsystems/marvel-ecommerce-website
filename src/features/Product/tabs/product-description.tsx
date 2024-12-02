"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import useProductStore from "../store/use-product-store";

const ProductDescription = () => {
  const t = useTranslations("product");
  const description = useProductStore(state => state.product.description);

  return (
    <motion.div
      initial={{ opacity: 0, top: 20 }}
      animate={{ opacity: 1, top: 0 }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        stiffness: 100,
      }}
      className='tabs__item flex-col-full relative h-full space-y-3'
    >
      {description ? (
        <div dangerouslySetInnerHTML={{ __html: description }} />
      ) : (
        <div className='flex-col-full min-h-28 items-center justify-center'>
          <p>{t("empty-description")}</p>
        </div>
      )}
    </motion.div>
  );
};

export default ProductDescription;
