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
