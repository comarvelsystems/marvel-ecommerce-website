import Link from "next/link";
import BannerImage from "./BannerImage";

interface Props {
  data: {
    banners: {
      id: string;
      imageUrl: string;
      href: string;
      col: number;
    }[];
  };
}

const FeaturedBanner: React.FC<Props> = ({ data }) => {
  const { imageUrl, href } = data.banners[0];
  const gridImages = data.banners.slice(1);

  return (
    <section className='s-padding'>
      <div className='s-container'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-stretch'>
          <Link
            href={href}
            className='group block w-full overflow-hidden rounded-xl lg:basis-1/2'
          >
            <BannerImage imageUrl={imageUrl} alt='Featured Banner 1' />
          </Link>
          <div className='grid basis-full grid-cols-none gap-6 lg:basis-1/2 lg:grid-cols-1'>
            {gridImages.map(({ id, imageUrl, href }, index) => (
              <Link
                key={id}
                href={href}
                className='group block overflow-hidden rounded-xl'
              >
                <BannerImage
                  imageUrl={imageUrl}
                  alt={`Featured Banner ${index + 2}`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
