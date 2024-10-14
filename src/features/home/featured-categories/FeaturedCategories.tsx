import Heading from "@/components/Heading";
import FeaturedCategorySlider from "./FeaturedCategoriesSlider";

const FeaturedCategories = () => {
  return (
    <section className='s-padding'>
      <div className='s-container'>
        <div className='space-y-8'>
          <header className='flex flex-col items-start gap-4 xl:flex-row xl:items-center xl:gap-7'>
            <Heading as='h3' className='text-xl sm:text-3xl'>
              Featured Categories
            </Heading>
          </header>
          <FeaturedCategorySlider />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
