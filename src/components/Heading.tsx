import clsx from "clsx";

interface Props {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align?: "right" | "center" | "left";
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

const Heading: React.FC<Props> = ({
  as = "h1",
  align,
  className,
  children,
  ...props
}) => {
  const Element = as;

  return (
    <Element
      role='heading'
      {...props}
      className={clsx(
        {
          "text-5xl": as === "h1",
          "text-4xl": as === "h2",
          "text-3xl": as === "h3",
          "text-2xl": as === "h4",
          "text-xl": as === "h5",
          "text-base": as === "h6",
          "text-right": align === "right",
          "text-center": align === "center",
          "text-left": align === "left",
        },
        `font-bold capitalize leading-tight ${className}`,
      )}
    >
      {children}
    </Element>
  );
};

export default Heading;
