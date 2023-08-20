import Link from "next/link";

const DesktopMainBlock = () => {
  return ( 
    <section className="items-center justify-center flex-col hidden lg:flex">
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