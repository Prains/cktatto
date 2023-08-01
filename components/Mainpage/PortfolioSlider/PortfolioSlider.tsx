"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

interface PSlider {
  portfolioImages: string[];
}

const PortfolioSlider = ({ portfolioImages }: PSlider) => {
  return (
    <section className="flex items-center justify-center flex-col">
      <h2 className="uppercase text-semibold text-stone-500">портфолио</h2>
      <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
        {portfolioImages.map((image, index) => {
          return (
            <SwiperSlide
              key={index}
            >
              <Image
                src={image}
                alt="изображение татуировки на теле человека"
                width={290}
                height={387}
                priority
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default PortfolioSlider;
