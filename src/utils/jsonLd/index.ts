import { BreadcrumbList, Organization, Product } from "schema-dts";
import { JsonLd } from "@/lib/jsonLd";
// import { Product as ProductItem } from "../@types";

interface ProductParams {
  name: string;
  sku: string;
  images: string[];
  description: string;
  brand: string;
  url: string;
  price: number;
}

export const organizationSchemaDts = JsonLd<Organization>({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "http://localhost:3000",
  name: "Unique",
  url: "http://localhost:3000",
  logo: "",
});

export const categoryBreadcrumbsSchemaDts = (slug: string) =>
  JsonLd<BreadcrumbList>({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "http://localhost:3000",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: slug.toUpperCase(),
        item: `http://localhost:3000/en/${slug}`,
      },
    ],
  });

export const categoriesBreadcrumbsSchemaDts = () =>
  JsonLd<BreadcrumbList>({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "http://localhost:3000",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "categories",
        item: `http://localhost:3000/en/categories`,
      },
    ],
  });

export const productBreadcrumbsSchemaDts = (
  categoryName: string,
  categoryId: number,
) =>
  JsonLd<BreadcrumbList>({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "http://localhost:3000",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryName,
        item: `http://localhost:3000/en/category/${categoryName}?cid=${categoryId}`,
      },
    ],
  });

export const productSchemaDts = ({
  name,
  sku,
  images,
  description,
  brand,
  url,
  price,
}: ProductParams) =>
  JsonLd<Product>({
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    sku,
    image: images,
    description,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "SAR",
      price,
    },
  });

// export const JsonLdCategory = (
//   name: string,
//   desc: string,
//   products: ProductItem[],
// ) => {
//   return JsonLd<any>({
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     name,
//     description: desc,
//     url: `http://localhost:8080/${name}`,
//     itemListElement: products.map(
//       ({ name, price, image, sku, manufacturer_name, stock_status_name }) => ({
//         "@type": "Product",
//         name,
//         sku: sku as string,
//         image,
//         brand: {
//           "@type": "Brand",
//           name: manufacturer_name as string,
//         },
//         offers: {
//           "@type": "Offer",
//           price,
//           priceCurrency: "SAR",
//           url: `http://localhost:8080/${name}`,
//           availability: stock_status_name as string,
//         },
//       }),
//     ),
//   });
// };
