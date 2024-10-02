import RecentlyAdded from "./Recently/RecentlyAdded";
import Recommended from "./Recommended/Recommended";
import TopSelling from "./top-selling/TopSelling";
import Trending from "./Trending/Trending";

const ProductSections = () => {
  return (
    <section className='s-padding'>
      <div className='s-container'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4'>
          <TopSelling />
          <Trending />
          <RecentlyAdded />
          <Recommended />
        </div>
      </div>
    </section>
  );
};

export default ProductSections;
