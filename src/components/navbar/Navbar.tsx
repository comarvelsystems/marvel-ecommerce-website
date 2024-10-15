import Link from "next/link";
import { Heart, MoveLeft, ShoppingCart } from "lucide-react";
import CartSheet from "../CartSheet";

const Navbar = () => {
  return (
    <nav className='h-[72px] border-b border-border/70 bg-background'>
      <div className='s-container'>
        <div className='flex h-[72px] items-center justify-between gap-4'>
          <Link href='/'>
            <MoveLeft size={28} />
          </Link>
          <div className='flex items-center gap-2'>
            <Link
              href='/wishlist'
              className='flex size-14 cursor-pointer items-center justify-center rounded-full border border-border bg-white'
            >
              <Heart />
            </Link>
            <CartSheet>
              <div className='flex size-14 cursor-pointer items-center justify-center rounded-full border border-border bg-white text-destructive'>
                <ShoppingCart />
              </div>
            </CartSheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
