import { cn } from "@/lib/utils";

interface Props {
  type?: "inActive" | "green" | "lime" | "orange400" | "orange600" | "red";
  size?: number | string;
  isHover?: boolean;
  hoverStyle?: string;
}

const StarIcon: React.FC<Props> = ({
  type = "green",
  size = 14,
  isHover = false,
  hoverStyle,
}) => {
  const variants = {
    inActive: "text-gray-300",
    green: "text-green-600",
    lime: "text-lime-500",
    orange400: "text-orange-400",
    orange600: "text-orange-600",
    red: "text-red-600",
  };

  return (
    <svg
      className={cn(variants[type], isHover && hoverStyle)}
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 22 20'
      width={size}
      height={size}
    >
      <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
    </svg>
  );
};

export default StarIcon;
