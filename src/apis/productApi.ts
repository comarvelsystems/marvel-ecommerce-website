import { ProductList } from "@/utils/@types";

interface Params {
  categoryId: number;
  page?: number;
  perPage?: number;
  sort?: string;
}

export const getProductsForCategoryApi = async ({
  categoryId,
  page = 1,
  perPage = 10,
  sort,
}: Params): Promise<ProductList | undefined> => {
  try {
    const res = await fetch(
      "https://s.marvel-cloud.com/marvel_store_api/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 2 },
        body: JSON.stringify({
          query: `
            query ProductsForCategory($categoryId: Int!, $page: Int!, $perPage: Int, $sort: String) {
              product_list(filter_category_id: $categoryId, page: $page, perPage: $perPage, sort: $sort) {
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
                    stock_status_name
                    image
                    manufacturer_id
                    manufacturer_name
                    price
                    special
                    sort_order
                    status
                    name
                    category_name
                    stock_status_id
                }
              }
            }`,
          variables: {
            categoryId,
            page,
            perPage,
            sort,
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
