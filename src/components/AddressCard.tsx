"use client";

import { CheckIcon, Edit, Trash2 } from "lucide-react";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface Props {
  id?: string;
  place: string;
  name: string;
  address: string;
  phone: string;
  isDefault: boolean;
  index?: number;
}

const AddressCard: React.FC<Props> = ({
  id,
  place,
  name,
  address,
  phone,
  isDefault,
}) => {
  return (
    <div className='relative overflow-hidden'>
      <Card className='p-0 shadow-none'>
        <CardHeader className='border-b border-border/40 px-4 py-2'>
          <div className='flex items-center justify-between gap-5'>
            <div className='flex items-center gap-2'>
              <Heading as='h3' className='flex-1 text-lg'>
                {place}
              </Heading>
            </div>
            <div className='flex items-center gap-1.5 sm:gap-3'>
              <Button
                variant='ghost'
                size='sm'
                className='gap-x-1 text-muted-foreground'
              >
                <Trash2 size={18} />
                <span className='hidden sm:block'>Delete</span>
              </Button>
              <Button
                variant='ghost'
                size='sm'
                className='gap-x-1 text-muted-foreground'
              >
                <Edit size={18} />
                <span className='hidden sm:block'>Edit</span>
              </Button>
              {isDefault && <Badge>Default</Badge>}
              {!isDefault && (
                <div className='flex items-center gap-x-1.5 sm:gap-x-2.5'>
                  <Label htmlFor='set-default' className='font-normal'>
                    Default
                  </Label>
                  <Switch
                    id='set-default'
                    onCheckedChange={() => console.log("checked")}
                  />
                </div>
              )}
            </div>
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
              <p className='w-4/5'>{address}</p>
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
    </div>
  );
};

export default AddressCard;
