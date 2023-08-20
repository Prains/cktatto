import Link from "next/link";
import Image from "next/image";
import leftMachine from './machine_mainLeft.svg'
import rightMachine from './machine_mainRight.svg'

const DesktopMainBlock = () => {
  return ( 
    <section className="items-center justify-center flex-col hidden lg:flex relative">
      <Image src={leftMachine} alt="татуировочная машинка" className="hidden xl:block absolute -z-50 top-[-230px] left-0"  />
      <Image src={rightMachine} alt="татуировочная машинка" className="hidden xl:block absolute -z-50 top-[-240px] right-0"  />
      <h1 className="uppercase flex items-center justify-center flex-col text-neutral-800 text-[22px]">
        тату-студия
        <span className="text-title">«СТАЛЬНОЙ КЛЫК»</span>
      </h1>
      <p className="text-xl mt-[47px]">Место внешней и внутренней трансформации</p>
      <Link className="uppercase button px-[60px] mt-[62px]" href={"/"}>
        консультация бесплатно
      </Link>
    </section>
   );
}
 
export default DesktopMainBlock;