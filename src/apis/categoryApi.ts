import { Categories } from "@/utils/@types";

export const getCategories = async (
  page = 1,
  perPage = 2,
): Promise<Categories | undefined> => {
  try {
    const res = await fetch(
      "https://s.marvel-cloud.com/marvel_store_ap/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query CategoryList($page: Int!, $perPage: Int!) {
              category_list(page: $page, per_page: $perPage) {
                total_records
                pagination {
                  page
                  per_page
                  total_pages
                  next_page
                  prev_page
                }
                categories {
                  category_id
                  name
                  slug
                  image
                  total_products
                  status
                  sort_order
                }
              }
            }`,
          variables: {
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
    return resData.data?.category_list;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("server");
    }
    throw new Error("server");
  }
};
