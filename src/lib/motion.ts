export const topLoopVariant = ({
  index,
  top = 50,
  opacity = 0,
  duration = 0.5,
}: topLoopVariant) => ({
  hidden: {
    top,
    opacity,
  },
  show: {
    top: 0,
    opacity: 1,
    transition: { duration, delay: index * 0.1 },
  },
});

export const scaleVariant = ({
  index,
  scale = 1.1,
  opacity = 0,
  duration = 0.5,
}: scaleVariant) => ({
  hidden: {
    scale: index <= 5 ? scale : 1,
    opacity: index <= 5 ? opacity : 1,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration, delay: index <= 5 ? index * 0.1 : 0 },
  },
});

export const topVariant = ({
  top = 50,
  opacity = 0,
  duration = 0.5,
  delay = 0.1,
}: topVariant) => ({
  hidden: {
    top,
    opacity,
  },
  show: (index: number) => ({
    top: 0,
    opacity: 1,
    transition: { duration, delay: index ? index * delay : delay },
  }),
});
