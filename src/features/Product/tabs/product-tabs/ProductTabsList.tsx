import ProductTabsListItem from "./ProductTabsListItem";

const TABS = [
  {
    id: "1",
    title: "Product Details",
    description: "View product details.",
    label: "details",
  },
  {
    id: "2",
    title: "Product Features",
    description: "View product features.",
    label: "features",
  },
  {
    id: "3",
    title: "Product Reviews",
    description: "View product reviews.",
    label: "reviews",
  },
];

const ProductTabsList = () => {
  return (
    <ul className='flex flex-shrink-0 flex-grow-0 basis-full flex-row flex-wrap gap-3 sm:flex-nowrap lg:sticky lg:top-8 lg:basis-2/6 lg:flex-col lg:gap-8'>
      {TABS.map((tab, index) => (
        <ProductTabsListItem key={tab.id} {...tab} index={index} />
      ))}
    </ul>
  );
};

export default ProductTabsList;
