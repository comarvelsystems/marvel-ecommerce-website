"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useLocale } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { LANGUAGES } from "@/utils/constants";

const SwitchLanguage = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedLanguage =
    LANGUAGES.find(lang => lang.abbreviation === locale) || LANGUAGES[0];

  const handleChangeLanguage = (lang: string) => {
    let currentPath;

    if (/^\/(ar|en)$/.test(pathname)) {
      currentPath = `/${lang}`;
    } else {
      currentPath = pathname.replace(/\/(ar|en)\//, `/${lang}/`);
    }

    const params = new URLSearchParams(searchParams);
    router.replace(`${currentPath}?${params.toString()}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>
          <Image
            className='dark:invert'
            src={selectedLanguage.icon_path}
            alt={selectedLanguage.name}
            width={16}
            height={16}
            priority
          />
          <DropdownMenuLabel className='block md:hidden'>
            {selectedLanguage.abbreviation}
          </DropdownMenuLabel>
          <DropdownMenuLabel className='hidden md:block'>
            {selectedLanguage.name}
          </DropdownMenuLabel>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-20'>
        <DropdownMenuGroup>
          {LANGUAGES.map(lang => (
            <DropdownMenuItem
              key={lang.id}
              onClick={() => handleChangeLanguage(lang.abbreviation)}
            >
              <Image
                className='dark:invert'
                src={lang.icon_path}
                alt={lang.name}
                width={16}
                height={16}
                priority
              />
              {lang.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SwitchLanguage;
