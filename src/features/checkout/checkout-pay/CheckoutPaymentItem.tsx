"use client";

import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";
import usePaymentMethodStore from "./usePaymentMethodStore";

interface Props {
  icon: keyof typeof Icons;
  title: string;
  label: string;
}

const CheckoutPaymentItem: React.FC<Props> = ({ icon, title, label }) => {
  const { method, setMethod } = usePaymentMethodStore();
  const Icon = Icons[icon] as React.ElementType;

  return (
    <li
      className={cn(
        "flex cursor-pointer flex-col items-center gap-y-2 border-b border-border/40 p-5 text-center text-sm text-muted-foreground",
        method === label
          ? "border-b-2 border-primary font-semibold text-primary"
          : "text-muted-foreground",
      )}
      onClick={() => setMethod(label)}
    >
      <Icon size={28} />
      {title}
    </li>
  );
};

export default CheckoutPaymentItem;
