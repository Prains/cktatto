import Image from "next/image";
import { Carousel } from "@mantine/carousel";
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
      <Carousel
        initialSlide={pagination}
        maw={320}
        mx="auto"
        withControls={false}
        withIndicators
        height={422}
        styles={{
          indicators: {
            bottom: '0 !important',
          },
          indicator: {
            width: '20px',
            height: '4px',
            border: 'none',
            backgroundColor: '#E0E0E0 !important',
            borderRadius: 50,
            opacity: '1 !important',
            transition: 'width 250ms ease',

            '&[data-active]': {
              backgroundColor: '#FF00C7C4 !important',
              opacity: '1 !important',
            },
          },
        }}
      >
        {stories.map(story => {
          return (
            <Carousel.Slide key={story.image}>
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
            </Carousel.Slide>
          )
        })}
      </Carousel>
    </Overlay>
  );
};

export default ActiveStory;
