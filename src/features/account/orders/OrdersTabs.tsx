"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ORDERS_TABS } from "@/constants";
import { cn } from "@/lib/utils";
import OrdersList from "./OrdersList";

const OrdersTabs = () => {
  const [tab, setTab] = useState("all");

  return (
    <Card className='rounded-t-none border-t-0 shadow-none'>
      <CardHeader>
        <ul className='flex items-center border-b border-border/40'>
          {ORDERS_TABS.map(({ label, name }) => (
            <li
              key={label}
              className={cn(
                "flex-1 cursor-pointer border-b-4 border-transparent pb-3 text-center text-lg font-semibold text-muted-foreground transition-colors duration-300 hover:text-foreground",
                tab === label && "border-primary text-primary",
              )}
              onClick={() => setTab(label)}
            >
              {name}
            </li>
          ))}
        </ul>
      </CardHeader>
      <CardContent>
        <OrdersList />
      </CardContent>
    </Card>
  );
};

export default OrdersTabs;
