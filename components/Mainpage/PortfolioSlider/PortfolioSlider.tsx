"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";
import Image from "next/image";
import Link from "next/link";

interface PSlider {
  portfolioImages: { src: string }[];
}

const PortfolioSlider = ({ portfolioImages }: PSlider) => {
  return (
    <section className="flex flex-col gap-9">
      <h2 className="uppercase text-semibold text-stone-500 self-center">
        портфолио
      </h2>
      <div className="z-0">
        <Swiper
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
        </Swiper>
      </div>
      <Link href={"/"} className="uppercase button px-10 self-center">
        больше работ
      </Link>
    </section>
  );
};

export default PortfolioSlider;
