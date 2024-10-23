import OrdersListItem from "./OrdersListItem";

// TODO: replace with real API
const ORDERS_ITEMS = [
  {
    id: "1",
    title: "QT82 TWS Wireless BT Headphone Black",
    imageUrl: "/images/products/product-2.webp",
    href: "/product-slug",
    orderNumber: "501-213784-0221170",
    datetime: "Saturday, 23 July 2022, 01:36 PM",
    isDelivered: true,
  },
  {
    id: "2",
    title: "QT82 TWS Wireless BT Headphone Black",
    imageUrl: "/images/products/product-3.webp",
    href: "/product-slug",
    orderNumber: "501-213784-0221170",
    datetime: "Saturday, 23 July 2022, 01:36 PM",
    isDelivered: false,
  },
  {
    id: "3",
    title: "QT82 TWS Wireless BT Headphone Black",
    imageUrl: "/images/products/product-4.webp",
    href: "/product-slug",
    orderNumber: "501-213784-0221170",
    datetime: "Saturday, 23 July 2022, 01:36 PM",
    isDelivered: true,
  },
];

const OrdersList = () => {
  return (
    <ul className='space-y-4'>
      {ORDERS_ITEMS.map((point, index) => (
        <OrdersListItem key={point.id} {...point} index={index} />
      ))}
    </ul>
  );
};

export default OrdersList;
