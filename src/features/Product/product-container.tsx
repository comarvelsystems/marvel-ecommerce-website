"use client";

import { useEffect, useMemo } from "react";
import { notFound, useSearchParams } from "next/navigation";
// import RelatedProduct from "@/components/RelatedProduct";
import ProductSlider from "@/features/Product/product-slider";
import ProductDetails from "@/features/Product/details/product-details";
import SidebarLeft from "@/features/Product/sidebar-left/SidebarLeft";
import ProductTabs from "@/features/Product/tabs/tabs-list/product-tabs";
import useFetchProduct from "./hooks/use-fetch-product";
import { ProductInfo } from "@/utils/@types";
import useProductStore from "./store/use-product-store";
import ProductSkeleton from "./skeleton/product-skeleton";
import { useLocale } from "next-intl";
import { Language } from "@/utils/enums";

const ProductContainer = () => {
  const searchParams = useSearchParams();
  const { setProduct, setLoading, setFetching } = useProductStore();
  const locale = useLocale();

  const languageId =
    Language[locale.toLocaleUpperCase() as keyof typeof Language];
  const productId = Number(searchParams.get("pid"));

  const { data, isLoading, isFetching } = useFetchProduct(
    productId,
    languageId,
  );

  const product = useMemo(() => {
    const productData = {
      ...data?.product.product_info,
      ...data?.review_list,
    } as ProductInfo;

    return productData ?? ({} as ProductInfo);
  }, [data]);

  useEffect(() => {
    setProduct(product);
    setLoading(isLoading);
    setFetching(isFetching);
  }, [isFetching, isLoading, product, setFetching, setLoading, setProduct]);

  if (!isLoading && !data) {
    return notFound();
  }

  if (isLoading || isFetching) {
    return <ProductSkeleton />;
  }

  return (
    <div className='space-y-8'>
      <div className='xl:space-y-0'>
        <div className='flex flex-col gap-8 xl:flex-row'>
          <div className='flex flex-col gap-8 lg:flex-[70%] lg:flex-shrink-0 lg:flex-grow-0 lg:flex-row'>
            <ProductSlider image={product?.image} images={product?.images} />
            <ProductDetails />
          </div>
          <SidebarLeft />
        </div>
        <ProductTabs />
      </div>
      {/* <RelatedProduct /> */}
    </div>
  );
};

export default ProductContainer;
