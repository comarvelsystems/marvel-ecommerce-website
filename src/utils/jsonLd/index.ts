import { BreadcrumbList, Organization } from "schema-dts";
import { JsonLd } from "@/lib/jsonLd";
// import { Product as ProductItem } from "../@types";

export const organizationSchemaDts = JsonLd<Organization>({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "http://localhost:8080",
  name: "Unique",
  url: "http://localhost:8080",
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
        item: "http://localhost:8080",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: slug.toUpperCase(),
        item: `http://localhost:8080/${slug}`,
      },
    ],
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
