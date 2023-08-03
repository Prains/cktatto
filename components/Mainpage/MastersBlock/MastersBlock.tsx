"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import masterImage from "./2023-04-06 2.30 2.png";
import MasterItem from "./MasterItem/MasterItem";
import ContentZone from "@/components/ui/ContentZone/ContentZone";

const MastersBlock = () => {
  const masters = [
    {
      image: masterImage.src,
      name: "Максим Витолиньш",
      experience: 15,
      role: "Топ-мастер, преподаватель",
      price: 15000,
    },
    {
      image: masterImage.src,
      name: "Максим Витолиньш",
      experience: 15,
      role: "Топ-мастер, преподаватель",
      price: 15000,
    },
    {
      image: masterImage.src,
      name: "Максим Витолиньш",
      experience: 15,
      role: "Топ-мастер, преподаватель",
      price: 15000,
    },
  ];
  return (
    <section>
      <ContentZone>
        <h2 className="text-semibold mb-11 self-center text-center uppercase">
          наши мастера
        </h2>
        <Swiper modules={[Navigation]} navigation>
          {masters.map((master, index) => {
            return (
              <SwiperSlide key={index}>
                <MasterItem {...master} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ContentZone>
    </section>
  );
};

export default MastersBlock;
