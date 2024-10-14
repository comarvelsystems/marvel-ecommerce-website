"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { topVariant } from "@/lib/motion";

// TODO: replace with real API
const NEW_ARRIVAL = [
  {
    id: "1",
    name: "Last 7 days",
    label: "last-7-days",
    number: 1,
  },
  {
    id: "2",
    name: "Last 30 days",
    label: "last-30-days",
    number: 4,
  },
  {
    id: "3",
    name: "Last 60 days",
    label: "last-60-days",
    number: 5,
  },
];

const FilterNewArrival = () => {
  return (
    <Accordion type='single' defaultValue='item-1' collapsible>
      <AccordionItem value='item-1' className='border-border/40'>
        <AccordionTrigger className='font-bold !no-underline'>
          New Arrival
        </AccordionTrigger>
        <AccordionContent className='space-y-3'>
          {NEW_ARRIVAL.map(({ id, name, label, number }, index) => (
            <motion.div
              key={id}
              variants={topVariant({})}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
              custom={index + 1}
              className='relative flex items-center justify-between gap-4'
            >
              <Label htmlFor={label} className='flex flex-1 items-center gap-4'>
                <Checkbox
                  id={label}
                  className='border-border'
                  onCheckedChange={() => {
                    console.log(`${id}`);
                  }}
                />
                <span className='block select-none text-sm font-normal text-muted-foreground'>
                  {name}
                </span>
              </Label>
              <Badge
                variant='secondary'
                className='flex flex-shrink-0 select-none items-center justify-center rounded-full text-xs'
              >
                {number}
              </Badge>
            </motion.div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterNewArrival;
