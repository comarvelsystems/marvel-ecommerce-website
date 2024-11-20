"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import useInfinite from "@/hooks/useInfinite";
import useFetchBrands from "@/hooks/useFetchBrands";
import { BrandList } from "@/utils/@types";
import { Button } from "@/components/ui/button";
import SidebarFilterSkeleton from "./SidebarFilterSkeleton";

const FilterBrands = () => {
  const t = useTranslations();
  const [ids, setIds] = useState<string[]>([]);
  const ref = useRef(true);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const categoryId = Number(searchParams.get("cid"));
  const queryKeySecond = categoryId;

  const {
    isRefetching,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    fetchNextPage,
    pages,
    isNotEmpty,
  } = useInfinite(
    useFetchBrands,
    "manufacturers",
    queryKeySecond,
    categoryId,
    8,
  );

  useEffect(() => {
    if (ref.current) {
      const brand = searchParams.get("brands");

      if (brand) {
        setIds(brand.split(","));
      }
    }

    return () => {
      ref.current = false;
    };
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("brands", ids.join(","));

    if (ids.length === 0) {
      params.delete("brands");
    }

    router.push(`${pathname}?${params}`);
  }, [ids, pathname, router, searchParams]);

  const handleChange = (data: { id: number; isChecked: boolean }) => {
    if (data.isChecked) {
      setIds(prev => [...prev, String(data.id)]);
    } else {
      setIds(prev => prev.filter(id => id !== String(data.id)));
    }
  };

  return (
    <Accordion type='single' defaultValue='item-1' collapsible>
      <AccordionItem value='item-1' className='border-border/40'>
        <AccordionTrigger className='font-bold !no-underline'>
          {t("brands.title")}
        </AccordionTrigger>
        <AccordionContent className='space-y-3'>
          {(isLoading || isRefetching) && <SidebarFilterSkeleton />}

          {!isLoading && !isRefetching && isNotEmpty
            ? pages?.map((page: BrandList) =>
                page?.manufacturers?.map(brand => (
                  <div
                    key={brand.manufacturer_id}
                    className='relative flex items-center justify-between gap-4'
                  >
                    <Label
                      htmlFor={`brand-${brand.manufacturer_id}`}
                      className='flex flex-1 items-center gap-4'
                    >
                      <Checkbox
                        id={`brand-${brand.manufacturer_id}`}
                        className='border-border'
                        onCheckedChange={(value: boolean) =>
                          handleChange({
                            isChecked: value,
                            id: brand.manufacturer_id,
                          })
                        }
                        defaultChecked={ids.includes(
                          String(brand.manufacturer_id),
                        )}
                      />
                      <span className='block select-none text-sm font-normal text-muted-foreground'>
                        {brand.name}
                      </span>
                    </Label>
                    <Badge
                      variant='secondary'
                      className='flex flex-shrink-0 select-none items-center justify-center rounded-full text-xs'
                    >
                      {brand.products_count}
                    </Badge>
                  </div>
                )),
              )
            : null}

          {hasNextPage && (
            <Button
              onClick={() => fetchNextPage()}
              size='sm'
              variant='link'
              className='p-0'
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage ? (
                <Loader2 size={14} className='z-1 relative animate-spin' />
              ) : (
                t("globals.buttons.loadMore")
              )}
            </Button>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterBrands;
