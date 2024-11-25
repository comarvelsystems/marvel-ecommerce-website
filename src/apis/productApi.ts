import { Product, ProductList } from "@/utils/@types";

interface Params {
  categoryId: number;
  page?: number;
  perPage?: number;
  sort?: string;
  brandIds?: string;
}

export const getProductsForCategoryApi = async ({
  categoryId,
  page = 1,
  perPage = 10,
  sort,
  brandIds,
}: Params): Promise<ProductList | undefined> => {
  try {
    const res = await fetch(
      "https://s.marvel-cloud.com/marvel_store_api/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query ProductsForCategory($categoryId: Int!, $page: Int!, $perPage: Int, $sort: String, $brandIds: String) {
              product_list(filter_category_id: $categoryId, page: $page, perPage: $perPage, sort: $sort, filter_manufacturer_id: $brandIds) {
                total_records
                pagination {
                    page
                    per_page
                    total_pages
                    next_page
                    prev_page
                }
                products {
                    product_id
                    name
                    image
                    price
                    special
                    category_name
                    status
                    sort_order
                    manufacturer_id
                    manufacturer_name
                    quantity
                    stock_status_name
                    stock_status_id
                }
              }
            }`,
          variables: {
            categoryId,
            page,
            perPage,
            sort,
            brandIds,
          },
        }),
      },
    );

    if (!res.ok) {
      throw new Error("server");
    }

    const resData = await res.json();

    if (resData?.errors && resData.errors.length > 0) {
      throw new Error(resData.errors[0].message);
    }

    return resData.data?.product_list;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("server");
    }
    throw new Error("server");
  }
};

export const getLeanProductApi = async (
  productId: number,
  languageId?: number,
): Promise<Product | undefined> => {
  try {
    const response = await fetch(
      "https://s.marvel-cloud.com/marvel_store_api/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query Product($productId: Int!, $languageId: Int) {
              product(product_id: $productId, language_id: $languageId) {
                product_info {
                  name
                  short_description
                  sku
                  image
                  manufacturer_name
                  price
                  category_id
                  category_name
                  images {
                    image
                  }
                }
              }
            }`,
          variables: {
            productId,
            languageId,
          },
        }),
      },
    );

    const resData = await response.json();

    if (resData?.errors && resData.errors.length > 0) {
      throw new Error(resData.errors[0].message);
    }

    return resData.data.product.product_info;
  } catch (error) {
    console.error("Error fetching product data");
  }
};
