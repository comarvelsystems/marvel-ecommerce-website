"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { topVariant } from "@/lib/motion";
import { cn } from "@/lib/utils";
import lightenColor from "@/lib/lightenColor";

// TODO: replace with real colors
const COLORS = [
  {
    id: "1",
    name: "#f00000",
  },
  {
    id: "2",
    name: "#7f00ff",
  },
  {
    id: "3",
    name: "#ffa500",
  },
  {
    id: "4",
    name: "#008000",
  },
];

const ProductDetailsColors = () => {
  const [color, setColor] = useState<string>(() => COLORS[1].name);

  return (
    <motion.div
      variants={topVariant({ delay: 0.6 })}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='relative space-y-4'
    >
      <span className='block text-lg font-bold'>Color:</span>
      <div className='flex items-center gap-2'>
        {COLORS.map(({ id, name }) => (
          <div
            key={id}
            data-color={name}
            className={cn(
              "flex size-12 cursor-pointer items-center justify-center rounded-full border border-transparent text-background transition-colors duration-300 hover:border-black",
              color === name && "border-foreground",
            )}
            style={{ backgroundColor: lightenColor(name, 0.4) }}
            onClick={() => setColor(name)}
          >
            {color === name && <Check strokeWidth={2.5} />}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductDetailsColors;
