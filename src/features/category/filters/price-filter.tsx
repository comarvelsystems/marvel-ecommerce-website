"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PriceFilter = () => {
  const t = useTranslations("globals");

  return (
    <Accordion type='single' defaultValue='item-1' collapsible>
      <AccordionItem value='item-1' className='border-border/40'>
        <AccordionTrigger className='font-bold !no-underline'>
          {t("price")}
        </AccordionTrigger>
        <AccordionContent className='space-y-2'>
          <div className='flex items-center gap-2'>
            <div className='relative'>
              <div className='absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground/60 rtl:left-3 rtl:right-auto'>
                {t("currency.SAR")}
              </div>
              <Input
                min={0}
                max={1000}
                type='number'
                placeholder='from'
                className='focus-reset w-full focus:border-primary'
              />
            </div>
            {/* eslint-disable-next-line react/jsx-no-literals */}
            <div className='text-sm text-muted-foreground'> - </div>
            <div className='relative'>
              <div className='absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground/60 rtl:left-3 rtl:right-auto'>
                {t("currency.SAR")}
              </div>
              <Input
                min={0}
                max={1000}
                type='number'
                placeholder='to'
                className='focus-reset w-full focus:border-primary'
              />
            </div>
            <Button variant='secondary' size='icon' className='flex-shrink-0'>
              <ArrowRight size={16} />
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PriceFilter;
