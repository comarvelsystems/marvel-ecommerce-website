"use client";

import { useForm } from "react-hook-form";
// import { z } from "zod";
import { X } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  children: Readonly<React.ReactNode>;
}

const AddressAddNew: React.FC<Props> = ({ children }) => {
  const form = useForm();

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-[94%] rounded-lg sm:max-w-[525px]'>
        <DialogHeader className='text-start'>
          <div className='flex justify-between gap-x-4'>
            <div className='space-y-2'>
              <DialogTitle>Add New Address</DialogTitle>
              <DialogDescription>
                Provide a new address for upcoming purchases.
              </DialogDescription>
            </div>
            <DialogClose asChild>
              <Button
                size='icon'
                variant='ghost'
                className='bg-transparent text-muted-foreground hover:bg-transparent'
              >
                <X size={32} strokeWidth={0.8} />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='place'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Place</FormLabel>
                  <FormControl>
                    <Input placeholder='Home, Office, Work' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='location'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your location' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type='submit'>Add Address</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddressAddNew;
