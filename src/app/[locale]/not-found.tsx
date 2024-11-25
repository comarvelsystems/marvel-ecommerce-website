/* eslint-disable react/jsx-no-literals */

import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Heading } from "@/components";
import { Button } from "@/components/ui/button";

const NotFound = async () => {
  const t = await getTranslations("pages.not-found");

  return (
    <>
      <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]' />
      <div className='container flex h-screen flex-col items-center justify-center gap-y-6'>
        <div className='text-center'>
          <Heading className='text-9xl'>
            4<span className='text-destructive'>0</span>4
          </Heading>
          <Heading as='h2'>{t("title")}</Heading>
        </div>
        <p className='w-[700px] text-center text-lg text-muted-foreground'>
          {t("message")}
        </p>
        <Button size='lg' asChild>
          <Link href='/'>{t("button")}</Link>
        </Button>
      </div>
    </>
  );
};

export default NotFound;
