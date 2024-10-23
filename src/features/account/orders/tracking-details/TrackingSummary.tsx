import Link from "next/link";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { opacityVariant, topVariant } from "@/lib/motion";

const TrackingSummary = () => {
  return (
    <motion.div
      variants={opacityVariant()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='sticky top-24 mb-5 w-full rounded-md border border-border bg-background p-7 sm:p-5 xl:ml-8 xl:w-96 xl:drop-shadow-xl rtl:xl:mr-8'
    >
      <motion.div
        variants={topVariant({ delay: 0 })}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='relative space-y-5'
      >
        <div className='border-b border-border/40 pb-4'>
          <Heading as='h6'>Order ID: 501-213784-0221170</Heading>
        </div>
        <div className='space-y-4'>
          <Heading as='h6'>
            Delivery address{" "}
            <span className='text-muted-foreground'>(home)</span>
          </Heading>
          <div className='space-y-2 font-normal'>
            <p>Marvel Systems</p>
            <p>
              King Abdulaziz Avenue, Building 1245, Al Olaya District, Riyadh
              12211, Kingdom of Saudi Arabia
            </p>
            <div className='space-x-2'>
              <span>+966 123 456 789</span>
              <span className='text-green-600'>Verified</span>
            </div>
          </div>
        </div>
        <Button asChild className='w-full'>
          <Link href='/orders/id'>View Order Summary</Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default TrackingSummary;
