"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import TrackingDatetime from "./TrackingDatetime";
import TrackingSummary from "./TrackingSummary";
import TrackingReviewCard from "./TrackingReviewCard";
import TrackingProductCard from "./TrackingProductCard";

const TrackingContainer = () => {
  return (
    <section className='space-y-8'>
      <header className='space-between flex flex-wrap gap-5 sm:flex-nowrap'>
        <div className='flex-1 space-y-1.5'>
          <Button
            variant='link'
            className='gap-1.5 px-0 text-muted-foreground/60 !no-underline hover:text-primary'
            asChild
          >
            <Link href='/orders'>
              <ArrowLeftIcon size={18} />
              Back to orders
            </Link>
          </Button>
          <Heading as='h1' className='!text-3xl'>
            Tracking Details
          </Heading>
          <p className='font-medium text-muted-foreground'>
            View your item's delivery information
          </p>
        </div>
      </header>
      <div className='flex flex-col items-start gap-y-5 xl:flex-row'>
        <div className='w-full flex-1 space-y-4'>
          <TrackingDatetime />
          <TrackingReviewCard />
          <TrackingProductCard />
        </div>
        <TrackingSummary />
      </div>
    </section>
  );
};

export default TrackingContainer;
