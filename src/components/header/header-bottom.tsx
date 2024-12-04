"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NAVBAR_ITEMS } from "@/utils/constants";

const HeaderBottom = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className='container mx-auto hidden space-x-6 py-2 md:flex md:items-center'>
      <NavigationMenu dir={locale === "ar" ? "rtl" : "ltr"}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href={`/${locale}/categories`}
                className={navigationMenuTriggerStyle()}
              >
                {t("globals.all-categories")}
              </Link>
            </NavigationMenuLink>
            {/* <NavigationMenuTrigger>All Categories</NavigationMenuTrigger> */}
            {/* <NavigationMenuContent>
              <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                {NAVBAR_ITEMS.map(item => (
                  <ListItem
                    key={item.label}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent> */}
          </NavigationMenuItem>
          {NAVBAR_ITEMS.map(item => (
            <NavigationMenuItem key={item.label}>
              <Link href={`${pathname}/${item.href}`} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {t(item.title as any)}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

// const ListItem = forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
//           {...props}
//         >
//           <div className='text-sm font-medium leading-none'>{title}</div>
//           <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";

export default HeaderBottom;
