import { FilterX } from "lucide-react";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import FilterOptions from "./FilterOptions";

const FilterContainer = () => {
    return (
        <aside className='hidden w-80 flex-shrink-0 border-r border-border/40 p-5 lg:block rtl:border-l'>
            <div className='flex items-center justify-between gap-4 border-b border-border/40 pb-4'>
                <Heading as='h2' className='flex-1 !text-xl'>
                    Product Filters
                </Heading>
                <Button
                    size='icon'
                    variant='destructive'
                    className='flex-shrink-0'
                >
                    <FilterX size={16} />
                </Button>
            </div>
            <div className='mt-5'>
                <FilterOptions />
            </div>
        </aside>
    );
};

export default FilterContainer;
