"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { topVariant } from "@/lib/motion";
import { ACCOUNT_SIDEBAR_ITEM } from "@/constants";

const AccountSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className='box-content hidden w-[296px] flex-none pl-[calc(-770px+50vw)] lg:block rtl:pr-[calc(-720px+50vw)]'>
      <div className='sticky top-0 z-[1px] w-full bg-white'>
        <div className='mx-10 border-b border-border/40 pb-6 pt-8'>
          <motion.div
            variants={topVariant({})}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='relative'
          >
            <p className='text-lg font-bold'>Welcome Marvel</p>
            <p className='text-sm text-muted-foreground'>
              testemail@marvel.com.sa
            </p>
          </motion.div>
        </div>
        <ul className='py-3'>
          {ACCOUNT_SIDEBAR_ITEM.map(
            ({ name, label, href, icon: Icon }, index) => (
              <motion.li
                key={label}
                variants={topVariant({})}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                custom={index + 1}
                className='relative'
              >
                <Link
                  href={href}
                  className={cn(
                    "flex h-14 w-full items-center gap-4 px-10 text-base text-muted-foreground transition-colors duration-300 hover:text-primary",
                    pathname === href && "text-primary",
                  )}
                >
                  <div
                    className={cn(
                      "rounded-md p-1.5",
                      pathname === href ? "bg-primary/15" : "bg-muted",
                    )}
                  >
                    <Icon />
                  </div>
                  {name}
                </Link>
              </motion.li>
            ),
          )}
        </ul>
        <motion.div
          variants={topVariant({})}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='relative mx-10 border-t border-border/40 pb-16 pt-3'
        >
          <Button
            variant='ghost'
            className='w-full justify-start px-0 text-muted-foreground hover:bg-transparent'
          >
            Logout
          </Button>
        </motion.div>
      </div>
    </aside>
  );
};

export default AccountSidebar;
