const lightenColor = (hex: string, opacity: number) => {
  hex = hex.replace(/^#/, "");

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const validOpacity = Math.min(Math.max(opacity, 0), 1);

  return `rgba(${r}, ${g}, ${b}, ${validOpacity})`;
};

export default lightenColor;
