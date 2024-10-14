import Link from "next/link";
import Image from "next/image";
import Heading from "../Heading";
import RatingStars from "../RatingStars";

interface Props {
  imageUrl: string;
  title: string;
  priceAfterDiscount: number;
  price: number;
}

const WideProductCard: React.FC<Props> = ({
  imageUrl,
  title,
  priceAfterDiscount,
  price,
}) => {
  return (
    <Link
      href='#'
      className='transition-transition relative flex items-center duration-300 hover:-translate-y-2'
    >
      <div className='basis-4/12 overflow-hidden rounded-xl bg-muted'>
        <Image
          src={imageUrl}
          alt={title}
          width={0}
          height={0}
          sizes='100vw'
          priority
          className='mx-auto size-full object-cover'
        />
      </div>

      <div className='basis-2/3 space-y-2.5 px-6'>
        <div className='space-y-1'>
          <Heading as='h6'>{title}</Heading>
          <div className='flex items-center rtl:space-x-reverse'>
            <RatingStars score={4} />
            <span className='ms-2 text-sm font-semibold text-muted-foreground/60'>
              (4.0)
            </span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-md block font-bold text-primary'>
            {priceAfterDiscount} SAR
          </span>
          <span className='block text-sm font-semibold text-muted-foreground/60 line-through'>
            {price} SAR
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WideProductCard;
