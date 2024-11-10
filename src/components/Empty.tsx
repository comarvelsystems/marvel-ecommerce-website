"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Heading from "./Heading";
import { Empty as EmptyImage } from "@/assets/images";

interface Props {
  title?: string;
  message?: string;
  image?: string;
}

const Empty: React.FC<Props> = ({ image, title, message }) => {
  const t = useTranslations("globals");

  const emptyTitle = title || "empty.default.title";
  const emptyMessage = message || "empty.default.message";

  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-y-4 py-6 text-center'>
      <Image
        src={image ? image : EmptyImage}
        width={128}
        height={128}
        alt={t(emptyTitle as any)}
        priority
      />
      <div className='space-y-2'>
        <Heading as='h2' className='text-xl'>
          {t(emptyTitle as any)}
        </Heading>
        <p className='text-base text-muted-foreground'>
          {t(emptyMessage as any)}
        </p>
      </div>
    </div>
  );
};

export default Empty;
