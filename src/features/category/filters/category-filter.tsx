"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useFetchCategories from "@/hooks/use-fetch-categories";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Categories } from "@/utils/@types";
import FilterSkeleton from "./filter-skeleton";
import useInfinite from "@/hooks/use-infinite";

const CategoryFilter = () => {
  const t = useTranslations();
  const param = useParams();

  const {
    isRefetching,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    fetchNextPage,
    pages,
    isNotEmpty,
  } = useInfinite(useFetchCategories, "categories", undefined, 8);

  return (
    <Accordion type='single' defaultValue='item-1' collapsible>
      <AccordionItem value='item-1' className='border-border/40'>
        <AccordionTrigger className='font-bold !no-underline'>
          {t("pages.categories.title")}
        </AccordionTrigger>
        <AccordionContent className='space-y-3'>
          {(isLoading || isRefetching) && <FilterSkeleton />}
          {!isLoading && !isRefetching && isNotEmpty
            ? pages?.map((page: Categories) =>
                page?.categories?.map(
                  category =>
                    category.status === 1 && (
                      <div
                        key={category.category_id}
                        className='relative flex items-center justify-between gap-4'
                      >
                        <Link
                          href={`/category/${category.slug}?cid=${category.category_id}`}
                          className={cn(
                            "select-none text-muted-foreground transition-colors duration-300 hover:text-primary",
                            param.slug === category.slug &&
                              "font-bold text-primary",
                          )}
                        >
                          {category.name}
                        </Link>
                        <Badge
                          variant='secondary'
                          className='flex flex-shrink-0 select-none items-center justify-center rounded-full text-xs'
                        >
                          {category.total_products}
                        </Badge>
                      </div>
                    ),
                ),
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

export default CategoryFilter;
