"use client";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { rightLineDesktop } from "@/images/desktop";
import masterImage from "./photo.png";
import masterImage2 from "./photo2.png";
import masterImage3 from "./photo3.png";
import masterImage4 from "./photo4.png";
import masterImage5 from "./photo5.png";
import MasterItem from "./MasterItem/MasterItem";
import ContentZone from "@/components/ui/ContentZone/ContentZone";
import Link from "next/link";

const MastersBlock = () => {
  const masters = [
    {
      id: 1,
      image: masterImage.src,
      name: "Максим Витолиньш",
      experience: 15,
      role: "Топ-мастер, преподаватель",
      price: 15000,
    },
    {
      id: 2,
      image: masterImage2.src,
      name: "Полина",
      experience: 8,
      role: "Мастер",
      price: 13000,
    },
    {
      id: 3,
      image: masterImage3.src,
      name: "Мария",
      experience: 8,
      role: "Мастер",
      price: 12000,
    },
    {
      id: 4,
      image: masterImage4.src,
      name: "Евгений",
      experience: 2,
      role: "Мастер",
      price: 6000,
    },
    {
      id: 5,
      image: masterImage5.src,
      name: "Анастасия",
      experience: 1,
      role: "Мастер",
      price: 6000,
    },
  ];
  return (
    <section>
      <ContentZone>
        <h2 className="text-semibold mb-11 self-center text-center uppercase lg:mb-24 lg:text-[#83746E] xl:relative">
          <Image
            src={rightLineDesktop}
            alt="черная полоска"
            className="absolute right-[-63px] top-[35%] hidden xl:block"
            priority
          />
          наши мастера
        </h2>
        <Carousel
            className="lg:hidden"
            maw={420}
            mx="auto"
            slideGap="xl"
            withControls={false}
            withIndicators
            height={'calc((100vw - 320px) / (768 - 320) * (400 - 350) + 350px)'}
            mah={400}
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
            {masters.map((master, index) => {
              return (
                <Carousel.Slide key={index}>
                  <MasterItem {...master} />
                </Carousel.Slide>
              );
            })}
        </Carousel>
        <div className="flex-col gap-10 hidden lg:flex lg:mb-24">
          {masters.map((master, index) => {
            return (
              <div key={index}>
                <MasterItem {...master} />
              </div>
            );
          })}
        </div>
        <Link href={'/'} className="hidden lg:flex justify-center items-center w-[440px] h-[80px] mx-auto button uppercase">работы мастеров</Link>
      </ContentZone>
    </section>
  );
};

export default MastersBlock;
