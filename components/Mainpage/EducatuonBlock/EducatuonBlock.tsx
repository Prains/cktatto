import { leftLine } from "@/images/burger";
import Image from "next/image";

const EducatuonBlock = () => {
  return (
    <section>
      <h3 className="text-semibold mb-8 flex items-center justify-center uppercase">
        <Image
          src={leftLine}
          alt="черная линия"
          priority
          className="absolute left-0"
        />
        обучение
      </h3> 
    </section>
  );
};

export default EducatuonBlock;
