import { BrandList } from "@/utils/@types";

interface Params {
  categoryId: number;
  page?: number;
  perPage?: number;
  sort?: string;
}

export const getBrandsApi = async ({
  categoryId,
  page = 1,
  perPage = 10,
}: Params): Promise<BrandList | undefined> => {
  try {
    const res = await fetch(
      "https://s.marvel-cloud.com/api/marvel_store_api/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query Manufacturer($categoryId: Int!, $page: Int!, $perPage: Int) {
              manufacturer_list(filter_category_id: $categoryId, page: $page, per_page: $perPage) {
                total_records
                pagination {
                    page
                    per_page
                    total_pages
                    next_page
                    prev_page
                }
                manufacturers {
                  manufacturer_id
                  name
                  image
                  products_count
                  sort_order
                }
              }
            }`,
          variables: {
            categoryId,
            page,
            perPage,
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

    return resData.data?.manufacturer_list;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("server");
    }
    throw new Error("server");
  }
};
