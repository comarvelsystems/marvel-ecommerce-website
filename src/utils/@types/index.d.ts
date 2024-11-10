export interface Pagination {
  page: number;
  per_page: number;
  total_pages: number;
  next_page: number;
  prev_page: number;
}

export interface Category {
  category_id?: number;
  name: string;
  slug: string;
  image: string;
  status: number;
  sort_order?: number;
  parent_id?: number;
  top?: number;
  column?: number;
  description?: string;
  total_products: number;
}

export interface Categories {
  total_records: number;
  pagination: Pagination;
  categories: Category[];
}
