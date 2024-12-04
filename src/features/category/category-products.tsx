"use client";

import { Fragment, useEffect, useMemo } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import ProductCard from "@/components/products/ProductCard";
import { ProductList } from "@/utils/@types";
import ProductSkeleton from "@/components/products/ProductSkeleton";
import { Empty, LoadMoreButton, PageInfo } from "@/components";
import useFetchCategoryProducts from "./hooks/use-fetch-category-products";
import { topVariant } from "@/lib/motion";
import { useLocale } from "next-intl";
import { Language } from "@/utils/enums";

const CategoryProducts = () => {
  const { slug } = useParams();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();
  const locale = useLocale();

  const currentLang = locale.toLocaleUpperCase() as keyof typeof Language;
  const categoryId = Number(searchParams.get("cid"));
  const getBrands = searchParams.get("brands");

  const brandIds = useMemo(() => {
    return getBrands
      ?.split(",")
      .map(item => Number(item.split("-")[1]))
      .join(",");
  }, [getBrands]);

  const {
    data,
    isFetching,
    isRefetching,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useFetchCategoryProducts({
    categoryName: slug as string,
    categoryId,
    brandIds,
    languageId: Language[currentLang],
  });

  const pages = useMemo(() => {
    return data?.pages ?? ([] as ProductList[]);
  }, [data?.pages]);

  const count = useMemo(() => {
    return pages.reduce((acc, page) => acc + Number(page?.products.length), 0);
  }, [pages]);

  const totalRecords = Number(pages[0]?.total_records);
  const isNotEmpty = data && pages.length > 0 && totalRecords > 0;

  useEffect(() => {
    if (isRefetching) {
      queryClient.resetQueries({
        queryKey: ["products", `${slug}-${categoryId}`],
      });
    }
  }, [categoryId, isRefetching, queryClient, slug]);

  if (isLoading || isRefetching) {
    return <ProductSkeleton />;
  }

  return (
    <>
      {!isLoading && !isRefetching && isNotEmpty ? (
        <motion.div
          variants={topVariant({ top: count <= 10 ? 50 : 0, delay: 0 })}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='relative grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5'
        >
          {pages?.map(page =>
            page?.products.map(product => (
              <Fragment key={product.product_id}>
                {product.status === "1" && <ProductCard {...product} />}
              </Fragment>
            )),
          )}
        </motion.div>
      ) : (
        <Empty />
      )}

      {isNotEmpty && (
        <PageInfo count={count} totalRecords={totalRecords}>
          <LoadMoreButton
            isFetching={isFetching}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            handler={fetchNextPage}
          />
        </PageInfo>
      )}
    </>
  );
};

export default CategoryProducts;
