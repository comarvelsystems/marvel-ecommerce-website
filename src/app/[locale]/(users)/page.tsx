import React from "react";
import Banner from "@/features/home/banner/Banner";
import FeaturedCategories from "@/features/home/featured-categories/FeaturedCategories";
import Products from "@/features/home/Products";
// import ProductSections from "@/features/home/product-sections/ProductSections";

const HomePage = () => {
  return (
    <>
      {/* <Slider /> */}
      <FeaturedCategories />
      <Banner />
      <Products />
      <Banner />
      <Products />
      <Products />
      {/* <Banner />
      <ProductSections /> */}
    </>
  );
};

export default HomePage;
