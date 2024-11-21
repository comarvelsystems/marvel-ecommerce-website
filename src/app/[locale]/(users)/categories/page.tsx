import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import CategoriesContainer from "@/features/categories/categories-container";
import { Heading } from "@/components";
import { categoriesBreadcrumbsSchemaDts } from "@/utils/jsonLd";

export const metadata: Metadata = {
  title: "Categories | Marvel Store",
  description: "",
};

const Categories = async () => {
  const t = await getTranslations("pages.categories");

  return (
    <div className='flex-col-full'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: categoriesBreadcrumbsSchemaDts(),
        }}
      />
      <section className='s-padding flex-col-full'>
        <div className='s-container flex-col-full'>
          <div className='mb-8'>
            <Heading as='h1' className='!text-2xl' title={t("title")}>
              {t("title")}
            </Heading>
          </div>

          <CategoriesContainer />
        </div>
      </section>
    </div>
  );
};

export default Categories;
