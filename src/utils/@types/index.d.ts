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

export interface Product {
  product_id: number;
  name: string;
  image: string;
  price: string;
  special: string;
  description: string;
  short_description: string;
  category_id: number;
  category_name: string;
  status: string;
  store_id: number;
  master_id: number;
  model: string;
  sku: string;
  upc: string;
  ean: string;
  jan: string;
  isbn: string;
  mpn: string;
  location: string;
  variant: string;
  override: string;
  quantity: number;
  stock_status_id: number;
  stock_status_name: string;
  manufacturer_id: number;
  manufacturer_name: string;
  shipping: string;
  points: number;
  tax_class_id: number;
  date_available: string;
  weight: string;
  weight_class_id?: number;
  length: string;
  width: string;
  height: string;
  length_class_id: number;
  subtract: string;
  minimum: number;
  rating: number;
  sort_order: number;
  date_added: string;
  date_modified: string;
  tax: number;
  images: {
    product_id: number;
    product_image_id: number;
    image: string;
    sort_order: number;
  }[];
  discounts: {
    quantity: number;
    price: string;
  }[];
  related: {
    product_id: number;
    thumb: string;
    name: string;
    description: string;
    price: string;
    special: string;
    tax: string;
    minimum: string;
    rating: string;
  }[];
  options: {
    product_option_id: number;
    option_id: number;
    name: string;
    type: string;
    value: string;
    required: string;
    product_option_value: {
      product_option_value_id: number;
      option_value_id: number;
      name: string;
      image: string;
      price: string;
      price_prefix: string;
    }[];
  }[];
  attributes: {
    attribute_group_id: number;
    name: string;
    attribute: {
      attribute_id: number;
      name: string;
      text: string;
    }[];
  }[];
  ratings_list: {
    rating: number;
    count: number;
    percentage: string;
  }[];
}

export interface Brand {
  manufacturer_id: number;
  name: string;
  products_count: number;
  image?: string;
  sort_order?: number;
}

export interface Review {
  author: string;
  text: string;
  rating: number;
  date_added: string;
}

export interface ProductList {
  total_records: number;
  pagination: Pagination;
  products: Product[];
}

export interface BrandList {
  total_records: number;
  pagination: Pagination;
  manufacturers: Brand[];
}

export interface ProductInfo extends Product {
  total_records: number;
}

export interface ReviewList {
  total_records: number;
  pagination: Pagination;
  reviews: Review[];
}
