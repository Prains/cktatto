import Stories from "../Stories/Stories";
import mock from "./8Z_Xg94fa-OZfQcEwYASHPNqy7EiVV5ewviDYdyO1hIXazkzvcQvjGSkE9eYVW5hJV9xFo3EoIjE-qwiPikpBX5I 1.png";
import MobileMainBlock from "./MobileMainBlock/MobileMainBlock";
import PortfolioSlider from "./PortfolioSlider/PortfolioSlider";
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

  const portfolioImages = [
    portfolioMock.src,
    portfolioMock.src,
    portfolioMock.src,
  ];

  return (
    <main className="flex flex-col gap-[55px] lg:gap-[150px]">
      <div>
        <Stories stories={stories} />
        <MobileMainBlock />
      </div>
      <PortfolioSlider portfolioImages={portfolioImages} />
    </main>
  );
};

export default Mainpage;
