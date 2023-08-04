import { leftLine } from "@/images/burger";
import Image from "next/image";
import aboutStudioImage from "./123.png";
import ContentZone from "@/components/ui/ContentZone/ContentZone";

const AboutStudioBlock = () => {
  return (
    <section>
      <ContentZone>
        <h3 className="text-semibold flex items-center justify-center uppercase">
          <Image
            src={leftLine}
            alt="черная стрелочка"
            priority
            className="absolute left-0"
          />
          О студии
        </h3>
        <Image
          src={aboutStudioImage.src}
          alt="фото студии"
          width={290}
          height={182}
          className="mx-auto mt-7 rounded-[10px]"
        />
        <p className="text-main my-6">
          В центре города, в Балашихинской хлопкопрядильной фабрике 1830 г.,
          которая на сегодняшний день является памятником архитектуры, в нашем
          потрясающем «200 летнем замке», в главном корпусе, на сам ом высоком
          этаже с видом на закат, существует студия “Стальной клык”
        </p>
        <div className="flex items-center justify-center gap-8">
          <button className="button !py-3 px-9 uppercase">
            больше <br />о студии
          </button>
          <button className="text-main border border-[#1A0F0C] px-6 py-2 uppercase">
            добраться <br />
            до нас
          </button>
        </div>
      </ContentZone>
    </section>
  );
};

export default AboutStudioBlock;
