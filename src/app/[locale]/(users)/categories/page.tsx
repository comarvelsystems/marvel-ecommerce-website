import { FC } from "react";
import { Metadata } from "next";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getCategoriesApi } from "@/apis/categoryApi";
import CategoriesContainer from "@/features/categories/CategoriesContainer";

interface Props {
  searchParams: {
    page: number;
  };
}

export const metadata: Metadata = {
  title: "Marvel eCommerce | Categories",
  description: "Categories page",
};

const Categories: FC<Props> = async ({ searchParams }) => {
  const queryClient = new QueryClient();
  const currentPage = +searchParams.page || 1;

  await queryClient.prefetchQuery({
    queryKey: ["categories", currentPage],
    queryFn: async () => getCategoriesApi(currentPage, 10),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CategoriesContainer page={currentPage} />
    </HydrationBoundary>
  );
};

export default Categories;
