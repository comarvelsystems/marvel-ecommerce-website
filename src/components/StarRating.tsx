"use client";

import { useState } from "react";
import StarIcon from "./StarIcon";

const StarRating = () => {
  const [rate, setRate] = useState(0);
  const [rateHover, setRateHover] = useState(0);

  const handleClick = (rate: number) => {
    setRate(rate);
  };

  const colors = ["red", "orange600", "orange400", "lime", "green"] as const;

  return (
    <div className='flex items-center'>
      {Array(5)
        .fill(0)
        .map((_, index) => {
          const itemIndex = index + 1;

          const color =
            rateHover > rate ? colors[rateHover - 1] : colors[rate - 1];
          const isActive =
            itemIndex <= rate || (rateHover > rate && itemIndex <= rateHover);

          const hoverStyle =
            itemIndex > rate ? `hover:text-${colors[rateHover - 1]}` : "";

          return (
            <div
              key={index}
              onClick={() => handleClick(itemIndex)}
              onMouseEnter={() => setRateHover(itemIndex)}
              onMouseLeave={() => setRateHover(0)}
              className={`cursor-pointer ${hoverStyle}`}
            >
              <StarIcon
                size={24}
                type={isActive ? color : "inActive"}
                isHover={rateHover > rate && itemIndex > rate}
                hoverStyle={hoverStyle}
              />
            </div>
          );
        })}
    </div>
  );
};

export default StarRating;
