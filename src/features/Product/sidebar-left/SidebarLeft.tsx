"use client";

import { Check, CreditCard, ShieldCheck, Truck, Undo2 } from "lucide-react";
import SidebarLeftItem from "./SidebarLeftItem";

const SidebarLeft = () => {
  return (
    <div className='rounded-md border-t border-border/40 py-2 xl:border-l xl:border-t-0 xl:rtl:border-r'>
      <ul className='divide-y divide-border/50 rtl:divide-y-reverse'>
        <SidebarLeftItem text='1 year warranty' icon={Check} />
        <SidebarLeftItem text='Delivery fee 20 riyals.' icon={Truck} />
        <SidebarLeftItem text='Get it by October 8th.' icon={Truck} />
        <SidebarLeftItem
          text='This product cannot be exchanged or returned.'
          icon={Undo2}
        />
        <SidebarLeftItem text='Safe shopping.' icon={ShieldCheck} />
        <SidebarLeftItem text='Safe payment.' icon={CreditCard} />
      </ul>
    </div>
  );
};

export default SidebarLeft;
