import { motion } from "framer-motion";
import { ChevronRight, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { topVariant } from "@/lib/motion";

const TrackingDatetime = () => {
  return (
    <motion.div
      variants={topVariant({ delay: 0 })}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='relative'
    >
      <Card>
        <CardHeader className='gap-y-4'>
          <div className='flex items-center gap-4'>
            <div className='rounded-full bg-green-600 p-2 text-background'>
              <PackageCheck size={28} />
            </div>
            <p className='text-lg'>
              <span className='font-semibold text-green-600'>Delivered</span> on
              Saturday, 23 July 2022, 01:36 PM
            </p>
          </div>
          <div className='flex items-center justify-between gap-4 rounded-md bg-green-600/10 px-4 py-1'>
            <p>
              Return <span className='text-green-600'>Approved</span>
            </p>
            <Button
              variant='link'
              className='p-0 font-bold text-green-600 !no-underline'
            >
              Track <ChevronRight size={18} />
            </Button>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export default TrackingDatetime;
