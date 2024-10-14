import CartListItem from "./CartListItem";

const CART_ITEMS = [
  {
    id: "1",
    title: "QT82 TWS Wireless BT Headphone Black",
    imageUrl: "/images/products/product-2.webp",
    price: 210,
    href: "/product-slug",
  },
  {
    id: "1",
    title: "QT82 TWS Wireless BT Headphone Black",
    imageUrl: "/images/products/product-3.webp",
    price: 210,
    href: "/product-slug",
  },
  {
    id: "1",
    title: "QT82 TWS Wireless BT Headphone Black",
    imageUrl: "/images/products/product-4.webp",
    price: 210,
    href: "/product-slug",
  },
];

const CartList = () => {
  return (
    <>
      <ul className='w-full flex-1 space-y-5'>
        {CART_ITEMS.map((item, index) => (
          <CartListItem key={item.id} {...item} index={index} />
        ))}
      </ul>
    </>
  );
};

export default CartList;
