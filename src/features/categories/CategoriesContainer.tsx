"use client";

import { FC, useEffect } from "react";
import { useTranslations } from "next-intl";
import CategoriesList from "./CategoriesList";
import useFetchCategories from "@/hooks/useFetchCategories";
import {
  Pagination,
  StatusAlert,
  Empty,
  Heading,
  CategoriesSkeleton,
  RefetchButton,
} from "@/components";

interface Props {
  page: number;
}

const CategoriesContainer: FC<Props> = ({ page }) => {
  const t = useTranslations("categories");
  const { data, error, isFetching, refetch } = useFetchCategories(page, 10);

  const categories = data?.categories || [];
  const totalPages = (data?.pagination?.total_pages as number) ?? 0;

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  return (
    <div className='flex-col-full'>
      {!isFetching && error && (
        <StatusAlert
          variant='error'
          title='globals.error'
          message={`errors.${error.message}`}
        />
      )}
      <section className='s-padding flex-col-full'>
        <div className='s-container flex-col-full'>
          <div className='mb-8 flex items-center justify-between'>
            <Heading as='h1' className='!text-2xl' title={t("title")}>
              {t("title")}
            </Heading>
            {error && <RefetchButton refetch={refetch} />}
          </div>
          {isFetching && <CategoriesSkeleton />}
          <div className='flex-col-full'>
            {!isFetching && !categories.length && <Empty />}
            {!isFetching && !error && !!categories.length && (
              <CategoriesList categories={categories} totalPages={totalPages} />
            )}
          </div>
          {<Pagination totalPages={totalPages} />}
        </div>
      </section>
    </div>
  );
};

export default CategoriesContainer;
