interface baseVariant {
  opacity?: number;
}

interface topLoopVariant extends baseVariant {
  top?: number;
  index: number;
}

interface topVariant extends baseVariant {
  top?: number;
  delay?: number;
}
