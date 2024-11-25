import React from "react";
import Skeleton from "react-loading-skeleton";

const ReviewsListSkeleton = () => {
  return (
    <ul className='divide-y divide-border/40'>
      {Array.from({ length: 3 }).map((_, index) => (
        <li key={index} className='py-6'>
          <div>
            <div className='flex items-start gap-3'>
              <Skeleton height={40} width={40} borderRadius={100} />
              <div className='space-y-0.5'>
                <Skeleton height={20} width={100} />
                <Skeleton height={16} width={63} />
              </div>
              <div className='flex items-center gap-x-1'>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton key={index} height={14} width={14} />
                ))}
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <Skeleton height={18} />
            <Skeleton height={18} />
            <Skeleton height={18} width={200} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsListSkeleton;
