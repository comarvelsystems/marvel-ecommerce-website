import React from "react";
import RegularBanner from "./RegularBanner";
import FeaturedBanner from "./FeaturedBanner";

// TODO: Replace with real api
const FAKE_BANNERS = {
  bannerType: "regular",
  banners: [
    {
      id: "1",
      imageUrl: "/images/banners/banner-1.png",
      href: "#",
      col: 4,
    },
    {
      id: "2",
      imageUrl: "/images/banners/banner-2.png",
      href: "#",
      col: 4,
    },
    {
      id: "3",
      imageUrl: "/images/banners/banner-3.png",
      href: "#",
      col: 4,
    },
  ],
};

const FAKE_FEATURES_BANNERS = {
  banners: [
    {
      id: "1",
      imageUrl: "https://placehold.jp/780x600.png",
      href: "#",
      col: 4,
    },
    {
      id: "2",
      imageUrl: "https://placehold.jp/780x288.png",
      href: "#",
      col: 4,
    },
    {
      id: "3",
      imageUrl: "https://placehold.jp/780x288.png",
      href: "#",
      col: 4,
    },
  ],
};

const Banner = () => {
  const { bannerType } = FAKE_BANNERS;

  return (
    <>
      {bannerType === "regular" && <RegularBanner data={FAKE_BANNERS} />}
      {bannerType === "featured" && (
        <FeaturedBanner data={FAKE_FEATURES_BANNERS} />
      )}
    </>
  );
};

export default Banner;
