import Image from "next/image";
import { backgroundLion } from "@/images/burger";

const BackgroundLionImage = () => {
  return (
    <Image src={backgroundLion} alt="Лицо льва" className="absolute top-5" />
  );
};

export default BackgroundLionImage;
