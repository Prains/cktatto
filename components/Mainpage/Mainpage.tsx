import DesktopMainBlock from "./DesktopMainBlock/DesktopMainBlock";
import Stories from "../Stories/Stories";
import mock from "./8Z_Xg94fa-OZfQcEwYASHPNqy7EiVV5ewviDYdyO1hIXazkzvcQvjGSkE9eYVW5hJV9xFo3EoIjE-qwiPikpBX5I 1.png";
import AboutStudioBlock from "./AboutStudioBlock/AboutStudioBlock";
import AdvantagesBlock from "./AdvantagesBlock/AdvantagesBlock";
import EducatuonBlock from "./EducatuonBlock/EducatuonBlock";
import InfoBlock from "./InfoBlock/InfoBlock";
import MastersBlock from "./MastersBlock/MastersBlock";
import MobileMainBlock from "./MobileMainBlock/MobileMainBlock";
import PortfolioSlider from "./PortfolioSlider/PortfolioSlider";
import ReviewsBlock from "./ReviewsBlock/ReviewsBlock";
import VideosBlock from "./VideosBlock/VideosBlock";
import portfolioMock from "./portfSmall.png";
import portfolioBigMock from "./portfBig.png";
import Image from "next/image";
import machine from './logo_machine.svg'
 
const Mainpage = () => {
  const stories = [
    {
      image: mock.src,
    },
    {
      image: mock.src,
    },
    {
      image: mock.src,
    },
  ];

  const portfolioImages = [
    { img1: portfolioBigMock, img2: portfolioMock, img3: portfolioMock },
    { img1: portfolioBigMock, img2: portfolioMock, img3: portfolioMock },
    { img1: portfolioBigMock, img2: portfolioMock, img3: portfolioMock },
  ];

  return (
    <main className="flex flex-col gap-[55px] lg:gap-[150px]">
      <div className="relative overflow-hidden">
        <Image src={machine} alt="татуировочная машинка" className="absolute right-0 -z-50 lg:hidden" />
        <Stories stories={stories} />
        <MobileMainBlock />
        <DesktopMainBlock />
      </div>
      <PortfolioSlider portfolioImages={portfolioImages} />
      <MastersBlock />
      <AboutStudioBlock />
      <AdvantagesBlock />
      <EducatuonBlock />
      <ReviewsBlock />
      <VideosBlock />
      <InfoBlock />
    </main>
  );
};

export default Mainpage;
