import CheckoutOrderListItem from "./CheckoutOrderListItem";
import Heading from "@/components/Heading";

// TODO: replace with real data
const ORDERS = [
  {
    id: "1",
    brand: "Sumsung",
    title: "QT82 TWS Wireless BT Headphone Black",
    imageUrl: "/images/products/product-2.webp",
    price: 210,
    count: 1,
    shipping: "Sat, Oct 12",
  },
  {
    id: "2",
    brand: "Apple",
    title: "QT82 TWS Wireless BT Headphone Black",
    imageUrl: "/images/products/product-3.webp",
    price: 210,
    count: 1,
    shipping: "Sat, Oct 18",
  },
  {
    id: "3",
    brand: "Apple",
    title: "QT82 TWS Wireless BT Headphone Black",
    imageUrl: "/images/products/product-4.webp",
    price: 210,
    count: 1,
    shipping: "Sat, Oct 21",
  },
];

const CheckoutOrderList = () => {
  return (
    <div className='space-y-4'>
      <Heading as='h2' className='text-xl'>
        Your Order
      </Heading>
      <ul className='space-y-5'>
        {ORDERS.map((order, index) => (
          <CheckoutOrderListItem key={order.id} {...order} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default CheckoutOrderList;
