import ProductTabReviewsCardListItem from "./ProductTabReviewsCardListItem";

// TODO: replace with real data
const REVIEWS_CARD_LIST = [
  {
    id: "1",
    avatarUrl: "",
    username: "Marvel Systems",
    date: "7/10/2024",
    starScore: 5,
    images: [
      "/images/product-page/review-img-1.webp",
      "/images/product-page/review-img-2.png",
      "/images/product-page/review-img-3.jpg",
    ],
    commentTitle: "Great product!",
    commentDescription:
      "The build quality of the phone is top-notch, with a sleek design that feels luxurious in the hand. The 6.8-inch AMOLED display is stunning, delivering vibrant colors and sharp details.",
  },
  {
    id: "2",
    avatarUrl: "",
    username: "Marvel Systems",
    date: "7/10/2024",
    starScore: 1,
    images: [],
    commentTitle: "Bad product!",
    commentDescription:
      "The build quality of the phone is top-notch, with a sleek design that feels luxurious in the hand. The 6.8-inch AMOLED display is stunning, delivering vibrant colors and sharp details.",
  },
  {
    id: "3",
    avatarUrl: "",
    username: "Marvel Systems",
    date: "7/10/2024",
    starScore: 4,
    images: [],
    commentTitle: "Nice product!",
    commentDescription:
      "The build quality of the phone is top-notch, with a sleek design that feels luxurious in the hand. The 6.8-inch AMOLED display is stunning, delivering vibrant colors and sharp details.",
  },
];

const ProductTabReviewsCardList = () => {
  return (
    <ul className='divide-y divide-border/40'>
      {REVIEWS_CARD_LIST.map(data => (
        <ProductTabReviewsCardListItem key={data.id} {...data} />
      ))}
    </ul>
  );
};

export default ProductTabReviewsCardList;
