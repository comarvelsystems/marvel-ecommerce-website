"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { topVariant } from "@/lib/motion";

const SecuritySettingsDeleteAccount = () => {
  const form = useForm();

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <motion.div
      variants={topVariant({})}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='relative'
    >
      <Card className='space-y-4 rounded-md bg-background shadow-none'>
        <CardHeader>
          <CardTitle className='text-xl'>Account Deletion</CardTitle>
        </CardHeader>
        <CardContent>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='link' className='px-0 text-destructive'>
                Delete your account
              </Button>
            </DialogTrigger>
            <DialogContent className='max-w-[94%] rounded-lg sm:max-w-[525px]'>
              <DialogHeader className='text-start'>
                <div className='flex items-center justify-between gap-x-4'>
                  <div className='space-y-2'>
                    <DialogTitle>Delete Account</DialogTitle>
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
              <div>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-4'
                  >
                    <FormField
                      control={form.control}
                      name='reason'
                      render={() => (
                        <FormItem>
                          <FormLabel>Reason for deleting account</FormLabel>
                          <FormControl>
                            <Select>
                              <SelectTrigger className='w-full'>
                                <SelectValue placeholder='Choose Reason' />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value='reason-1'>
                                  I have another account
                                </SelectItem>
                                <SelectItem value='reason-2'>
                                  I want to create a new account{" "}
                                </SelectItem>
                                <SelectItem value='reason-3'>
                                  I do not use this account anymore
                                </SelectItem>
                                <SelectItem value='reason-4'>
                                  I get too many forgot password emails{" "}
                                </SelectItem>
                                <SelectItem value='reason-5'>
                                  Security Concerns
                                </SelectItem>
                                <SelectItem value='reason-6'>
                                  Privacy Concerns
                                </SelectItem>
                                <SelectItem value='reason-7'>
                                  None of the above
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <DialogFooter>
                      <Button variant='destructive' type='submit'>
                        Delete Your Account
                      </Button>
                    </DialogFooter>
                  </form>
                </Form>
              </div>
            </DialogContent>
          </Dialog>
          <p className='text-sm text-muted-foreground/60'>
            We are sad to see you go, but hope to see you again!
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SecuritySettingsDeleteAccount;
