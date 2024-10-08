"use client";

// import { topVariant } from "@/lib/motion";
import { motion } from "framer-motion";

const ProductTabsDetails = () => {
  return (
    <motion.div
      // variants={topVariant({ delay: 0 })}
      // initial='hidden'
      // animate='show'
      initial={{ opacity: 0, top: 20 }}
      animate={{ opacity: 1, top: 0 }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        stiffness: 100,
      }}
      className='tabs__item relative space-y-3'
    >
      <p>
        <strong>
          Learn about the features of the best-selling headphones this year
        </strong>
      </p>
      <p>
        With an adjustable headband, soft ear cushions and a lightweight design,
        you can find the perfect fit and stay comfortable longer. Find your
        headphones with Fast Pair
      </p>
      <p>
        <strong>One click, </strong>
        The WH-CH520 headphones enable quick and effortless Bluetooth pairing
        with your Android devices.
      </p>
      <ul>
        <li>A listening experience personalized just for you.</li>
        <li>Maintain continuous energy for days.</li>
        <li>Very clear calls.</li>
      </ul>
      <p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/images/product-page/product-page-details-placeholder.webp'
          alt='Product Image'
        />
      </p>
      <p>
        <strong>More features</strong>
      </p>
      <p>
        With an adjustable headband, soft ear cushions and a lightweight design,
        you can find the perfect fit and stay comfortable longer. Find your
        headphones with Fast Pair With just one tap, the WH-CH520 headphones
        enable quick and effortless Bluetooth pairing with your Android devices.
      </p>
    </motion.div>
  );
};

export default ProductTabsDetails;
