"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { topVariant } from "@/lib/motion";

const SecuritySettingsPasswordForm = () => {
  const form = useForm();

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <motion.div
      variants={topVariant({ delay: 0 })}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='relative'
    >
      <Card className='space-y-4 rounded-md bg-background shadow-none'>
        <CardHeader>
          <CardTitle className='text-xl'>Change Password</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-4'
              >
                <div className='flex flex-wrap items-center gap-4 md:flex-nowrap'>
                  <FormField
                    control={form.control}
                    name='current-password'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Current Password</FormLabel>
                        <FormControl>
                          <Input placeholder='******' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='new-password'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                          <Input placeholder='******' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='confirm-new-password'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Confirm New Password</FormLabel>
                        <FormControl>
                          <Input placeholder='******' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type='submit'>Change Password</Button>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SecuritySettingsPasswordForm;
