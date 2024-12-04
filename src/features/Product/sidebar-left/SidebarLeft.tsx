"use client";

import { Check, CreditCard, ShieldCheck, Truck, Undo2 } from "lucide-react";
import SidebarLeftItem from "./SidebarLeftItem";

const SidebarLeft = () => {
  return (
    <div className='rounded-md border-t border-border/40 py-2 xl:border-l xl:border-t-0 xl:rtl:border-r'>
      <ul className='divide-y divide-border/50 rtl:divide-y-reverse'>
        <SidebarLeftItem text='warranty' icon={Check} />
        <SidebarLeftItem text='delivery' icon={Truck} />
        <SidebarLeftItem text='time' icon={Truck} />
        <SidebarLeftItem text='returned' icon={Undo2} />
        <SidebarLeftItem text='shopping' icon={ShieldCheck} />
        <SidebarLeftItem text='payments' icon={CreditCard} />
      </ul>
    </div>
  );
};

export default SidebarLeft;
