/* eslint-disable react/jsx-no-literals */

import StarIcon from "@/components/StarIcon";
import { cn } from "@/lib/utils";
import useProductStore from "../../store/use-product-store";

type colors = "green" | "lime" | "orange400" | "orange600" | "red";

const ProductReviewsProgress = () => {
  const ratingsList = useProductStore(state => state.product.ratings_list);

  const colors = ["red", "orange600", "orange400", "lime", "green"];

  return (
    <div className='space-y-1'>
      {ratingsList
        ?.sort((a, b) => b.rating - a.rating)
        .map(({ rating, percentage }, index) => {
          return (
            <div key={index} className='flex items-center gap-2'>
              <div className='flex items-center gap-0.5 text-sm font-bold'>
                {rating}
                <StarIcon type={colors[rating - 1] as colors} />
              </div>
              <div className='h-2.5 w-full rounded-full bg-muted'>
                <div
                  className={cn(
                    "h-2.5 rounded-full",
                    colors[rating - 1] === "green" && "bg-green-600",
                    colors[rating - 1] === "lime" && "bg-lime-500",
                    colors[rating - 1] === "orange400" && "bg-orange-400",
                    colors[rating - 1] === "orange600" && "bg-orange-600",
                    colors[rating - 1] === "red" && "bg-red-600",
                  )}
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <div className='mb-1 text-sm font-bold'>{percentage}%</div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductReviewsProgress;
