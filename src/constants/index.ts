import {
  LocationIcon,
  OrdersIcon,
  PaymentsIcon,
  ProfileIcon,
  ReturnsIcon,
  ShieldUserIcon,
  WishlistIcon,
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
    href: "/Orders",
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
    name: "Profile",
    label: "profile",
    href: "/Profile",
    icon: ProfileIcon,
  },
  {
    name: "Security Settings",
    label: "security-settings",
    href: "/security-settings",
    icon: ShieldUserIcon,
  },
];
