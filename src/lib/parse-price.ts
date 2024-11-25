const parsePrice = (price: string) => {
  return parseFloat(price?.replace(/[^\d.]/g, ""));
};

export default parsePrice;
