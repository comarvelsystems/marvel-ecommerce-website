import RelatedProduct from "@/components/RelatedProduct";
import ProductSlider from "@/features/Product/ProductSlider";
import ProductDetails from "@/features/Product/details/ProductDetails";
import SidebarLeft from "@/features/Product/sidebar-left/SidebarLeft";
import ProductTabsContainer from "@/features/Product/tabs/product-tabs/ProductTabsContainer";

const ProductPage = () => {
  return (
    <section className='s-padding'>
      <div className='s-container'>
        <div className='space-y-8'>
          <div className='xl:space-y-8'>
            <div className='flex flex-col gap-8 xl:flex-row'>
              <div className='flex flex-col gap-8 lg:flex-[70%] lg:flex-shrink-0 lg:flex-grow-0 lg:flex-row'>
                <ProductSlider />
                <ProductDetails />
              </div>
              <SidebarLeft />
            </div>
            <ProductTabsContainer />
          </div>
          <RelatedProduct />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
