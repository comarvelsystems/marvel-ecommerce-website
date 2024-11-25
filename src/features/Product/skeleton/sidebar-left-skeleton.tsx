import Skeleton from "react-loading-skeleton";

const SidebarLeftSkeleton = () => {
  return (
    <div className='rounded-md border-t border-border/40 py-2 xl:border-l xl:border-t-0 xl:rtl:border-r'>
      <ul className='divide-y divide-border/50 rtl:divide-y-reverse'>
        {Array.from({ length: 6 }).map((_, index) => (
          <li key={index} className='flex items-center gap-3 p-4'>
            <div className='flex flex-shrink-0 items-center justify-center rounded-full'>
              <Skeleton height={40} width={40} borderRadius={100} />
            </div>
            <Skeleton height={27} width={200} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarLeftSkeleton;
