import CategoryContainer from "@/features/category/CategoryContainer";
import SidebarFilterContainer from "@/features/category/sidebar-filter/FilterContainer";

const Category = ({ params }: { params: { category: string } }) => {
  return (
    <section className='s-padding'>
      <div className='s-container'>
        <div className='flex items-start'>
          <SidebarFilterContainer />
          <CategoryContainer title={params.category} />
        </div>
      </div>
    </section>
  );
};

export default Category;
