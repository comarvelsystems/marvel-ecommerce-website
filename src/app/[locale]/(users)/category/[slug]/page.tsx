import { FC } from "react";
import { Metadata } from "next";
import { categoryBreadcrumbsSchemaDts } from "@/utils/jsonLd";
import { slugToName } from "@/lib/slugToName";
import CategoryContainer from "@/features/category/category-container";

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
    <section>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: categoryBreadcrumbsSchemaDts(params.slug),
        }}
      />
      <div className='s-container'>
        <CategoryContainer pageTitle={slugToName(params.slug)} />
      </div>
    </section>
  );
};

export default CategoryPage;
