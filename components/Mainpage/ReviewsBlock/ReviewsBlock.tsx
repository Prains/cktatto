'use client'
import ContentZone from "@/components/ui/ContentZone/ContentZone";
import Image from "next/image";
import { leftLine } from "@/images/burger";
import { Carousel } from '@mantine/carousel';
import reviewImage from './77a0228dae80f24cc69f4bf9847be1ac.png'

const ReviewsBlock = () => {

  const reviews = [
    {
      id: 1,
      image: reviewImage.src
    },
    {
      id: 2,
      image: reviewImage.src
    },
    {
      id: 3,
      image: reviewImage.src
    },
    {
      id: 4,
      image: reviewImage.src
    },
    {
      id: 5,
      image: reviewImage.src
    },
    {
      id: 6,
      image: reviewImage.src
    },
  ]

  return ( 
    <section>
      <ContentZone>
        <h3 className="text-semibold mb-8 flex items-center justify-center uppercase">
            <Image
              src={leftLine}
              alt="черная линия"
              priority
              className="absolute left-[-39px]"
            />
            отзывы клиентов
          </h3>
          <Carousel
            maw={320}
            mx="auto"
            slideGap="xl"
            withControls={false}
            withIndicators
            height={472}
            styles={{
              indicators: {
                bottom: '0 !important',
              },
              indicator: {
                width: '5px',
                height: '5px',
                border: '1px solid black',
                borderRadius: 50,
                transition: 'width 250ms ease',

                '&[data-active]': {
                  backgroundColor: '#000 !important',
                },
              },
            }}
          >
            {reviews.map(review => {
              return (
                <Carousel.Slide key={review.id}>
                  <Image src={review.image} width={291} height={451} alt="отзыв" className="object-contain h-[451px] rounded-[10px]" />
                </Carousel.Slide>
              )
            })}
          </Carousel>
      </ContentZone>
    </section>
   );
}
 
export default ReviewsBlock;