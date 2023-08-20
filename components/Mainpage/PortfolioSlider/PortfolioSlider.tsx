"use client";
import Image from "next/image";
import Link from "next/link";
import { leftLine } from "@/images/burger";
import { leftLineDesktop, rightLineDesktop } from "@/images/desktop";
import { Carousel } from "@mantine/carousel";

interface PSlider {
  portfolioImages: { src: object }[];
}

const PortfolioSlider = ({ portfolioImages }: PSlider) => {
  return (
    <section className="flex flex-col">
      <h2 className="flex items-center uppercase text-semibold text-stone-500 self-center mb-9 xl:mb-[96px]">
        <Image
          src={leftLine}
          alt="черная полоска"
          className="absolute left-0 sm:hidden"
          priority
        />
        <Image
          src={leftLineDesktop}
          alt="черная полоска"
          className="absolute left-[-250px] hidden xl:block lg:left-[-150px] xl:left-0"
          priority
        />
        <Image
          src={rightLineDesktop}
          alt="черная полоска"
          className="absolute right-[-250px] hidden xl:block lg:right-[-150px] xl:right-0"
          priority
        />
        портфолио
      </h2>
      <div className="z-0">
        <Carousel
          className="mb-6 xl:hidden"
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
              <>
                <Carousel.Slide key={index} className="z-0">
                  <Image
                  // BUG Не понял, как правильно поменять типизацию
                    src={image.img1.src}
                    alt="изображение татуировки на теле человека"
                    width={290}
                    height={232}
                    className="mx-auto rounded-[10px] h-[232px] z-0 object-cover object-center"
                  />
                </Carousel.Slide>
                <Carousel.Slide key={index} className="z-0">
                <Image
                  src={image.img2.src}
                  alt="изображение татуировки на теле человека"
                  width={290}
                  height={387}
                  className="mx-auto rounded-[10px] h-[232px] z-0 object-cover object-center"
                  />
                  </Carousel.Slide>
                  <Carousel.Slide key={index} className="z-0">
                  <Image
                    src={image.img3.src}
                    alt="изображение татуировки на теле человека"
                    width={290}
                    height={387}
                    className="mx-auto rounded-[10px] h-[232px] z-0 object-cover object-center"
                  />
                  </Carousel.Slide>
              </>
            );
          })}
        </Carousel>
        <Carousel
          className="mb-6 hidden xl:block"
          maw={1280}
          mx="auto"
          slideGap="xl"
          withControls={false}
          withIndicators
          height={693}
          styles={{
            indicators: {
              bottom: '0 !important',
            },
            indicator: {
              width: '10px',
              height: '10px',
              border: '2px solid #83746E',
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
              <>
                <Carousel.Slide key={index} className="z-0">
                  <div className="flex gap-10 justify-center">
                    <Image
                    // BUG Не понял, как правильно поменять типизацию
                      src={image.img1.src}
                      alt="изображение татуировки на теле человека"
                      width={290}
                      height={232}
                      className="rounded-[10px] z-0 w-[560px] h-[638px] object-contain object-center"
                    />
                    <div className="flex flex-col gap-10">
                      <Image
                      src={image.img2.src}
                      alt="изображение татуировки на теле человека"
                      width={290}
                      height={387}
                      className="mx-auto rounded-[10px] w-[560px] h-[300px] object-contain object-center z-0"
                      />
                      <Image
                        src={image.img3.src}
                        alt="изображение татуировки на теле человека"
                        width={290}
                        height={387}
                        className="mx-auto rounded-[10px] w-[560px] h-[300px] object-contain object-center z-0"
                      />
                    </div>
                  </div>
                  </Carousel.Slide>
              </>
            );
          })}
        </Carousel>
      </div>
      <Link href={"/"} className="uppercase button px-10 self-center xl:mt-[32px] xl:w-[400px] xl:h-[80px] xl:text-center">
        больше работ
      </Link>
    </section>
  );
};

export default PortfolioSlider;
