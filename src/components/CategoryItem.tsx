import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Category } from "@/utils/@types";
import { Placeholder } from "@/assets/images";
import Heading from "./Heading";

const CategoryItem: React.FC<Category> = ({
  name,
  slug,
  image,
  total_products,
  status,
}) => {
  const t = useTranslations("globals");

  return (
    <>
      {status === 1 ? (
        <Link
          href={`/category/${slug}`}
          className='flex flex-col items-center gap-y-6'
        >
          <div className='h-36 w-36 overflow-hidden rounded-xl bg-muted'>
            <Image
              src={image ? "/images/categories/category-1.webp" : Placeholder}
              alt={name}
              width={0}
              height={0}
              sizes='100vw'
              priority
              className='h-full w-full object-cover'
              quality={10}
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
      ) : null}
    </>
  );
};

export default CategoryItem;
