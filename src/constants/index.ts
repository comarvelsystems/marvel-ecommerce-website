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
    name: "Addresses",
    label: "addresses",
    href: "/addresses",
    icon: LocationIcon,
  },
  {
    name: "Wishlist",
    label: "wishlist",
    href: "/wishlist",
    icon: WishlistIcon,
  },
  {
    name: "Orders",
    label: "orders",
    href: "/orders",
    icon: OrdersIcon,
  },
  {
    name: "Returns",
    label: "returns",
    href: "/returns",
    icon: ReturnsIcon,
  },
  {
    name: "Payments",
    label: "payments",
    href: "/payments",
    icon: PaymentsIcon,
  },
  {
    name: "Points",
    label: "points",
    href: "/points",
    icon: CoinsIcon,
  },
  {
    name: "Profile",
    label: "profile",
    href: "/profile",
    icon: ProfileIcon,
  },
  {
    name: "Security Settings",
    label: "security-settings",
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
