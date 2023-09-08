"use client";
import ContentZone from "@/components/ui/ContentZone/ContentZone";
import Overlay from "@/components/ui/Overlay";
import NavigationIcons from "../NavigationIcons/NavigationIcons";
import Logo from "@/components/ui/Logo";
import { motion } from "framer-motion";
import BurgerLink from "../BurgerLink/BurgerLink";
import routes from "@/utils/routes";
import { backgroundLion } from "@/images/burger";
import Link from "next/link";

interface IBurger {
  setOpen: Function;
  open: boolean;
}

const Burger = ({ setOpen, open }: IBurger) => {
  const handleClose = () => setOpen(false);
  const navList = [
    { text: "Главная", href: routes.mainpage },
    { text: "Портфолио", href: routes.portfolio },
    { text: "О студии", href: routes.about },
    { text: "Мастера", href: routes.masters },
    { text: "Отзывы", href: routes.reviews },
    { text: "Обучение", href: routes.education },
    { text: "Контакты", href: routes.contacts },
  ];

  const phone = "+7 916 053 23 23";

  const workingTime = "с 10:00 до 22:00";

  const city = "г. Балашиха";

  return (
    <Overlay>
      <motion.div
        className="self-start py-5 bg-neutral-200 rounded-b-lg w-full"
        initial={{ y: -2000 }}
        animate={{ y: 0 }}
        exit={{ y: -2000 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <ContentZone
          className="flex flex-col"
          style={{
            backgroundImage: `url(${backgroundLion.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <NavigationIcons setOpen={setOpen} open={open} />
          </div>
          <nav className="mt-8">
            <ul className="flex items-center justify-center flex-col gap-6">
              {navList.map((item) => (
                <li key={item.text}>
                  <BurgerLink
                    href={item.href}
                    text={item.text}
                    onClick={handleClose}
                    key={item.href}
                  />
                </li>
              ))}
            </ul>
          </nav>
          <p className="flex items-center justify-center flex-col mt-[35px] text-[10px] leading-[11px] font-normal text-[#83746E]">
            {workingTime}
            <span className="mt-[11px]">{city}</span>
          </p>
          {/* BUG Почему-то при нажатии с компа как-будто происходит бесконечное перенаправление, постоянно начинает появляться попап с выбором приложения для звонка */}
          <Link href={'tel:+79160532323'} className="flex justify-center items-center mt-[34px] w-[135px] h-10 self-center text-[10px] leading-[11px] font-normal text-[#83746E] border-[#83746E] border-[1px] rounded-full">+7 916 053 23 23</Link>
        </ContentZone>
      </motion.div>
    </Overlay>
  );
};

export default Burger;
