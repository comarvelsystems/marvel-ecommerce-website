"use client";

import { Check, CreditCard, ShieldCheck, Truck, Undo2 } from "lucide-react";
import SidebarLeftItem from "./SidebarLeftItem";

const SidebarLeft = () => {
  return (
    <div className='rounded-md border-t border-border/40 py-2 xl:border-l xl:border-t-0 xl:rtl:border-r'>
      <ul className='divide-y divide-border/50 rtl:divide-y-reverse'>
        <SidebarLeftItem text='1 year warranty' icon={Check} delay={0.1} />
        <SidebarLeftItem
          text='Delivery fee 20 riyals.'
          icon={Truck}
          delay={0.2}
        />
        <SidebarLeftItem
          text='Get it by October 8th.'
          icon={Truck}
          delay={0.3}
        />
        <SidebarLeftItem
          text='This product cannot be exchanged or returned.'
          icon={Undo2}
          delay={0.4}
        />
        <SidebarLeftItem text='Safe shopping.' icon={ShieldCheck} delay={0.5} />
        <SidebarLeftItem text='Safe payment.' icon={CreditCard} delay={0.6} />
      </ul>
    </div>
  );
};

export default SidebarLeft;
