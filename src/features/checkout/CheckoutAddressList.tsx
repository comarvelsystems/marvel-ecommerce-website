import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import CheckoutAddressListItem from "./CheckoutAddressListItem";

// TODO: replace with real data
const ADDRESSES = [
  {
    id: "1",
    place: "Home",
    name: "Marvel Systems",
    address:
      "King Abdulaziz Avenue, Building 1245, Al Olaya District, Riyadh 12211, Kingdom of Saudi Arabia",
    phone: "+966 1234567890",
    isDefault: true,
  },
  {
    id: "2",
    place: "Work",
    name: "Marvel Systems",
    address:
      "King Abdulaziz Avenue, Building 1245, Al Olaya District, Riyadh 12211, Kingdom of Saudi Arabia",
    phone: "+966 1234567890",
    isDefault: false,
  },
];

const CheckoutAddressList = ({ children }: { children: React.ReactNode }) => {
  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent>
        <div className='flex flex-col'>
          <DrawerHeader>
            <DrawerTitle className='text-center text-2xl'>
              Select delivery address
            </DrawerTitle>
            <DrawerDescription className='text-center'>
              Choose the delivery address you want the shipment to reach.
            </DrawerDescription>
          </DrawerHeader>
          <ul className='mx-auto my-8 h-[400px] w-full flex-grow space-y-4 overflow-auto md:h-[440px] md:w-[800px]'>
            {ADDRESSES.map((address, index) => (
              <CheckoutAddressListItem
                key={address.id}
                {...address}
                index={index}
              />
            ))}
          </ul>
          <DrawerFooter className='mx-auto w-full md:w-[800px]'>
            <Button>Confirm</Button>
            <DrawerClose>
              <Button variant='ghost' className='w-full'>
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CheckoutAddressList;
