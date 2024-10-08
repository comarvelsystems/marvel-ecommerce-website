import { motion } from "framer-motion";
import { List } from "lucide-react";

// TODO: Replace with real api
const METADATA_ROWS = [
  {
    id: "1",
    name: "Internal memory",
    value: "256GB",
  },
  {
    id: "2",
    name: "Primary camera resolution",
    value: "200MP",
  },
  {
    id: "3",
    name: "RAM size",
    value: "12GB",
  },
  {
    id: "4",
    name: "Screen size",
    value: "6.8In",
  },
  {
    id: "5",
    name: "Storage",
    value: "128GB",
  },
  {
    id: "6",
    name: "New network",
    value: "5G",
  },
];

const ProductTabsFeatures = () => {
  return (
    <motion.div
      initial={{ opacity: 0, top: 20 }}
      animate={{ opacity: 1, top: 0 }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        stiffness: 100,
      }}
      className='relative'
    >
      <div className='mb-5 flex items-center gap-2 border-b border-border/40 pb-3 font-bold'>
        <List size={20} />
        <span>Features</span>
      </div>
      {METADATA_ROWS.map(({ id, name, value }) => (
        <div key={id} className='metadata-row'>
          <p className='metadata-row-name'>{name}</p>
          <p className='metadata-row-value'>{value}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default ProductTabsFeatures;
