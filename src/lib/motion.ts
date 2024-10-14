export const topLoopVariant = ({
  index,
  top = 50,
  opacity = 0,
}: topLoopVariant) => ({
  hidden: {
    top,
    opacity,
  },
  show: {
    top: 0,
    opacity: 1,
    transition: { delay: index * 0.1 },
  },
});

export const scaleVariant = () => ({
  hidden: {
    scale: 1.1,
    opacity: 0,
  },
  show: (index: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: index ? index * 0.1 : 0 },
  }),
});

export const opacityVariant = () => ({
  hidden: {
    opacity: 0,
  },
  show: (index: number) => ({
    opacity: 1,
    transition: { delay: index ? index * 0.1 : 0 },
  }),
});

export const topVariant = ({
  top = 50,
  opacity = 0,
  delay = 0.1,
}: topVariant) => ({
  hidden: {
    top,
    opacity,
  },
  show: (index: number) => ({
    top: 0,
    opacity: 1,
    transition: {
      delay: index ? index * delay : delay,
    },
  }),
});
