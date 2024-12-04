"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import Heading from "@/components/Heading";
import useTabStore from "../../store/use-tab-store";

interface Props {
  id: string;
  title: string;
  description: string;
  label: string;
}

const ProductTabsItem: React.FC<Props> = ({
  id,
  title,
  description,
  label,
}) => {
  const { tab, setTab } = useTabStore();
  const t = useTranslations("product.tabs");

  return (
    <li
      key={id}
      className={cn(
        "group relative flex-grow cursor-pointer rounded-xl border-x border-y border-border/40 bg-background px-8 py-3 text-center transition-colors duration-300 lg:rounded-none lg:border-x-0 lg:border-y-0 lg:border-b lg:px-0 lg:py-0 lg:pb-8 lg:text-start",
        tab === label && "border-primary lg:border-border/40",
      )}
      onClick={() => setTab(label)}
    >
      <Heading
        as='h3'
        className={cn(
          "text-base transition-colors duration-300 group-hover:text-primary lg:text-3xl",
          tab === label && "text-primary",
        )}
      >
        {t(title as any)}
      </Heading>
      <p className='hidden text-muted-foreground/80 lg:block'>
        {t(description as any)}
      </p>
    </li>
  );
};

export default ProductTabsItem;
