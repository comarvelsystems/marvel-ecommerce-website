import ProductSlider from "@/features/Product/ProductSlider";
import ProductDetails from "@/features/Product/details/ProductDetails";
import SidebarLeft from "@/features/Product/sidebar-left/SidebarLeft";

const ProductPage = () => {
  return (
    <section className='bg-muted/50'>
      <div className='s-container s-padding bg-white'>
        <div className='flex flex-col gap-8 xl:flex-row'>
          <div className='flex flex-col gap-8 lg:flex-[70%] lg:flex-shrink-0 lg:flex-grow-0 lg:flex-row'>
            <ProductSlider />
            <ProductDetails />
          </div>
          <SidebarLeft />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
