import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Overlay from "@/components/ui/Overlay/Overlay";

interface ActiveStory {
  setOpen(value: boolean): void;
  stories: {
    image: string;
  }[];
  pagination: number;
}

const ActiveStory = ({ setOpen, stories, pagination }: ActiveStory) => {
  return (
    <Overlay>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        initialSlide={pagination}
      >
        {stories.map((story) => (
          <SwiperSlide
            key={story.image}
            className="flex items-center justify-center mx-auto"
          >
            <div
              className="mx-auto bg-neutral-800 w-[205px] h-[385px] rounded-[25px] lg:w-[360px] lg:h-[679px] flex items-center justify-center self-center"
              onClick={() => setOpen(false)}
            >
              <Image
                src={story.image}
                alt="story"
                width={180}
                height={358}
                className="object-cover object-center rounded-[20px] lg:w-[315px] lg:h-[631px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Overlay>
  );
};

export default ActiveStory;
