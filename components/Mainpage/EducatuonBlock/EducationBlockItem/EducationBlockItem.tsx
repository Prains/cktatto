import { mobileLogo } from "@/images/icons";
import Image from "next/image";
import Link from "next/link";

interface EducationBlockItemProps {
  name: string;
  advantages: string[];
  price: string;
  subPrice: string;
}

const EducationBlockItem = ({
  name,
  advantages,
  price,
  subPrice
}: EducationBlockItemProps) => {
  return (
    <article className="border-[#83746E] rounded-[20px] border-[1px] p-[30px]">
      <p className="text-base font-normal mb-7">Тариф <span className="text-base font-medium">{name}</span></p>
      <ul className={`flex flex-col gap-[10px] ${name !== 'ВИДЕО-КУРС*' ? 'mb-8' : 'mb-3' }`}>
        {advantages.map((advantage, index) => {
          return (
            <div key={index} className="flex items-center justify-start gap-5">
              <Image src={mobileLogo} alt="тигр в клетке" className="h-4 w-4" />
              <li className="text-main">{advantage}</li>
            </div>
          );
        })}
      </ul>
      {name === 'ВИДЕО-КУРС*' && <p className="text-[7px] ml-[37px] mb-[34px]">*обратной связи тариф не предусматривает</p>}
      <p className="text-xl text-[#1e1e1e] mb-[10px]">{price} ₽</p>
      <p className="text-[10px] text-[#1e1e1e] mb-7">{subPrice} ₽ / мес</p>
      <div className="flex gap-5 h-10">
        <Link href={"/"} className="flex flex-1 button px-3 justify-center items-center uppercase !rounded-[10px]">
          купить
        </Link>
        <Link
          href={"/"}
          className="flex flex-1 justify-center items-center px-2 text-center border border-[#1a0f0c] bg-[#e0e0e0] rounded-[10px] text-[10px] uppercase"
        >
          задать вопрос
        </Link>
      </div>
    </article>
  );
};

export default EducationBlockItem;
