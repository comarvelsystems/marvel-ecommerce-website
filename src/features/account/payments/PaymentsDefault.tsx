"use client";

import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import PaymentCard from "@/components/PaymentCard";
import { topVariant } from "@/lib/motion";

// TODO: replace with real API
const DEFAULT_PAYMENT = {
  id: "1",
  type: "visa",
  number: "1234 5678 9012 3456",
  isDefault: true,
};
const PaymentsDefault = () => {
  return (
    <div className='space-y-4'>
      <Heading as='h2' className='text-xl'>
        Default payment
      </Heading>
      <motion.div
        variants={topVariant({ delay: 0 })}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='relative'
      >
        <PaymentCard {...DEFAULT_PAYMENT} />
      </motion.div>
    </div>
  );
};

export default PaymentsDefault;
