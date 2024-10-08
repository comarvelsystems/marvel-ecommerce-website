"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { topVariant } from "@/lib/motion";
import Heading from "@/components/Heading";
import useTab from "./useTabStore";

interface Props {
  id: string;
  title: string;
  description: string;
  label: string;
  index: number;
}

const ProductTabsListItem: React.FC<Props> = ({
  id,
  title,
  description,
  label,
  index,
}) => {
  const { tab, setTab } = useTab();

  return (
    <motion.li
      key={id}
      variants={topVariant({})}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      custom={index}
      className={cn(
        "group relative flex-grow cursor-pointer rounded-xl border-x border-y border-border/40 bg-background px-8 py-3 text-center transition-colors duration-300 lg:rounded-none lg:border-x-0 lg:border-y-0 lg:border-b lg:px-0 lg:py-0 lg:pb-8 lg:text-start",
        tab === label && "border-primary lg:border-border/40",
      )}
      onClick={() => setTab(label)}
    >
      <Heading
        as='h3'
        className={cn(
          "text-base transition-colors duration-300 group-hover:text-primary lg:text-3xl",
          tab === label && "text-primary",
        )}
      >
        {title}
      </Heading>
      <p className='hidden text-muted-foreground/80 lg:block'>{description}</p>
    </motion.li>
  );
};

export default ProductTabsListItem;
