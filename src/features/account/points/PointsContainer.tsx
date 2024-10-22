import Heading from "@/components/Heading";
import PointsBanner from "./PointsBanner";
import PointsTabs from "./PointsTabs";

const PointsContainer = () => {
  return (
    <section className='space-y-8'>
      <header className='space-between flex flex-wrap gap-5 sm:flex-nowrap'>
        <div className='flex-1 space-y-1.5'>
          <Heading as='h1' className='!text-3xl'>
            Points
          </Heading>
          <p className='text-base text-muted-foreground'>
            Earn points with every purchase for discounts or shipping
          </p>
        </div>
      </header>
      <PointsBanner />
      <PointsTabs />
    </section>
  );
};

export default PointsContainer;
