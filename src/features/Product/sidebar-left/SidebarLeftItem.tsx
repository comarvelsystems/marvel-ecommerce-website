import { motion } from "framer-motion";
import { topVariant } from "@/lib/motion";
import { LucideIcon } from "lucide-react";

interface Props {
  text: string;
  icon: LucideIcon;
  delay: number;
}

const SidebarLeftItem: React.FC<Props> = ({ text, icon: Icon, delay }) => {
  return (
    <motion.li
      variants={topVariant({ delay })}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='relative flex items-center gap-3 bg-white p-4 text-sm font-medium'
    >
      <div className='flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500'>
        <Icon size={20} />
      </div>
      {text}
    </motion.li>
  );
};

export default SidebarLeftItem;
