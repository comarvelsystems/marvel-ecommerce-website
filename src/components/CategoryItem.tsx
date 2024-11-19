import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Category } from "@/utils/@types";
import { Placeholder } from "@/assets/images";
import Heading from "./Heading";

const CategoryItem: FC<Category> = ({
  category_id,
  name,
  slug,
  image,
  total_products,
}) => {
  const t = useTranslations("globals");

  return (
    <Link
      href={`/category/${slug}?cid=${category_id}`}
      className='flex flex-col items-center gap-y-5'
      prefetch={false}
    >
      <div className='aspect-square w-full overflow-hidden rounded-xl bg-muted'>
        <Image
          src={image ? "/images/categories/category-1.webp" : Placeholder}
          alt={name}
          width={0}
          height={0}
          sizes='(max-width: 640px) 96px, (max-width: 1024px) 128px, 144px'
          priority
          quality={10}
          className='h-full w-full object-cover object-center'
        />
      </div>
      <div className='text-center'>
        <Heading as='h2' className='text-base' title={name}>
          {name}
        </Heading>
        <span className='text-xs text-muted-foreground'>
          {total_products} {t("items")}
        </span>
      </div>
    </Link>
  );
};

export default CategoryItem;

//TODO: Fix Image
