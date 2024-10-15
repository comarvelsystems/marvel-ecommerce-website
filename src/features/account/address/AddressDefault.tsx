"use client";

import { motion } from "framer-motion";
import AddressCard from "@/components/AddressCard";
import Heading from "@/components/Heading";
import { topVariant } from "@/lib/motion";

// TODO: replace with real API
const DEFAULT_CARD = {
  id: "1",
  place: "home",
  name: "Marvel Systems",
  address:
    "King Abdulaziz Avenue, Building 1245, Al Olaya District, Riyadh 12211, Kingdom of Saudi Arabia",
  phone: "+966 1234567890",
  isDefault: true,
};

const AddressDefault = () => {
  return (
    <div className='space-y-4'>
      <Heading as='h2' className='text-xl'>
        Default address
      </Heading>
      <motion.div
        variants={topVariant({ delay: 0 })}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='relative'
      >
        <AddressCard {...DEFAULT_CARD} />
      </motion.div>
    </div>
  );
};

export default AddressDefault;
