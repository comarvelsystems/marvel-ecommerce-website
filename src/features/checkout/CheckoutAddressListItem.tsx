import { CheckIcon, Edit } from "lucide-react";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { topVariant } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface Props {
  id?: string;
  place: string;
  name: string;
  address: string;
  phone: string;
  index: number;
  isDefault: boolean;
}

const CheckoutAddressListItem: React.FC<Props> = ({
  place,
  name,
  address,
  phone,
  index,
  isDefault,
}) => {
  return (
    <motion.li
      variants={topVariant({})}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      custom={index + 1}
      className='relative cursor-pointer'
    >
      <Card
        className={cn(
          "p-0 shadow-none",
          isDefault && "border-2 border-primary",
        )}
      >
        <CardHeader className='border-b border-border/40 px-4 py-2'>
          <div className='flex items-center justify-between gap-5'>
            <div className='flex items-center gap-2'>
              <Heading as='h3' className='flex-1 text-lg'>
                {place}
              </Heading>
              {isDefault && <Badge>Default</Badge>}
            </div>
            <Button
              variant='ghost'
              size='sm'
              className='gap-x-1 text-muted-foreground'
            >
              <Edit size={18} />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent className='px-4 py-4 md:py-7'>
          <div className='space-y-5'>
            <div className='flex items-center justify-between gap-4 text-sm'>
              <p className='text-muted-foreground'>Name:</p>
              <p className='w-4/5 truncate'>{name}</p>
            </div>
            <div className='flex items-center justify-between gap-10 overflow-hidden text-sm'>
              <p className='text-muted-foreground'>Address:</p>
              <p className='w-4/5 truncate'>{address}</p>
            </div>
            <div className='flex items-center justify-between gap-10 overflow-hidden text-sm'>
              <p className='text-muted-foreground'>Phone:</p>
              <div className='flex w-4/5 items-center gap-1.5 text-sm font-medium'>
                <div className='flex size-4 items-center justify-center rounded-full bg-green-600 text-background'>
                  <CheckIcon size={12} strokeWidth={2.5} />
                </div>
                {phone}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.li>
  );
};

export default CheckoutAddressListItem;
