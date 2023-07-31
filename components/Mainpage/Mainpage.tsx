import Stories from "../Stories/Stories";
import { mobileLogo } from "@/images/icons";

const Mainpage = () => {
  const stories = [
    {
      image: mobileLogo.src,
    },
    {
      image: mobileLogo.src,
    },
    {
      image: mobileLogo.src,
    },
  ];
  return (
    <main>
      <Stories stories={stories} />
    </main>
  );
};

export default Mainpage;
