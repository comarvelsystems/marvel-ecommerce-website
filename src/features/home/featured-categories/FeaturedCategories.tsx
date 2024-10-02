import Link from "next/link";
import Heading from "@/components/Heading";
import FeaturedCategorySlider from "./FeaturedCategoriesSlider";

// TODO: Replace with real api
const FAKE_FEATURED_CATEGORIES_TITLES = [
  {
    id: "1",
    title: "Cake & Milk",
    href: "#",
  },
  {
    id: "2",
    title: "Coffes & Teas",
    href: "#",
  },
  {
    id: "3",
    title: "Pet Foods",
    href: "#",
  },
  {
    id: "4",
    title: "Vegetables",
    href: "#",
  },
];

const FeaturedCategories = () => {
  return (
    <section className='s-padding'>
      <div className='s-container'>
        <div className='space-y-8'>
          <header className='flex flex-col items-start gap-4 xl:flex-row xl:items-center xl:gap-7'>
            <Heading as='h3'>Featured Categories</Heading>
            <ul className='hidden sm:flex sm:items-center sm:gap-6'>
              {FAKE_FEATURED_CATEGORIES_TITLES.map(({ id, title, href }) => (
                <li key={id} className='text-base font-semibold capitalize'>
                  <Link
                    href={href}
                    className='block transition-transform duration-300 hover:-translate-y-1 hover:text-primary'
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </header>
          <FeaturedCategorySlider />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
