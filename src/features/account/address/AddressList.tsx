"use client";

import { motion } from "framer-motion";
import AddressCard from "@/components/AddressCard";
import Heading from "@/components/Heading";
import { topVariant } from "@/lib/motion";

// TODO: replace with real data
const ADDRESSES = [
  {
    id: "1",
    place: "Work",
    name: "Marvel Systems II",
    address:
      "King Abdulaziz Avenue, Building 1245, Al Olaya District, Riyadh 12211, Kingdom of Saudi Arabia",
    phone: "+966 1234567890",
    isDefault: false,
  },
];

const AddressList = () => {
  return (
    <div className='space-y-4'>
      <Heading as='h2' className='text-xl'>
        Other address
      </Heading>
      <ul className='space-y-4'>
        {ADDRESSES.map((address, index) => (
          <motion.li
            variants={topVariant({})}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            custom={index + 1}
            key={address.id}
            className='relative'
          >
            <AddressCard {...address} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default AddressList;
