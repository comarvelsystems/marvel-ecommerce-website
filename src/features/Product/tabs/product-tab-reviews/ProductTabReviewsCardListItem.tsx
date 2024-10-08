import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Heading from "@/components/Heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import StarsReview from "@/components/RatingStars";

interface Props {
  id?: string;
  avatarUrl: string;
  username: string;
  date: string;
  starScore: number;
  images: string[];
  commentTitle: string;
  commentDescription: string;
}

const ProductTabReviewsCardListItem: React.FC<Props> = ({
  avatarUrl,
  username,
  date,
  starScore,
  images,
  commentTitle,
  commentDescription,
}) => {
  return (
    <li className='py-6'>
      <Card className='border-transparent shadow-none'>
        <CardHeader className='p-0'>
          <div className='flex items-start gap-3'>
            <Avatar>
              <AvatarImage src={avatarUrl} alt={username} />
              <AvatarFallback className='font-bold text-muted-foreground'>
                A
              </AvatarFallback>
            </Avatar>
            <div className='space-y-0.5'>
              <div className='text-sm font-semibold'>{username}</div>
              <div className='text-xs text-muted-foreground'>{date}</div>
            </div>
            <div className='flex items-center'>
              <StarsReview score={starScore} />
            </div>
          </div>
        </CardHeader>
        <CardContent className='mt-4 p-0'>
          <div className='space-y-2'>
            {images.length > 0 && (
              <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames='flex items-center gap-2'
              >
                {images.map((image, index) => (
                  <a
                    key={index}
                    href={image}
                    className='overflow-hidden rounded-md'
                  >
                    <Image
                      alt={`Image ${index}`}
                      src={image}
                      width={40}
                      height={40}
                      className='size-10 object-cover'
                    />
                  </a>
                ))}
              </LightGallery>
            )}
            <Heading as='h6'>{commentTitle}</Heading>
            <p className='text-muted-foreground'>{commentDescription}</p>
          </div>
        </CardContent>
      </Card>
    </li>
  );
};

export default ProductTabReviewsCardListItem;
