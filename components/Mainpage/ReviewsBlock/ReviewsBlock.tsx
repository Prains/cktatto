'use client'
import ContentZone from "@/components/ui/ContentZone/ContentZone";
import Image from "next/image";
import reviewImage from './77a0228dae80f24cc69f4bf9847be1ac.png'
import { leftLine } from "@/images/burger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import './styles.css';

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
    {
      id: 7,
      image: reviewImage.src
    },
    {
      id: 8,
      image: reviewImage.src
    },
    {
      id: 9,
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
          <Swiper
            className="mb-10 h-[475px]"
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {reviews.map(review => {
              return (
                <SwiperSlide key={review.id}>
                  <Image alt="123" width={290} height={451} src={review.image} className="rounded-[10px] h-[451px]" />
                </SwiperSlide>
              )
            })}
          </Swiper>
      </ContentZone>
    </section>
   );
}
 
export default ReviewsBlock;