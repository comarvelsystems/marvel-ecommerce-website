import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { ReviewList } from "@/utils/@types";
import ProductReviewsItem from "./product-reviews-item";
import useInfinite from "@/hooks/use-infinite";
import useFetchReviews, {
  FetchReviewsParams,
} from "../../hooks/use-fetch-reviews";
import { LoadMoreButton } from "@/components";
import ReviewsListSkeleton from "../../skeleton/reviews-list-skeleton";

const ProductReviewsList = () => {
  const t = useTranslations("product");
  const searchParams = useSearchParams();

  const productId = Number(searchParams.get("pid"));
  const searchQuery = searchParams.get("search") || "";
  const sortby = searchParams.get("sortby") || "";

  const {
    pages,
    isRefetching,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isNotEmpty,
  } = useInfinite(
    useFetchReviews,
    "reviews",
    `${productId}${searchQuery}${sortby}`,
    {
      productId,
      searchQuery,
      sortby,
    } as FetchReviewsParams,
  );

  return (
    <>
      {(isLoading || isRefetching) && <ReviewsListSkeleton />}

      {!isLoading && !isRefetching && isNotEmpty && (
        <ul className='divide-y divide-border/40'>
          {pages?.map((page: ReviewList) =>
            page?.reviews?.map((review, index) => (
              <ProductReviewsItem key={index} {...review} />
            )),
          )}
        </ul>
      )}

      {!isLoading && !isRefetching && !isNotEmpty && (
        <div className='flex min-h-28 items-center justify-center'>
          <p className='text-muted-foreground'>{t("empty-reviews")}</p>
        </div>
      )}

      <LoadMoreButton
        isFetching={isRefetching}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        handler={fetchNextPage}
      />
    </>
  );
};

export default ProductReviewsList;
