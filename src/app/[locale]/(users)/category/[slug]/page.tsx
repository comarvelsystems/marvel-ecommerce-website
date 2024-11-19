import { FC } from "react";
import { Metadata } from "next";
import { Heading } from "@/components";
import SidebarFilterContainer from "@/features/category/sidebar-filter/FilterContainer";
import CategoryProducts from "@/features/category/CategoryProducts";
import { categoryBreadcrumbsSchemaDts } from "@/utils/jsonLd";
import { slugToName } from "@/lib/slugToName";
import CategoryHeader from "@/features/category/CategoryHeader";

interface Props {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `${slugToName(params.slug)} | Marvel Store`,
    description: "",
  };
}

const CategoryPage: FC<Props> = ({ params }) => {
  return (
    <section className='s-padding'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: categoryBreadcrumbsSchemaDts(params.slug),
        }}
      />
      <div className='s-container'>
        <div className='flex items-start'>
          <SidebarFilterContainer />
          <div className='w-full space-y-5 p-0 lg:p-5'>
            <CategoryHeader>
              <Heading className='!text-4xl font-bold'>
                {slugToName(params.slug)}
              </Heading>
            </CategoryHeader>
            <CategoryProducts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
