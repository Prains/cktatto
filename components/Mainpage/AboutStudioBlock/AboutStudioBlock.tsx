import { leftLine } from "@/images/burger";
import Image from "next/image";
import aboutStudioImage from "./123.png";
import ContentZone from "@/components/ui/ContentZone/ContentZone";
import Link from "next/link";

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
        <p className="text-main my-6 text-center">
          В центре города, в Балашихинской хлопкопрядильной фабрике 1830 г.,
          которая на сегодняшний день является памятником архитектуры, в нашем
          потрясающем «200 летнем замке», в главном корпусе, на сам ом высоком
          этаже с видом на закат, существует студия “Стальной клык”
        </p>
        <div className="w-full h-[41px] flex items-center justify-center gap-8">
          <Link className="button w-full !py-[6px] leading-[14px] px-9 text-center uppercase" href={"/"}>
            больше <br />о студии
          </Link>
          <Link
            href={"/"}
            className="text-main !leading-normal border border-[#1A0F0C] rounded-[5px] leading-[14px] w-full px-6 py-[4px] text-center uppercase"
          >
            добраться <br />
            до нас
          </Link>
        </div>
      </ContentZone>
    </section>
  );
};

export default AboutStudioBlock;
