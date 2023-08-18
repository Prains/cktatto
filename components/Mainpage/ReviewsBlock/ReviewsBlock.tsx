'use client'
import ContentZone from "@/components/ui/ContentZone/ContentZone";
import Image from "next/image";
import { leftLine } from "@/images/burger";
import { Carousel } from '@mantine/carousel';
import reviewImage from './77a0228dae80f24cc69f4bf9847be1ac.png'

const ReviewsBlock = () => {
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
            <Carousel.Slide>
              <Image src={reviewImage} width={291} height={451} alt="отзыв" className="object-contain h-[451px] rounded-[10px]" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={reviewImage} width={291} height={451} alt="отзыв" className="object-contain h-[451px] rounded-[10px]" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={reviewImage} width={291} height={451} alt="отзыв" className="object-contain h-[451px] rounded-[10px]" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={reviewImage} width={291} height={451} alt="отзыв" className="object-contain h-[451px] rounded-[10px]" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={reviewImage} width={291} height={451} alt="отзыв" className="object-contain h-[451px] rounded-[10px]" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={reviewImage} width={291} height={451} alt="отзыв" className="object-contain h-[451px] rounded-[10px]" />
            </Carousel.Slide>
          </Carousel>
      </ContentZone>
    </section>
   );
}
 
export default ReviewsBlock;