interface baseVariant {
  opacity?: number;
  duration?: number;
}

interface topLoopVariant extends baseVariant {
  top?: number;
  index: number;
}

interface topVariant extends baseVariant {
  top?: number;
  delay?: number;
}

interface scaleVariant extends baseVariant {
  scale?: number;
  index: number;
}
