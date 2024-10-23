"use client";

import { Search } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const OrdersFilter = () => {
  return (
    <Card className='rounded-b-none'>
      <CardHeader>
        <div className='flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between'>
          <CardTitle className='flex-1'>Filters</CardTitle>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
            <div className='relative sm:basis-2/3'>
              <div className='absolute top-1/2 -translate-y-1/2 px-4 text-muted-foreground'>
                <Search size={20} />
              </div>
              <Input placeholder='Find Items' className='indent-8' />
            </div>
            <Select defaultValue='last-3-months'>
              <SelectTrigger className='sm:basis-1/3'>
                <SelectValue placeholder='Select' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='last-3-months'>Last 3 months</SelectItem>
                  <SelectItem value='last-6-months'>Last 6 months</SelectItem>
                  <SelectItem value='year-2024'>2024</SelectItem>
                  <SelectItem value='year-2022'>2022</SelectItem>
                  <SelectItem value='year-2021'>2021</SelectItem>
                  <SelectItem value='year-2020'>2020</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default OrdersFilter;
