import { useTranslations } from "next-intl";
import Heading from "@/components/Heading";
import OptionsFilter from "./options-filter";
import ResetFiltersButton from "./reset-filters-button";

const FilterContainer = () => {
  const t = useTranslations("pages.category");
  return (
    <aside className='hidden w-80 flex-shrink-0 border-r border-border/40 bg-background p-5 lg:block rtl:border-l'>
      <div className='flex items-center justify-between gap-4 border-b border-border/40 pb-4'>
        <Heading as='h2' className='flex-1 !text-xl'>
          {t("product-filters")}
        </Heading>
        <ResetFiltersButton />
      </div>
      <div className='mt-5'>
        <OptionsFilter />
      </div>
    </aside>
  );
};

export default FilterContainer;
