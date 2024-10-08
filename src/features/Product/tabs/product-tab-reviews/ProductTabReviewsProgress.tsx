import StarIcon from "@/components/StarIcon";
import { cn } from "@/lib/utils";

interface ProgressesBarState {
  id: string;
  number: number;
  progress: number;
  color: "green" | "lime" | "orange400" | "orange600" | "red";
}

// TODO: replace with real data
const PROGRESSES_BAR: ProgressesBarState[] = [
  {
    id: "1",
    number: 5,
    progress: 80,
    color: "green",
  },
  {
    id: "2",
    number: 4,
    progress: 10,
    color: "lime",
  },
  {
    id: "3",
    number: 3,
    progress: 3,
    color: "orange400",
  },
  {
    id: "4",
    number: 2,
    progress: 1,
    color: "orange600",
  },
  {
    id: "5",
    number: 1,
    progress: 6,
    color: "red",
  },
];

const ProductTabReviewsProgress = () => {
  return (
    <div className='space-y-1'>
      {PROGRESSES_BAR.map(({ id, number, progress, color }) => {
        return (
          <div key={id} className='flex items-center gap-2'>
            <div className='flex items-center gap-0.5 text-sm font-bold'>
              {number}
              <StarIcon type={color} />
            </div>
            <div className='h-2.5 w-full rounded-full bg-muted'>
              <div
                className={cn(
                  "h-2.5 rounded-full",
                  color === "green" && "bg-green-600",
                  color === "lime" && "bg-lime-500",
                  color === "orange400" && "bg-orange-400",
                  color === "orange600" && "bg-orange-600",
                  color === "red" && "bg-red-600",
                )}
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className='mb-1 text-sm font-bold'>80%</div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductTabReviewsProgress;
