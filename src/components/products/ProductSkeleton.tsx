import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductSkeleton = () => {
  return (
    <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5'>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className='overflow-hidden rounded-xl border border-border/70'
          >
            <div className='aspect-[4/5] w-full md:aspect-[3/4] lg:aspect-[2/2]'>
              <div className='relative h-full w-full'>
                <Skeleton
                  className='absolute inset-0 h-full w-full object-contain'
                  containerClassName='bg-[#ebebeb]'
                />
              </div>
            </div>

            <div className='relative z-50 bg-background p-2 sm:p-4'>
              <div className='space-y-2.5'>
                <Skeleton width={80} height={20} />
                <div className='space-y-1'>
                  <Skeleton width={170} height={20} />
                  <Skeleton width={170} height={20} />
                </div>
                <div className='flex flex-col items-start justify-between gap-y-2 sm:flex-row sm:items-center'>
                  <Skeleton width={50} height={24} />
                  <Skeleton width={52} height={40} />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductSkeleton;
