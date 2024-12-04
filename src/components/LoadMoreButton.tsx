"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { Loader2, MoveDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Props {
  handler: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isFetching: boolean;
}

const LoadMoreButton: FC<Props> = ({
  handler,
  hasNextPage,
  isFetchingNextPage,
}) => {
  const t = useTranslations("globals.buttons");

  return (
    <>
      {hasNextPage && (
        <div className='w-full text-center'>
          <Button
            onClick={() => handler()}
            disabled={!hasNextPage || isFetchingNextPage}
            className={cn(
              "rtl:hover:before-left-0 relative h-[50px] gap-6 rounded-full border-primary p-0 pl-5 pr-[5px] text-base text-primary !opacity-100 before:absolute before:right-[5px] before:top-1/2 before:size-10 before:-translate-y-1/2 before:rounded-full before:bg-primary before:transition-all before:content-[attr(before)] hover:text-background hover:before:right-0 hover:before:h-full hover:before:w-full hover:before:translate-x-0 rtl:pl-[5px] rtl:pr-5 rtl:before:left-[5px] rtl:before:right-auto rtl:hover:before:left-0 rtl:hover:before:right-auto",
              !hasNextPage && "hidden",
            )}
            size='lg'
            variant={"outline"}
          >
            <span className='z-1 relative'>{hasNextPage && t("loadMore")}</span>
            <span className='flex size-10 items-center justify-center rounded-full text-background'>
              {isFetchingNextPage ? (
                <Loader2 size={16} className='z-1 relative animate-spin' />
              ) : (
                <MoveDown size={16} className='z-1 relative' />
              )}
            </span>
          </Button>
        </div>
      )}
    </>
  );
};

export default LoadMoreButton;
