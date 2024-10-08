"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductTabReviewsSortForm = () => {
  const form = useForm();

  return (
    <div className='flex-grow md:flex-grow-0'>
      <Form {...form}>
        <FormField
          control={form.control}
          name='name'
          render={() => (
            <FormItem className='flex items-center gap-2'>
              <FormLabel className='sr-only'>Sort By:</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className='!mt-0 w-full md:w-48'>
                    <SelectValue placeholder='Sort By' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='high'>High rated reviews</SelectItem>
                    <SelectItem value='low'>Low rated reviews</SelectItem>
                    <SelectItem value='oldest'>Oldest reviews</SelectItem>
                    <SelectItem value='recent'>Recent reviews</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
    </div>
  );
};

export default ProductTabReviewsSortForm;
