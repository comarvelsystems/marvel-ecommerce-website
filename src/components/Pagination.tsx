"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Paginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  totalPages: number;
}

const Pagination: React.FC<Props> = ({ totalPages }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = Number(searchParams.get("page")) - 1;

  const handleClick = (event: any) => {
    const param = new URLSearchParams(searchParams);
    param.set("page", event.selected + 1);
    router.push(`?page=${event.selected + 1}`);
  };

  useEffect(() => {
    const currentPage = searchParams.get("page") || 1;
    router.push(`?page=${currentPage}`);
  }, [router, searchParams]);

  useEffect(() => {
    if (currentPage + 1 > totalPages || currentPage <= 0) {
      router.push(`?page=1`);
    }
  }, [currentPage, router, totalPages]);

  if (!totalPages || totalPages <= 1) {
    return null;
  }

  return (
    <Paginate
      className='mt-6 flex w-full flex-wrap justify-center gap-2 border-t border-border/40 pt-6 [direction:ltr]'
      pageLinkClassName='pagination-btn px-3 min-h-8'
      activeLinkClassName='bg-primary text-background border-primary'
      breakLabel='...'
      breakClassName='text-foreground text-md'
      nextLabel={<ChevronRight />}
      nextLinkClassName={cn(
        "pagination-btn size-8",
        currentPage + 1 >= totalPages && "disabled",
      )}
      previousLabel={<ChevronLeft />}
      previousLinkClassName={cn(
        "pagination-btn size-8",
        currentPage === 0 && "disabled",
      )}
      onPageChange={handleClick}
      pageRangeDisplayed={5}
      pageCount={totalPages}
      forcePage={currentPage}
    />
  );
};

export default Pagination;
