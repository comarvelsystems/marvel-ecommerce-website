import FilterSubCategories from "./FilterSubCategories";
import FilterPrice from "./FilterPrice";
import FilterNewArrival from "./FilterNewArrival";
import FilterReviews from "./FilterReviews";
import FilterCategories from "./FilterCategories";

const FilterOptions = () => {
  return (
    <>
      <FilterCategories />
      <FilterSubCategories />
      <FilterPrice />
      <FilterNewArrival />
      <FilterReviews />
    </>
  );
};

export default FilterOptions;
