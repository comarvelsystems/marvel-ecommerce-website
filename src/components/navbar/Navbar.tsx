import { ShoppingCart } from "lucide-react";
import CartSheet from "../CartSheet";

const Navbar = () => {
  return (
    <nav className='h-20 bg-muted'>
      <div className='s-container'>
        <div className='flex h-20 items-center justify-end'>
          <CartSheet>
            <div className='flex size-14 cursor-pointer items-center justify-center rounded-full border border-border bg-white text-destructive'>
              <ShoppingCart />
            </div>
          </CartSheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
