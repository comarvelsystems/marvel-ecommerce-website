/* eslint-disable react/jsx-no-literals */

"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className='border-t border-border/60 bg-background pt-8'>
      <div className='container mx-auto px-4 py-8 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          {/* Company Info */}
          <div>
            <Image
              className='mb-4 dark:invert'
              src='/images/marvel_logo.png'
              alt='Next.js logo'
              width={140}
              height={24}
              priority
            />
            <p className='text-sm text-muted-foreground'>{t("description")}</p>
          </div>
          <div>
            <h3 className='mb-4 text-sm font-semibold'> {t("items.title")}</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  {t("items.products")}
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  {t("items.categories")}
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  {t("items.deals")}
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  {t("items.about")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-4 text-sm font-semibold'> {t("items.title")}</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/products'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  {t("items.products")}
                </Link>
              </li>
              <li>
                <Link
                  href='/categories'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  {t("items.categories")}
                </Link>
              </li>
              <li>
                <Link
                  href='/deals'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  {t("items.deals")}
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  {t("items.about")}
                </Link>
              </li>
            </ul>
          </div>
          {/* Customer Service */}
          <div>
            <h3 className='mb-4 text-sm font-semibold'>{t("items.title2")}</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  {t("items.contact")}
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  {t("items.shipping")}
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  {t("items.returns")}
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  {t("items.FAQ")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className='mt-8 border-t border-border/60 pt-8'>
          <div className='flex flex-col items-center justify-between md:flex-row'>
            <div className='mb-4 flex space-x-4 md:mb-0'>
              <Link
                href='#'
                className='text-muted-foreground hover:text-primary'
              >
                <Facebook className='h-5 w-5' />
                <span className='sr-only'>Facebook</span>
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-primary'
              >
                <Twitter className='h-5 w-5' />
                <span className='sr-only'>Twitter</span>
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-primary'
              >
                <Instagram className='h-5 w-5' />
                <span className='sr-only'>Instagram</span>
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-primary'
              >
                <Youtube className='h-5 w-5' />
                <span className='sr-only'>YouTube</span>
              </Link>
            </div>
            <p className='text-sm text-muted-foreground'>
              © {new Date().getFullYear()} {t("copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
