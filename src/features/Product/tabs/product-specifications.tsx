import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { List } from "lucide-react";
import useProductStore from "../store/use-product-store";

const ProductSpecifications = () => {
  const t = useTranslations("product");
  const attributes = useProductStore(state => state.product.attributes);

  const specifications = attributes?.filter(
    attr => attr.name !== "specifications",
  )[0];

  return (
    <motion.div
      initial={{ opacity: 0, top: 20 }}
      animate={{ opacity: 1, top: 0 }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        stiffness: 100,
      }}
      className='flex-col-full relative h-full'
    >
      {specifications?.attribute.length > 0 ? (
        <>
          <div className='mb-5 flex items-center gap-2 border-b border-border/40 pb-3 font-bold'>
            <List size={20} />
            <span>{specifications?.name}</span>
          </div>

          {specifications?.attribute.map(({ attribute_id, name, text }) => (
            <div key={attribute_id} className='metadata-row'>
              <p className='metadata-row-name'>{name}</p>
              <p className='metadata-row-value'>{text}</p>
            </div>
          ))}
        </>
      ) : (
        <div className='flex-col-full min-h-28 items-center justify-center text-muted-foreground'>
          <p>{t("empty-specifications")}</p>
        </div>
      )}
    </motion.div>
  );
};

export default ProductSpecifications;
