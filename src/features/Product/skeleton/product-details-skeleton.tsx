import Skeleton from "react-loading-skeleton";

const ProductDetailsSkeleton = () => {
  return (
    <div className='flex-1 space-y-6'>
      <Skeleton height={30} />
      <Skeleton height={30} width={200} />
      <div className='product-identifier text-md divide-divide flex items-center divide-x'>
        {Array.from({ length: 3 }).map((_, index) => (
          <span key={index} className='block w-28 md:w-36'>
            <Skeleton height={20} />
          </span>
        ))}
      </div>
      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-1'>
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} height={14} width={14} />
          ))}
        </div>
        <Skeleton height={14} width={70} />
      </div>
      <div>
        <Skeleton height={36} width={163} />
      </div>
      <div>
        <Skeleton height={36} width={95} />
      </div>
      <div className='grid w-full grid-cols-4 gap-4'>
        <div className='col-span-1'>
          <Skeleton height={58} />
        </div>
        <div className='col-span-2'>
          <Skeleton height={58} />
        </div>
        <div className='col-span-1'>
          <Skeleton height={58} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
