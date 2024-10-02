import Image from "next/image";

interface BannerImage {
  imageUrl: string;
  alt: string;
}

const BannerImage: React.FC<BannerImage> = ({ imageUrl, alt }) => {
  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={0}
      height={0}
      sizes='100vw'
      priority
      quality={80}
      className='size-full object-cover transition-all duration-300 group-hover:scale-105'
    />
  );
};

export default BannerImage;
