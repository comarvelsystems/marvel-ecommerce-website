import Skeleton from "react-loading-skeleton";
import React, { FC } from "react";

interface Props {
  length?: number;
}

const SidebarFilterSkeleton: FC<Props> = ({ length = 8 }) => {
  return Array(length)
    .fill(0)
    .map((_, index) => (
      <div key={index} className='flex items-center justify-between gap-4'>
        <Skeleton width={94} height={22} />
        <Skeleton
          width={22}
          height={22}
          borderRadius={100}
          className='flex-shrink-0'
        />
      </div>
    ));
};

export default SidebarFilterSkeleton;
