import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
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
  ];
  return (
    <section className="flex flex-col">
      <ContentZone className="flex flex-col">
        <h2 className="text-semibold uppercase self-center еуч">
          наши мастера
        </h2>
        <MasterItem {...masters[0]} />
      </ContentZone>
    </section>
  );
};

export default MastersBlock;
