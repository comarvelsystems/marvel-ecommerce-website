import Image from "next/image";
import { Placeholder } from "@/assets/images";
import getImage from "@/lib/getImage";

const DynamicImage = async ({ src }: { src: string }) => {
  const image = await getImage(src);

  return (
    <Image
      src={src ? src : Placeholder}
      alt=''
      fill
      priority
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      className='mx-auto object-contain'
      placeholder='blur'
      blurDataURL={image?.base64}
    />
  );
};

export default DynamicImage;
