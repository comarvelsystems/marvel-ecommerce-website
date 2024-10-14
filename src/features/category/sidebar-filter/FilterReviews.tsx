"use client";

import { motion } from "framer-motion";
import RatingStars from "@/components/RatingStars";
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
const REVIEWS = [
  {
    id: "1",
    score: 1,
    number: 0,
  },
  {
    id: "2",
    score: 2,
    number: 3,
  },
  {
    id: "3",
    score: 3,
    number: 5,
  },
  {
    id: "4",
    score: 4,
    number: 9,
  },
  {
    id: "5",
    score: 5,
    number: 21,
  },
];

const FilterReviews = () => {
  return (
    <Accordion type='single' defaultValue='item-1' collapsible>
      <AccordionItem value='item-1' className='border-border/40'>
        <AccordionTrigger className='font-bold !no-underline'>
          Reviews
        </AccordionTrigger>
        <AccordionContent className='space-y-3'>
          {REVIEWS.map(({ id, score, number }, index) => (
            <motion.div
              key={id}
              variants={topVariant({})}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
              custom={index + 1}
              className='relative flex items-center justify-between gap-4'
            >
              <Label
                htmlFor={`score-${score}`}
                className='flex flex-1 items-center gap-4'
              >
                <Checkbox
                  id={`score-${score}`}
                  className='border-border'
                  onCheckedChange={() => {
                    console.log(`${id}`);
                  }}
                />
                <RatingStars score={score} />
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

export default FilterReviews;
