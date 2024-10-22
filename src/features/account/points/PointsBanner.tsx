import Image from "next/image";
import { JarCoins } from "@/assets/images";

const PointsBanner = () => {
  return (
    <div className='flex items-center gap-4 rounded-lg bg-primary p-4'>
      <Image src={JarCoins} alt='Jar Coins' width={64} height={64} />
      <div className='text-background'>
        <span className='text-lg'>Total Points</span>
        <p className='text-2xl font-bold'>SAR 14,985</p>
      </div>
    </div>
  );
};

export default PointsBanner;
