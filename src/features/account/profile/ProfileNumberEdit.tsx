"use client";

import { useForm } from "react-hook-form";
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

const ProfileNumberEdit: React.FC<Props> = ({ children }) => {
  const form = useForm();

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-[94%] rounded-lg sm:max-w-[525px]'>
        <DialogHeader className='text-start'>
          <div className='flex items-center justify-between gap-x-4'>
            <div className='space-y-2'>
              <DialogTitle>Change phone number</DialogTitle>
              <DialogDescription />
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
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder='05X xxx xxxx' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type='submit'>Update Phone Number</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileNumberEdit;
