import Link from "next/link";
import Image from "next/image";
import Heading from "./Heading";

interface Props {
  id: string;
  title: string;
  imageUrl: string;
  href: string;
  countItems: number;
}

const CategoryItem: React.FC<Props> = ({
  id,
  title,
  imageUrl,
  href,
  countItems,
}) => {
  return (
    <Link href={href} className='flex flex-col items-center gap-y-6'>
      <div className='h-36 w-36 rounded-xl bg-muted'>
        <Image
          src={imageUrl}
          alt={title}
          width={0}
          height={0}
          sizes='100vw'
          priority
          className='h-full w-full object-cover'
        />
      </div>
      <div className='text-center'>
        <Heading as='h6'>{title}</Heading>
        <span className='text-xs text-muted-foreground'>
          {countItems} items
        </span>
      </div>
    </Link>
  );
};

export default CategoryItem;
