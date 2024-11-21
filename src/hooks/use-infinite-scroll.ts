import { useEffect } from "react";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";

interface Params {
  hasNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>;
}

const useInfiniteScroll = ({ fetchNextPage, hasNextPage }: Params) => {
  useEffect(() => {
    let fetching = false;

    const onScroll = async () => {
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;

        if (hasNextPage) {
          await fetchNextPage();
          fetching = false;
        }
      }
    };

    addEventListener("scroll", onScroll);

    return () => {
      removeEventListener("scroll", onScroll);
    };
  }, [fetchNextPage, hasNextPage]);
};

export default useInfiniteScroll;
