"use client";
import { Carousel } from "@mantine/carousel";
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
        <Carousel
            maw={320}
            mx="auto"
            slideGap="xl"
            withControls={false}
            withIndicators
            height={350}
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
      </ContentZone>
    </section>
  );
};

export default MastersBlock;
