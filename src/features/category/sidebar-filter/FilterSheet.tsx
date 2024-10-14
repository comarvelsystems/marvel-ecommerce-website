import { FilterX, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import FilterOptions from "./FilterOptions";

const FilterSheet = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side='right'
        className='flex !w-full flex-col overflow-auto p-10 sm:!max-w-full md:!max-w-[636px]'
      >
        <SheetHeader className='text-start'>
          <div className='flex items-center justify-between gap-4 border-b border-border/40 pb-4'>
            <SheetTitle>
              <Heading as='h4' className='flex-1'>
                Product Filters
              </Heading>
            </SheetTitle>
            <div className='flex items-center gap-4'>
              <Button
                size='icon'
                variant='destructive'
                className='flex-shrink-0'
              >
                <FilterX size={16} />
              </Button>
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
          </div>
          <SheetDescription className='hidden'></SheetDescription>
        </SheetHeader>
        <div>
          <FilterOptions />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterSheet;