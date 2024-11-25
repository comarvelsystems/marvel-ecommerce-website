import Skeleton from "react-loading-skeleton";

const ProductTabsSkeleton = () => {
  return (
    <div className='flex flex-col gap-8 border-y border-border/40 py-6 lg:flex-row lg:items-start lg:py-8'>
      <ul className='flex flex-shrink-0 flex-grow-0 basis-full flex-row flex-wrap gap-3 sm:flex-nowrap lg:sticky lg:top-8 lg:basis-2/6 lg:flex-col lg:gap-8'>
        {Array.from({ length: 3 }).map((_, index) => (
          <li
            key={index}
            className='flex-grow space-y-2 rounded-xl border-x border-y border-border/40 px-8 py-3 lg:rounded-none lg:border-x-0 lg:border-y-0 lg:border-b lg:px-0 lg:py-0 lg:pb-8'
          >
            <div className='h-6 w-full lg:h-9 lg:w-[300px]'>
              <Skeleton
                className='h-full'
                containerClassName='block lg:inline'
              />
            </div>
            <span className='hidden lg:block'>
              <Skeleton height={24} width={150} />
            </span>
          </li>
        ))}
      </ul>
      <div className='basis-full space-y-6 lg:basis-4/6'>
        <div>
          <Skeleton height={20} />
          <Skeleton height={20} width={200} />
        </div>
        <div className='space-y-3'>
          <Skeleton height={20} width={150} />
          <div className='space-y-2'>
            {Array.from({ length: 7 }).map((_, index) => (
              <Skeleton key={index} height={14} width={300} />
            ))}
          </div>
        </div>
        <div className='space-y-3'>
          <Skeleton height={20} width={150} />
          <div className='space-y-2'>
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton height={14} width={300} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabsSkeleton;
