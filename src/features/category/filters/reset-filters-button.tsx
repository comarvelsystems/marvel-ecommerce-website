"use client";

import { FilterX, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import useFiltersStore from "../store/use-filters-store";
import { useTranslations } from "next-intl";

const ResetFiltersButton = () => {
  const t = useTranslations("globals");
  const { deleteFilters } = useFiltersStore();

  const { filters } = useFiltersStore();

  const isExist =
    filters.brands.length > 0 ||
    filters.price.length > 0 ||
    filters.subCategories.length > 0;

  return (
    <>
      {isExist ? (
        <Button
          size='sm'
          variant='link'
          className='h-0 flex-shrink-0 gap-x-1.5 p-0 text-xs text-destructive underline'
          onClick={deleteFilters}
        >
          {t("remove-all")}
        </Button>
      ) : null}
    </>
  );
};

export default ResetFiltersButton;
