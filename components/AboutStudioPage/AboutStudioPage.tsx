import Image from "next/image";
import BackgroundLionImage from "../ui/BackgroundLionImage/BackgroundLionImage";
import TitleWithLine from "../ui/TitleWithLine/TitleWithLine";
import aboutStudioImage from "../Mainpage/AboutStudioBlock/123.png";
import ContentZone from "../ui/ContentZone/ContentZone";

const AboutStudioPage = () => {
  return (
    <main>
      <BackgroundLionImage />
      <TitleWithLine text="О студии" className=" mb-16" />
      <ContentZone>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={aboutStudioImage}
            alt="картинка о студии"
            width={291}
            height={219}
            className="mx-auto mb-5 rounded-lg"
          />
          <p className="text-main text-center">
            В центре города, в Балашихинской хлопкопрядильной фабрике 1830 г.,
            которая на сегодняшний день является памятником архитектуры, в нашем
            потрясающем «200 летнем замке», в главном корпусе, на самом высоком
            этаже с видом на закат, существует студия “Стальной клык”
          </p>
        </div>
      </ContentZone>
    </main>
  );
};

export default AboutStudioPage;
