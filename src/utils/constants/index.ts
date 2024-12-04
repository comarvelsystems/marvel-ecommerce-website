import {
  LocationIcon,
  OrdersIcon,
  PaymentsIcon,
  ProfileIcon,
  ReturnsIcon,
  ShieldUserIcon,
  WishlistIcon,
  CoinsIcon,
} from "@/components/solid-icons";

export const ACCOUNT_SIDEBAR_ITEM = [
  {
    label: "addresses",
    name: "addresses",
    href: "/addresses",
    icon: LocationIcon,
  },
  {
    label: "wishlist",
    name: "wishlist",
    href: "/wishlist",
    icon: WishlistIcon,
  },
  {
    label: "orders",
    name: "orders",
    href: "/orders",
    icon: OrdersIcon,
  },
  {
    label: "returns",
    name: "returns",
    href: "/returns",
    icon: ReturnsIcon,
  },
  {
    label: "payments",
    name: "payments",
    href: "/payments",
    icon: PaymentsIcon,
  },
  {
    label: "points",
    name: "points",
    href: "/points",
    icon: CoinsIcon,
  },
  {
    label: "profile",
    name: "profile",
    href: "/profile",
    icon: ProfileIcon,
  },
  {
    label: "security",
    name: "security-settings",
    href: "/security-settings",
    icon: ShieldUserIcon,
  },
];

export const POINTS_TABS = [
  {
    name: "All",
    label: "all",
  },
  {
    name: "Earned",
    label: "earned",
  },
  {
    name: "Spent",
    label: "spent",
  },
];

export const ORDERS_TABS = [
  {
    name: "All",
    label: "all",
  },
  {
    name: "Cancelled",
    label: "cancelled",
  },
];

export const PRODUCT_TABS = [
  {
    id: "1",
    title: "description.title",
    description: "description.description",
    label: "description",
  },
  {
    id: "2",
    title: "specifications.title",
    description: "specifications.description",
    label: "specifications",
  },
  {
    id: "3",
    title: "reviews.title",
    description: "reviews.description",
    label: "reviews",
  },
];

export const NAVBAR_ITEMS = [
  {
    title: "pages.perfume.title",
    label: "perfumes",
    href: "#",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "pages.makeups.title",
    label: "makeups",
    href: "#",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "pages.care.title",
    label: "care",
    href: "#",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "pages.brands.title",
    label: "brands",
    href: "#",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
];

export const LANGUAGES = [
  {
    id: 1,
    name: "العربية",
    abbreviation: "ar",
    icon_path: "/images/SA.png",
  },
  {
    id: 2,
    name: "English",
    abbreviation: "en",
    icon_path: "/images/GB.png",
  },
];

export const ACCOUNT_ITEMS = [
  {
    name: "pages.my-profile.title",
    label: "my-profile",
    href: "#",
  },
  {
    name: "pages.my-orders.title",
    label: "my-orders",
    href: "#",
  },
  {
    name: "pages.my-payments.title",
    label: "my-payments",
    href: "#",
  },
  {
    name: "pages.my-addresses.title",
    label: "my-address",
    href: "#",
  },
];
