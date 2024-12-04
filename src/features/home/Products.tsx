import Heading from "@/components/Heading";
import ProductSlider from "@/components/products/ProductSlider";
import { useTranslations } from "next-intl";

const Products = () => {
  const t = useTranslations("dummy");

  return (
    <section className='s-padding'>
      <div className='s-container'>
        <div className='space-y-8'>
          <header>
            <Heading as='h3' className='text-xl sm:text-3xl'>
              {t("popular-products")}
            </Heading>
          </header>
          <ProductSlider />
        </div>
      </div>
    </section>
  );
};

export default Products;
