import Skeleton from "react-loading-skeleton";

const SliderSkeleton = () => {
  return (
    <div className='h-auto space-y-3 overflow-hidden rounded-xl lg:h-[600px] lg:w-[381px] xxl:w-[422px]'>
      <Skeleton className='h-96 md:h-[422px]' />
      <div className='mt-3 grid grid-cols-4 gap-3'>
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className='h-16 md:h-[96px]' />
        ))}
      </div>
    </div>
  );
};

export default SliderSkeleton;
