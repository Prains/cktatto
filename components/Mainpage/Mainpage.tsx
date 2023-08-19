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
import portfolioMock from "./uduVlALKtUMXgJOZZy770_hYkxv8joRT4CwMhGiejloKnRemh0qWWhzw7dfKnfWgSaaeQZlFJJxD-WbJx-yPUZZq 1.png";

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

  const portfolioImages = [portfolioMock, portfolioMock, portfolioMock];

  return (
    <main className="flex flex-col gap-[55px] lg:gap-[150px]">
      <div>
        <Stories stories={stories} />
        <MobileMainBlock />
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
