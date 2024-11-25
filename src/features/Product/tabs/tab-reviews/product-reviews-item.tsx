import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import StarsReview from "@/components/RatingStars";
import { Review } from "@/utils/@types";

const ProductReviewsItem: React.FC<Review> = ({
  author,
  text,
  rating,
  date_added,
}) => {
  return (
    <li className='py-6'>
      <Card className='border-transparent shadow-none'>
        <CardHeader className='p-0'>
          <div className='flex items-start gap-3'>
            <Avatar>
              <AvatarFallback className='font-bold text-muted-foreground'>
                {author.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className='space-y-0.5'>
              <div className='text-sm font-semibold'>{author}</div>
              <div className='text-xs text-muted-foreground'>{date_added}</div>
            </div>
            <div className='flex items-center'>
              <StarsReview score={rating} />
            </div>
          </div>
        </CardHeader>
        <CardContent className='mt-4 p-0'>
          <div className='space-y-2'>
            <p className='text-muted-foreground'>{text}</p>
          </div>
        </CardContent>
      </Card>
    </li>
  );
};

export default ProductReviewsItem;
