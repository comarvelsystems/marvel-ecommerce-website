"use client";

import { useTranslations } from "next-intl";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFilter from "@/hooks/use-filter";
import { useSearchParams } from "next/navigation";

const ProductReviewsSort = () => {
  const t = useTranslations("select-box");
  const { updateSelect } = useFilter();
  const searchParams = useSearchParams();
  const sortby = searchParams.get("sortby") || "";

  return (
    <div className='flex-grow md:flex-grow-0'>
      <div className='flex items-center gap-2'>
        <Label className='sr-only'>{t("labels.sort-by")}</Label>
        <Select
          onValueChange={value => updateSelect({ sortby: value })}
          value={sortby}
        >
          <SelectTrigger className='!mt-0 w-full md:w-48'>
            <SelectValue placeholder='Sort By' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>{t("all")}</SelectItem>
            <SelectItem value='rating_asc'>{t("rating-asc")}</SelectItem>
            <SelectItem value='rating_desc'>{t("rating-desc")}</SelectItem>
            <SelectItem value='recent'>{t("recent")}</SelectItem>
            <SelectItem value='oldest'>{t("oldest")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProductReviewsSort;
