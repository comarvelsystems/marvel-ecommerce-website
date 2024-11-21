"use client";

import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import useFiltersStore from "./store/use-filters-store";
import { Button } from "@/components/ui/button";

const SelectedBrands = () => {
  const t = useTranslations("globals");
  const { filters, deleteFiler, deleteAllSingleFilter } = useFiltersStore();

  const handleClick = (filterItem: string) => {
    deleteFiler("brands", filterItem);
  };

  const handleRemoveAll = () => {
    deleteAllSingleFilter("brands");
  };

  return (
    <>
      <ul className='scrollbar relative flex items-center gap-3 overflow-x-auto py-3'>
        {filters.brands.length > 0 ? (
          <>
            {filters.brands.map(filter => {
              const name = filter.split("-")[0];

              return (
                <li
                  key={filter}
                  className='flex flex-shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-md bg-primary/5 px-2.5 py-1.5 text-sm text-primary'
                  onClick={() => handleClick(filter)}
                >
                  <span>{name}</span>
                  <X size={16} />
                </li>
              );
            })}
          </>
        ) : null}
        {filters.brands.length > 0 ? (
          <li className='sticky right-0 rtl:left-0'>
            <Button
              size='sm'
              variant='ghost'
              className='shadow-[-13px 0px 14px 0px #67676729] bg-background text-xs underline hover:bg-background'
              onClick={handleRemoveAll}
            >
              {t("remove-all")}
            </Button>
          </li>
        ) : null}
      </ul>
    </>
  );
};

export default SelectedBrands;
