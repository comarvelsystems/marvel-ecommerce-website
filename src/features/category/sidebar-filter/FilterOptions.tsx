// import FilterSubCategories from "./FilterSubCategories";
import FilterPrice from "./FilterPrice";
// import FilterNewArrival from "./FilterNewArrival";
import FilterReviews from "./FilterReviews";
import FilterCategories from "./FilterCategories";
import FilterBrands from "./FilterBrands";

const FilterOptions = () => {
  return (
    <>
      <FilterCategories />
      <FilterBrands />
      {/* <FilterSubCategories /> */}
      <FilterPrice />
      {/* <FilterNewArrival /> */}
      <FilterReviews />
    </>
  );
};

export default FilterOptions;
