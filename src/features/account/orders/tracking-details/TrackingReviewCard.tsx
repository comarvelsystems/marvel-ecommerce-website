import { motion } from "framer-motion";
import Link from "next/link";
import { StarsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { topVariant } from "@/lib/motion";

const TrackingReviewCard = () => {
  return (
    <motion.div
      variants={topVariant({})}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='relative'
    >
      <Card>
        <CardHeader>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <CardTitle className='text-lg'>
              Share your shopping experience
            </CardTitle>
            <Button className='gap-2' size='lg' asChild>
              <Link href='/orders/id/product-review'>
                <StarsIcon />
                Review Product
              </Link>
            </Button>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export default TrackingReviewCard;
