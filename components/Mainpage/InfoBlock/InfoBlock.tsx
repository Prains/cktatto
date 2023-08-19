import ContentZone from "@/components/ui/ContentZone/ContentZone";
import Image from "next/image";
import { leftLine } from "@/images/burger";
import map from './map.png'
import Link from "next/link";

const InfoBlock = () => {
  return ( 
    <section className="mb-[76px]">
      <ContentZone>
        <h3 className="text-semibold mb-8 flex items-center justify-center uppercase">
          <Image
            src={leftLine}
            alt="черная линия"
            priority
            className="absolute left-[-33px]"
          />
          добраться до нас
        </h3>
        <div className="flex gap-3">
          <Link target="_blank" href={'https://yandex.ru/maps/-/CDQQRWnB'}>
            <Image src={map} alt="карта" className="object-cover rounded-[10px] w-[143px] h-[126px]"/>
          </Link>
          <div className="flex flex-col">
            <p className="text-[10px] font-normal leading-[11px] text-[#202020] mb-[26px]">Работаем с 10:00 до 22:00</p>
            <Link target="_blank" href={'https://yandex.ru/maps/-/CDQQRWnB'} className="text-[10px] font-normal leading-[11px] text-[#202020] mb-[21px]">г. Балашиха, <br/> ул. Советская д. 36к2, <br/> 4 этаж</Link>
            <button className="button flex items-center justify-center h-[35px] uppercase">запись</button>
          </div>
        </div>
      </ContentZone>
    </section>
   );
}
 
export default InfoBlock;