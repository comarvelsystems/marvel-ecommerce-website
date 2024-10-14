import Link from "next/link";
import { X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Heading from "./Heading";
import CartSheetItem from "./CartSheetItem";

const CART_ITEMS = [
  {
    id: "1",
    title: "QT82 TWS Wireless BT Headphone Black",
    imageUrl: "/images/products/product-2.webp",
    price: 250,
    priceAfterDiscount: 210,
    total: 210,
    href: "/product-slug",
  },
  {
    id: "1",
    title: "QT82 TWS Wireless BT Headphone Black",
    imageUrl: "/images/products/product-3.webp",
    price: 250,
    priceAfterDiscount: 210,
    total: 210,
    href: "/product-slug",
  },
  {
    id: "1",
    title: "QT82 TWS Wireless BT Headphone Black",
    imageUrl: "/images/products/product-4.webp",
    price: 250,
    priceAfterDiscount: 210,
    total: 210,
    href: "/product-slug",
  },
];

const CartSheet = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side='right'
        className='flex !w-full flex-col p-10 sm:!max-w-full md:!max-w-[736px]'
      >
        <SheetHeader className='pb-8 text-start'>
          <div className='flex items-center'>
            <SheetTitle className='flex-1 gap-5'>
              <Heading as='h4'>Shopping Cart (3 Items)</Heading>
            </SheetTitle>
            <SheetClose asChild>
              <Button
                size='icon'
                variant='ghost'
                className='text-muted-foreground/60 hover:bg-transparent'
              >
                <X size={40} strokeWidth={0.8} />
              </Button>
            </SheetClose>
          </div>
          <SheetDescription className='hidden'></SheetDescription>
        </SheetHeader>
        <ul className='flex-1 space-y-2.5 overflow-auto md:space-y-5'>
          {CART_ITEMS.map((item, index) => (
            <CartSheetItem key={item.id} {...item} index={index} />
          ))}
        </ul>
        <SheetFooter>
          <div className='w-full space-y-5'>
            <div className='flex justify-between text-sm'>
              <span className='text-muted-foreground/70'>Total Products</span>
              <b>630 SAR</b>
            </div>
            <div className='flex items-center justify-between border-t border-border/40 pt-3'>
              <span className='font-semibold'>Total</span>
              <b className='text-lg'>630 SAR</b>
            </div>
            <div className='flex flex-col gap-5'>
              <SheetClose asChild>
                <Button size='lg' className='py-7' asChild>
                  <Link href='/cart'>Go to shopping cart</Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  variant='ghost'
                  className='text-muted-foreground hover:bg-transparent'
                >
                  Continue shopping
                </Button>
              </SheetClose>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
