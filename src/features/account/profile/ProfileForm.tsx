"use client";

import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { CalendarIcon, Edit } from "lucide-react";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import ProfileNumberEdit from "./ProfileNumberEdit";

const ProfileForm = () => {
  const form = useForm();

  const onSubmit = (values: any) => {};

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <div className='flex flex-wrap items-center gap-4 md:flex-nowrap'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='example@google.com'
                      {...field}
                      value='test@marvel.com.sa'
                      disabled
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Enter your first name'
                      {...field}
                      value='Marvel'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Enter your last name'
                      {...field}
                      value='Systems'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='flex flex-wrap items-center gap-4 md:flex-nowrap'>
            <FormField
              control={form.control}
              name='Phone'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Input
                        placeholder='05X xxx xxx xxx'
                        {...field}
                        value='055 123 456 789'
                        className='pointer-events-none'
                      />
                      <div className='absolute right-1 top-0.5 bg-background'>
                        <ProfileNumberEdit>
                          <Button
                            variant='link'
                            size='sm'
                            className='!no-underline'
                          >
                            <Edit
                              size={16}
                              strokeWidth={2.5}
                              className='mr-1 rtl:ml-1'
                            />
                            Edit
                          </Button>
                        </ProfileNumberEdit>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='birthday'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Birthday</FormLabel>
                  <div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0' align='start'>
                        <Calendar
                          mode='single'
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={date =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='nationality'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Nationality</FormLabel>
                  <FormControl>
                    <Select value='saudi'>
                      <SelectTrigger>
                        <SelectValue placeholder='Select Nationality' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='saudi'>Saudi Arabia</SelectItem>
                        <SelectItem value='egypt'>Egypt</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name='gender'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Select value='male'>
                    <SelectTrigger>
                      <SelectValue placeholder='Select Gender' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='male'>Male</SelectItem>
                      <SelectItem value='female'>Female</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Update Profile</Button>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
