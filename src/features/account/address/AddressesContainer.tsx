import { Plus } from "lucide-react";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import AddressDefault from "./AddressDefault";
import AddressList from "./AddressList";
import AddressAddNew from "./AddressAddNew";

const AddressesContainer = () => {
  return (
    <section className='space-y-8'>
      <header className='space-between flex flex-wrap gap-5 sm:flex-nowrap'>
        <div className='flex-1 space-y-1.5'>
          <Heading as='h1' className='!text-3xl'>
            Addresses
          </Heading>
          <p className='text-base text-muted-foreground'>
            Manage your saved addresses for fast and easy checkout
          </p>
        </div>
        <AddressAddNew>
          <Button className='gap-1.5'>
            <Plus size={18} />
            New Address
          </Button>
        </AddressAddNew>
      </header>
      <AddressDefault />
      <AddressList />
    </section>
  );
};

export default AddressesContainer;
