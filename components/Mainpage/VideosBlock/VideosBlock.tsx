'use client'
import ContentZone from "@/components/ui/ContentZone/ContentZone";
import Image from "next/image";
import { leftLine } from "@/images/burger";
import { Carousel } from '@mantine/carousel';

const VideosBlock = () => {

  const videos = [
    {
      id: 1,
      video: '/Ulta.mp4'
    },
    {
      id: 2,
      video: '/Ulta.mp4'
    },
    {
      id: 3,
      video: '/Ulta.mp4'
    },
  ]

  return ( 
    <section>
      <ContentZone>
        <h3 className="text-semibold mb-8 flex items-center justify-center uppercase">
          <Image
            src={leftLine}
            alt="черная линия"
            priority
            className="absolute left-[-18px]"
          />
          видео о нас
        </h3>
          <Carousel
            maw={320}
            mx="auto"
            slideGap="xl"
            withControls={false}
            withIndicators
            height={215}
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
            {videos.map(item => {
              return (
                <Carousel.Slide key={item.id}>
                  <video src={item.video} controls style={{ width: "291px", height: "190px", borderRadius: "10px" }} />
                </Carousel.Slide>
              )
            })}
          </Carousel>
      </ContentZone>
    </section>
   );
}
 
export default VideosBlock;