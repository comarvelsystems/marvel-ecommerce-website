import React from "react";
import StarIcon from "./StarIcon";

interface Props {
  score: number;
  size?: number;
}
type colors = "red" | "orange600" | "orange400" | "lime" | "green";

const RatingStars: React.FC<Props> = ({ score, size = 14 }) => {
  const colors = ["red", "orange600", "orange400", "lime", "green"];

  return (
    <>
      {Array.from({ length: 5 })
        .fill(0)
        .map((_, index) => {
          const i = index + 1;
          const starScore = i <= score ? colors[score - 1] : "inActive";
          return (
            <StarIcon size={size} key={index} type={starScore as colors} />
          );
        })}
    </>
  );
};

export default RatingStars;
