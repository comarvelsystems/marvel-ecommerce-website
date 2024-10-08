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
import { Input } from "@/components/ui/input";

const ProductTabReviewsSearchForm = () => {
  const form = useForm();

  return (
    <div className='flex-grow md:flex-grow-0'>
      <Form {...form}>
        <FormField
          control={form.control}
          name='search'
          render={({ field }) => (
            <FormItem className='relative flex w-full items-center gap-2 md:w-60'>
              <FormLabel className='sr-only'>Search</FormLabel>
              <FormControl>
                <Input
                  placeholder='Search In Reviews'
                  {...field}
                  className='!mt-0'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
    </div>
  );
};

export default ProductTabReviewsSearchForm;
