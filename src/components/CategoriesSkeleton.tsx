import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  length?: number;
}

const CategoriesSkeleton: React.FC<Props> = ({ length = 16 }) => {
  return (
    <ul className='grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8'>
      {Array(length)
        .fill(0)
        .map((_, index) => (
          <li key={index} className='relative'>
            <div className='flex flex-col items-center gap-y-6'>
              <Skeleton height={144} width={144} borderRadius={12} />
              <div className='text-center'>
                <Skeleton height={20} width={137} />
                <span className='text-xs text-muted-foreground'>
                  <Skeleton height={20} width={43} />
                </span>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default CategoriesSkeleton;
