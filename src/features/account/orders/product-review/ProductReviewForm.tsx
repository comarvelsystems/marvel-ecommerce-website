"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Heading from "@/components/Heading";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const ProductReviewForm = () => {
  const [images, setImages] = useState<ImageListType>([]);
  const form = useForm();
  const maxNumber = 5;

  const onSubmit = () => {
    console.log("Submitting");
  };

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined,
  ) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className='space-y-5'>
      <Heading as='h3' className='text-base'>
        Write a product review
      </Heading>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Add a title</FormLabel>
                <FormControl>
                  <Input
                    placeholder='What would you like to highlight'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='review'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Add a review</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder='What did you like or dislike? How did you use the product? What should others know before buying?'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='space-y-6'>
            <Heading as='h3' className='text-base'>
              Add images (Optional)
            </Heading>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              acceptType={["jpg", "jpeg", "png", "webp"]}
              maxFileSize={5242880}
            >
              {({
                imageList,
                onImageUpload,
                onImageRemove,
                isDragging,
                dragProps,
                errors,
              }) => (
                <>
                  {errors && (
                    <>
                      {errors.acceptType && (
                        <p className='block rounded-sm bg-destructive/10 px-4 py-1 text-destructive'>
                          Your selected file type is not allow, acceptType is
                          <strong> jpg, jpeg, png, webp</strong>
                        </p>
                      )}
                      {errors.maxFileSize && (
                        <p className='block rounded-sm bg-destructive/10 px-4 py-1 text-destructive'>
                          Selected file size exceed maxFileSize, maxFileSize is
                          <strong> 5MB</strong>
                        </p>
                      )}
                    </>
                  )}

                  <div className='flex flex-wrap items-start gap-5'>
                    <div>
                      <Button
                        variant='outline'
                        size='lg'
                        onClick={onImageUpload}
                        {...dragProps}
                        className={cn(
                          "gap-2 border-dashed border-zinc-400 py-10 text-muted-foreground",
                          images.length > 0 && "bg-muted",
                          isDragging &&
                            "border-primary bg-primary/10 text-primary",
                        )}
                        disabled={images.length + 1 === maxNumber}
                      >
                        <Camera size={22} />
                        {images.length === 0 ? "Upload" : "Upload another"}
                      </Button>
                    </div>
                    <div className='flex flex-wrap items-start gap-4'>
                      {imageList.map((image, index) => (
                        <div key={index} className='relative'>
                          <Image
                            src={image.dataURL as string}
                            alt='Image'
                            height={0}
                            width={0}
                            sizes='100vw'
                            className='h-20 w-auto rounded-sm'
                          />
                          <div className='absolute -right-2 -top-2'>
                            <Button
                              variant='destructive'
                              className='h-6 rounded-full p-1'
                              onClick={() => onImageRemove(index)}
                            >
                              <X size={16} strokeWidth={3} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </ImageUploading>
            <ul className='space-y-1 text-xs text-muted-foreground/70'>
              <li>- Upload up to 5 images</li>
              <li>- Maximum file size is 5 MB</li>
              <li>- Limited to JPG, JPEG, PNG and WEBP</li>
            </ul>
          </div>
          <Button type='submit' size='lg'>
            Submit Review
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProductReviewForm;
