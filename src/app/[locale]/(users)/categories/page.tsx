import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import CategoryContent from "@/features/categories/CategoryContent";
import { Heading } from "@/components";
import { categoriesBreadcrumbsSchemaDts } from "@/utils/jsonLd";

export const metadata: Metadata = {
  title: "Categories | Marvel Store",
  description: "",
};

const Categories = async () => {
  const t = await getTranslations("categories");

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

          <CategoryContent />
        </div>
      </section>
    </div>
  );
};

export default Categories;
