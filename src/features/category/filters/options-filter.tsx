import PriceFilter from "./price-filter";
import CategoryFilter from "./category-filter";
import BrandFilter from "./brand-filter";
// import FilterSubCategories from "./FilterSubCategories";
// import ReviewsFilter from "./reviews-filter";

const OptionsFilter = () => {
  return (
    <>
      <CategoryFilter />
      <BrandFilter />
      {/* <FilterSubCategories /> */}
      <PriceFilter />
      {/* <ReviewsFilter /> */}
    </>
  );
};

export default OptionsFilter;
