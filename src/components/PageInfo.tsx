"use client";

import { useTranslations } from "next-intl";
import { FC, ReactNode } from "react";

interface Props {
  count: number;
  totalRecords: number;
  children?: ReactNode;
}

const PageInfo: FC<Props> = ({ count, totalRecords, children }) => {
  const t = useTranslations("globals");

  return (
    <div className='space-y-5'>
      <div className='grid-cols-center grid- mt-12 grid w-full items-center gap-4'>
        <div className='border-b border-border' />
        <p className='text-center text-sm font-light text-muted-foreground'>
          {count} {t("from")} {totalRecords}
        </p>
        <div className='border-b border-border' />
      </div>
      {children}
    </div>
  );
};

export default PageInfo;
