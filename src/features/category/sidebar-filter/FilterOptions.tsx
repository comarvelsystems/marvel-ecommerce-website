import FilterSubCategories from "./FilterSubCategories";
import FilterPrice from "./FilterPrice";
import FilterNewArrival from "./FilterNewArrival";
import FilterReviews from "./FilterReviews";

const FilterOptions = () => {
  return (
    <>
      <FilterSubCategories />
      <FilterPrice />
      <FilterNewArrival />
      <FilterReviews />
    </>
  );
};

export default FilterOptions;
