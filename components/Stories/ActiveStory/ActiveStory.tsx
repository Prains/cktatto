import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface ActiveStory {
  setOpen(value: boolean): void;
  stories: {
    image: string;
  }[];
  pagination: number;
}

const ActiveStory = ({ setOpen, stories }: ActiveStory) => {
  return (
    <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
      {stories.map((story) => (
        <SwiperSlide key={story.image}>
          <div
            className="w-full h-full flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            <Image
              src={story.image}
              alt="story"
              width={180}
              height={358}
              className="object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
      <article>
        <div></div>
      </article>
    </Swiper>
  );
};

export default ActiveStory;
