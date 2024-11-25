import { FC } from "react";
import { useTranslations } from "next-intl";
import { List } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/utils/@types";

interface Props {
  data: Product["attributes"][0];
}

const ProductSpecifications: FC<Props> = ({ data }) => {
  const t = useTranslations("product");

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
      {data?.attribute.length > 0 ? (
        <>
          <div className='mb-5 flex items-center gap-2 border-b border-border/40 pb-3 font-bold'>
            <List size={20} />
            <span>{data?.name}</span>
          </div>

          {data?.attribute.map(({ attribute_id, name, text }) => (
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
