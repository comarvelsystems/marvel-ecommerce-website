/* eslint-disable react/jsx-no-literals */

"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ShoppingCart, Menu, User, Heart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { ACCOUNT_ITEMS, LANGUAGES } from "@/utils/constants";
import SwitchLanguage from "../switch-language";

const HeaderTop = () => {
  const t = useTranslations();

  return (
    <header>
      <div className='container mx-auto md:border-b md:border-border/60'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center'>
              <Image
                className='dark:invert'
                src='/images/marvel_logo.png'
                alt='Next.js logo'
                width={140}
                height={24}
                priority
              />
            </Link>
          </div>
          <div className='mx-8 hidden max-w-xl flex-1 md:block'>
            <div className='relative'>
              <Input
                type='search'
                placeholder='Search products...'
                className='pl-10 ring-primary-foreground'
              />
              <Search
                className='absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400'
                size={20}
              />
            </div>
          </div>
          <div className='flex items-center space-x-1'>
            <SwitchLanguage />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost'>
                  <User />
                  <DropdownMenuLabel className='hidden md:block'>
                    {t("globals.account")}
                  </DropdownMenuLabel>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-20'>
                <DropdownMenuGroup>
                  {ACCOUNT_ITEMS.map(item => (
                    <DropdownMenuItem key={item.label}>
                      <Link href={item.href} className='text-sm font-medium'>
                        {t(item.name as any)}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant='ghost' size='icon' className='relative mr-2'>
              <Heart className='h-6 w-6' />
              <span className='absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground'>
                3
              </span>
            </Button>

            <Button variant='ghost' size='icon' className='relative mr-2'>
              <ShoppingCart className='h-6 w-6' />
              <span className='absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground'>
                3
              </span>
            </Button>
            <Button variant='ghost' size='icon' className='md:hidden'>
              <Menu className='h-6 w-6' />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
