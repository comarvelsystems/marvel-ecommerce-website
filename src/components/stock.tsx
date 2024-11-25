"use client";

import { FC } from "react";
import { CalendarClock, CheckCircle2, OctagonX } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { StockStatus } from "@/utils/enums";
import { cn } from "@/lib/utils";

interface Props {
  id: number;
  name: string;
}

const Stock: FC<Props> = ({ id, name }) => {
  return (
    <div>
      <Badge
        variant='outline'
        className={cn(
          {
            "bg-green-500/10 text-green-500": id === StockStatus.InSTOCK,
            "bg-red-500/10 text-red-500": id === StockStatus.OUTOFSTOCK,
            "bg-yellow-500/10 text-yellow-500": id === StockStatus.PREORDER,
          },
          "gap-x-2 rounded-md border-transparent px-4 py-2",
        )}
      >
        {id === StockStatus.InSTOCK && (
          <CheckCircle2 size={18} strokeWidth={2.5} className='inline-block' />
        )}
        {id === StockStatus.OUTOFSTOCK && (
          <OctagonX size={18} strokeWidth={2.5} className='inline-block' />
        )}
        {id === StockStatus.PREORDER && (
          <CalendarClock size={18} strokeWidth={2.5} className='inline-block' />
        )}
        {name}
      </Badge>
    </div>
  );
};

export default Stock;
