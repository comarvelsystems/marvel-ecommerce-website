import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  length?: number;
}

const CategoriesSkeleton: React.FC<Props> = ({ length = 16 }) => {
  return (
    <ul className='grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
      {Array(length)
        .fill(0)
        .map((_, index) => (
          <li key={index} className='relative'>
            <div className='flex flex-col items-center gap-y-5'>
              <Skeleton
                borderRadius={12}
                className='h-full w-full'
                containerClassName='w-full h-full aspect-square'
              />
              <div className='w-full text-center'>
                <Skeleton
                  height={20}
                  width={137}
                  containerClassName='w-full block'
                />
                <Skeleton
                  height={22}
                  width={56}
                  containerClassName='w-full block'
                />
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default CategoriesSkeleton;
