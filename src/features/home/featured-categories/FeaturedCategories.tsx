import { useTranslations } from "next-intl";
import Heading from "@/components/Heading";
import FeaturedCategorySlider from "./FeaturedCategoriesSlider";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

const FeaturedCategories = () => {
  const t = useTranslations();

  return (
    <section className='s-padding'>
      <div className='s-container'>
        <div className='space-y-8'>
          <div className='flex flex-col items-start gap-4 xl:flex-row xl:items-center'>
            <Heading as='h3' className='text-xl sm:text-3xl'>
              {t("dummy.featured-category")}
            </Heading>
            <Button
              variant='link'
              asChild
              className='text-muted-foreground !no-underline hover:text-primary'
            >
              <Link href='/categories' prefetch={false}>
                {t("globals.browse-all")}
              </Link>
            </Button>
          </div>
          <FeaturedCategorySlider />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
