import { FC } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductContainer from "@/features/Product/product-container";
import parsePrice from "@/lib/parse-price";
import { productBreadcrumbsSchemaDts, productSchemaDts } from "@/utils/jsonLd";
import { getLeanProductApi } from "@/apis/productApi";

interface Props {
  searchParams: {
    pid: string;
  };
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const productId = Number(searchParams.pid);
  const product = await getLeanProductApi(productId);

  return {
    title: `${product?.name}| Marvel Store`,
    description: product?.short_description,
  };
}

const ProductPage: FC<Props> = async ({ searchParams }) => {
  const productId = Number(searchParams.pid);

  const product = await getLeanProductApi(productId);

  if (!product) {
    return notFound();
  }

  return (
    <section className='s-padding'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: productBreadcrumbsSchemaDts(
            product?.category_name.toLowerCase(),
            product?.category_id,
          ),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: productSchemaDts({
            name: product?.name,
            sku: product?.sku,
            images: [
              `https://s.marvel-cloud.com/image/${product?.image}`,
              ...product?.images.map(
                image => `https://s.marvel-cloud.com/image/${image?.image}`,
              ),
            ],
            description: product?.description,
            brand: product?.manufacturer_name,
            url: "",
            price: parsePrice(product?.price),
          }),
        }}
      />
      <div className='s-container'>
        <ProductContainer />
      </div>
    </section>
  );
};

export default ProductPage;
