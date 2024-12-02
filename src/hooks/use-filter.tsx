import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Params {
  [key: string]: string;
}

const useFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const currentPage = searchParams.get("page") || 1;

  const updateFilter = useCallback(
    (params: Params) => {
      const newSearchParams = new URLSearchParams(searchParams);

      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          newSearchParams.set(key, value);
        } else {
          newSearchParams.delete(key);
        }
      });

      if (params.search === "") {
        newSearchParams.delete("search");
      }

      router.replace(`${pathname}?${newSearchParams.toString()}`, {
        scroll: false,
      });
    },
    [searchParams, pathname, router],
  );

  const updateSelect = useCallback(
    (param: Params) => {
      updateFilter(param);
    },
    [updateFilter],
  );

  const updateSearch = useCallback(
    (value: string) => {
      updateFilter({ search: value });
    },
    [updateFilter],
  );

  const reset = useCallback(
    (params: Params) => {
      updateFilter({ search: "", ...params });
    },
    [updateFilter],
  );

  return {
    searchQuery,
    currentPage,
    updateSelect,
    updateSearch,
    reset,
  };
};

export default useFilter;
