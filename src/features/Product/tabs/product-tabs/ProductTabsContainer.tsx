import ProductTabsList from "./ProductTabsList";
import ProductTabsContent from "./ProductTabsContent";

const ProductTabsContainer = () => {
  return (
    <div className='product-tabs flex flex-col gap-8 border-y border-border/40 py-6 lg:flex-row lg:items-start lg:py-8'>
      <ProductTabsList />
      <ProductTabsContent />
    </div>
  );
};

export default ProductTabsContainer;
