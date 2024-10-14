import Heading from "@/components/Heading";
import CategoriesContainer from "@/features/categories/CategoriesContainer";

const Categories = () => {
  return (
    <section className='s-padding'>
      <div className='s-container'>
        <Heading as='h1' className='mb-8 !text-2xl'>
          Categories
        </Heading>
        <CategoriesContainer />
      </div>
    </section>
  );
};

export default Categories;
