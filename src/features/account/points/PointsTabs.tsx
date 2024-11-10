"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { POINTS_TABS } from "@/utils/constants";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PointsList from "./PointsList";

const PointsTabs = () => {
  const [tab, setTab] = useState("all");

  return (
    <Card className='shadow-none'>
      <CardHeader>
        <ul className='flex items-center border-b border-border/40'>
          {POINTS_TABS.map(({ label, name }) => (
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
        <PointsList />
      </CardContent>
    </Card>
  );
};

export default PointsTabs;
