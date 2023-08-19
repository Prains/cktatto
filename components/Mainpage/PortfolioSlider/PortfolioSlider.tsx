"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";
import Image from "next/image";
import Link from "next/link";
import { leftLine } from "@/images/burger";
import { Carousel } from "@mantine/carousel";

interface PSlider {
  portfolioImages: { src: string }[];
}

const PortfolioSlider = ({ portfolioImages }: PSlider) => {
  return (
    <section className="flex flex-col">
      <h2 className="flex items-center uppercase text-semibold text-stone-500 self-center mb-9">
        <Image
          src={leftLine}
          alt="черная полоска"
          className="absolute left-0"
          priority
        />
        портфолио
      </h2>
      <div className="z-0">
        <Carousel
          className="mb-6"
          maw={320}
          mx="auto"
          slideGap="xl"
          withControls={false}
          withIndicators
          height={253}
          styles={{
            indicators: {
              bottom: '0 !important',
            },
            indicator: {
              width: '5px',
              height: '5px',
              border: '1px solid #83746E',
              borderRadius: 50,
              transition: 'width 250ms ease',

              '&[data-active]': {
                backgroundColor: '#83746E !important',
              },
            },
          }}
        >
          {portfolioImages.map((image, index) => {
            return (
              <Carousel.Slide key={index} className="z-0">
                <Image
                  src={image.src}
                  alt="изображение татуировки на теле человека"
                  width={290}
                  height={387}
                  className="mx-auto rounded-[10px] z-0"
                />
              </Carousel.Slide>
            );
          })}
        </Carousel>
        {/* <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          className="z-0"
        >
          {portfolioImages.map((image, index) => {
            return (
              <SwiperSlide key={index} className="z-0">
                <Image
                  src={image.src}
                  alt="изображение татуировки на теле человека"
                  width={290}
                  height={387}
                  className="mx-auto rounded-[10px] z-0"
                />
              </SwiperSlide>
            );
          })}
        </Swiper> */}
      </div>
      <Link href={"/"} className="uppercase button px-10 self-center">
        больше работ
      </Link>
    </section>
  );
};

export default PortfolioSlider;
