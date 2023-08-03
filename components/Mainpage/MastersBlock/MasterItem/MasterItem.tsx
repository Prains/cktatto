import Image from "next/image";
import Link from "next/link";

interface IMaster {
  image: string;
  name: string;
  experience: number;
  role: string;
  price: number;
}

const MasterItem = ({ image, name, experience, role, price }: IMaster) => {
  return (
    <article className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center gap-2">
        <Image
          src={image}
          alt={name}
          width={160}
          height={160}
          className="h-40 w-40 rounded-full border border-neutral-800"
        />
        <p>{name}</p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <div className="flex flex-col items-start justify-center gap-3">
          <div className="flex flex-col gap-1 text-[8px] font-normal text-neutral-800">
            Статус
            <p className="flex h-[35px] w-[184px] items-center justify-center rounded-[10px] border border-stone-500 text-[11px] font-medium text-stone-900">
              {role}
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="flex flex-col gap-1 text-[8px] font-normal text-neutral-800">
              Стоимость сеанса
              <p className="flex h-[37px] w-[95px] items-center justify-start rounded-[10px] border border-stone-500 pl-2 text-xs font-medium text-stone-900">
                {price} ₽
              </p>
            </div>
            <Link href={"/"} className="button px-4 uppercase">
              запись
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-right text-[8px] font-normal text-[#202020]">
          Опыт работы
          <p className="flex h-24 w-24 flex-col items-center justify-center rounded-[10px] border border-[#83746E] bg-[#DFD6D1] text-4xl italic">
            {experience} <span className="text-xs">лет</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default MasterItem;
