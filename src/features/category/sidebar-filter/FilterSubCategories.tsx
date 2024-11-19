"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// TODO: replace with real API
const SUB_CATEGORIES = [
  {
    id: "1",
    name: "Mac",
    label: "mac",
    number: 4,
  },
  {
    id: "2",
    name: "Dell",
    label: "dell",
    number: 3,
  },
  {
    id: "3",
    name: "Asus",
    label: "asus",
    number: 6,
  },
  {
    id: "4",
    name: "Hp",
    label: "hp",
    number: 7,
  },
  {
    id: "5",
    name: "MSI",
    label: "msi",
    number: 5,
  },
  {
    id: "6",
    name: "Lenovo",
    label: "lenovo",
    number: 8,
  },
  {
    id: "7",
    name: "Microsoft",
    label: "microsoft",
    number: 10,
  },
];

const FilterSubCategories = () => {
  return (
    <Accordion type='single' defaultValue='item-1' collapsible>
      <AccordionItem value='item-1' className='border-border/40'>
        <AccordionTrigger className='font-bold !no-underline'>
          Sub Categories
        </AccordionTrigger>
        <AccordionContent className='space-y-3'>
          {SUB_CATEGORIES.map(({ id, name, label, number }) => (
            <div key={id} className='flex items-center justify-between gap-4'>
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
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterSubCategories;
