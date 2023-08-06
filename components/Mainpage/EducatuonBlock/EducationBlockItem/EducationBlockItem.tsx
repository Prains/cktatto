import { mobileLogo } from "@/images/icons";
import Image from "next/image";
import Link from "next/link";

interface EducationBlockItemProps {
  name: string;
  advantages: string[];
  price: number;
}

const EducationBlockItem = ({
  name,
  advantages,
  price,
}: EducationBlockItemProps) => {
  return (
    <article>
      <p>Тариф {name}</p>
      <ul>
        {advantages.map((advantage, index) => {
          return (
            <div key={index} className="flex items-center justify-start gap-5">
              <Image src={mobileLogo} alt="тигр в клетке" className="h-4 w-4" />
              <li className="text-main">{advantage}</li>
            </div>
          );
        })}
      </ul>
      <p className="text-xl text-[#1e1e1e]">{price}₽</p>
      <div>
        <Link href={"/"} className="button px-3 uppercase">
          купить
        </Link>
        <Link
          href={"/"}
          className="border border-[#1a0f0c] bg-[#e0e0e0] px-2 py-2"
        >
          задать вопрос
        </Link>
      </div>
    </article>
  );
};

export default EducationBlockItem;
