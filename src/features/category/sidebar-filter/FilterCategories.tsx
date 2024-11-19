"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useFetchCategories from "@/hooks/useFetchCategories";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import SidebarFilterSkeleton from "./SidebarFilterSkeleton";

const FilterCategories = () => {
    const t = useTranslations("globals.buttons");
    const param = useParams();
    const { data, isFetching } = useFetchCategories(1, 16);

    const categories = data?.categories ?? [];

    return (
        <Accordion type='single' defaultValue='item-1' collapsible>
            <AccordionItem value='item-1' className='border-border/40'>
                <AccordionTrigger className='font-bold !no-underline'>
                    Categories
                </AccordionTrigger>
                <AccordionContent className='space-y-3'>
                    {!isFetching &&
                        categories.map(
                            ({ category_id, name, slug, total_products }) => (
                                <div
                                    key={category_id}
                                    className='relative flex items-center justify-between gap-4'
                                >
                                    <Link
                                        href={`/category/${slug}?cid=${category_id}`}
                                        className={cn(
                                            "select-none text-muted-foreground transition-colors duration-300 hover:text-primary",
                                            param.slug === slug &&
                                                "font-bold text-primary",
                                        )}
                                    >
                                        {name}
                                    </Link>
                                    <Badge
                                        variant='secondary'
                                        className='flex flex-shrink-0 select-none items-center justify-center rounded-full text-xs'
                                    >
                                        {total_products}
                                    </Badge>
                                </div>
                            ),
                        )}
                    {isFetching && <SidebarFilterSkeleton />}
                    <Button size='sm' variant='link' className='p-0'>
                        {t("loadMore")}
                    </Button>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default FilterCategories;
