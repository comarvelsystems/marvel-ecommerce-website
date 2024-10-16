"use client";

import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import { topVariant } from "@/lib/motion";
import PaymentCard from "@/components/PaymentCard";

//TODO: replace with real API
const PAYMENTS = [
  {
    id: "1",
    type: "mastercard",
    number: "2424 2424 2424 2424",
    isDefault: false,
  },
  {
    id: "2",
    type: "mada",
    number: "2523 1234 1234 1234",
    isDefault: false,
  },
];

const PaymentsList = () => {
  return (
    <div className='space-y-4'>
      <Heading as='h2' className='text-xl'>
        Other Payments
      </Heading>
      <ul className='space-y-4'>
        {PAYMENTS.map((payment, index) => (
          <motion.li
            variants={topVariant({})}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            custom={index + 1}
            key={payment.id}
            className='relative'
          >
            <PaymentCard {...payment} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentsList;
