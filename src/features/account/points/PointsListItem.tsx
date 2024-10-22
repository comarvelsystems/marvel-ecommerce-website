import Image from "next/image";
import { motion } from "framer-motion";
import { Coin, CoinExpired } from "@/assets/images";
import { cn } from "@/lib/utils";
import { topVariant } from "@/lib/motion";

interface Props {
  id?: string;
  points: number;
  date: string;
  type: string;
  index: number;
}

const PointsListItem: React.FC<Props> = ({ points, date, type, index }) => {
  const imageSrc = type === "earned" ? Coin : CoinExpired;

  return (
    <motion.li
      variants={topVariant({})}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      custom={index + 1}
      className='relative flex items-center gap-4 bg-background py-4'
    >
      <Image src={imageSrc} width={32} height={32} alt='Coin' />
      <div className='flex w-full items-center justify-between gap-5'>
        <div className='flex-1 space-y-0.5'>
          <p className='text-lg font-semibold'>
            {type === "earned" ? "Points Earned" : "Points Expired"}
          </p>
          <span className='block text-sm text-muted-foreground'>{date}</span>
        </div>
        <span
          className={cn(
            "text-lg font-bold",
            type === "earned" ? "text-green-600" : "text-destructive",
          )}
        >
          {type === "earned" ? `+${points}` : `-${points}`}
        </span>
      </div>
    </motion.li>
  );
};

export default PointsListItem;
