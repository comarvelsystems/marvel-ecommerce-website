import { Product, ReviewList } from "@/utils/@types";

interface ProductApi {
  product: {
    product_info: Product;
  };
  review_list: { total_records: number };
}

interface ReviewApiParams {
  productId: number;
  page?: number;
  perPage?: number;
  search?: string;
  sort?: string;
  languageId?: number;
}

export const getProductApi = async (
  productId: number,
  languageId?: number,
): Promise<ProductApi | undefined> => {
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
            query Product($productId: Int!, $languageId: Int) {
              product(product_id: $productId, language_id: $languageId) {
                product_info {
                  product_id
                  model
                  sku
                  upc
                  quantity
                  minimum
                  stock_status_id
                  stock_status_name
                  image
                  manufacturer_id
                  manufacturer_name
                  shipping
                  price
                  special
                  tax_class_id
                  rating
                  status
                  name
                  description
                  short_description
                  category_id
                  category_name
                  tax
                  images {
                      product_image_id
                      product_id
                      image
                      sort_order
                  }
                  discounts {
                      quantity
                      price
                  }
                  related {
                      product_id
                      thumb
                      name
                      description
                      price
                      special
                  }
                  options {
                    product_option_id
                    option_id
                    name
                    type
                    value
                    required
                    product_option_value {
                      product_option_value_id
                      option_value_id
                      name
                      image
                      price
                      price_prefix
                    }
                  }
                  attributes {
                    attribute_group_id
                    name
                    attribute {
                      attribute_id
                      name
                      text
                    }
                  }
                  ratings_list {
                    rating
                    count
                    percentage
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

    if (!res.ok) {
      throw new Error("server");
    }

    const resData = await res.json();

    if (resData?.errors && resData.errors.length > 0) {
      throw new Error(resData.errors[0].message);
    }

    return resData.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("server");
    }
    throw new Error("server");
  }
};

export const getReviewsApi = async ({
  productId,
  page = 1,
  perPage = 2,
  search,
  sort,
  languageId,
}: ReviewApiParams): Promise<ReviewList | undefined> => {
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
            query Reviews($productId: Int!, $page: Int!, $perPage: Int, $languageId: Int, $search: String, $sort: String) {
              review_list(product_id: $productId, page: $page, per_page: $perPage, language_id: $languageId, filter_search: $search, sort_type: $sort) {
                total_records
                pagination {
                  page
                  per_page
                  total_pages
                  next_page
                  prev_page
                }
                reviews {
                  author
                  text
                  rating
                  date_added
                }
              }
            }`,
          variables: {
            productId,
            page,
            perPage,
            languageId,
            search,
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

    return resData.data?.review_list;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("server");
    }
    throw new Error("server");
  }
};
