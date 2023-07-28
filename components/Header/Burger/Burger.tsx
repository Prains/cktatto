"use client";
import ContentZone from "@/components/ui/ContentZone/ContentZone";
import Overlay from "@/components/ui/Overlay/Overlay";
import NavigationIcons from "../NavigationIcons/NavigationIcons";
import Logo from "@/components/ui/Logo";
import { motion } from "framer-motion";
import BurgerLink from "../BurgerLink/BurgerLink";
import routes from "@/utils/routes";

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

  return (
    <Overlay>
      <motion.div
        className="self-start py-5 bg-neutral-200 rounded-b-lg w-full"
        initial={{ y: -2000 }}
        animate={{ y: 0 }}
        exit={{ y: -2000 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <ContentZone>
          <div className="flex items-center justify-between">
            <Logo />
            <NavigationIcons setOpen={setOpen} open={open} />
          </div>
          <nav className="mt-10">
            <ul className="flex items-center justify-center flex-col gap-6">
              {navList.map((item) => (
                <li key={item.text}>
                  <BurgerLink
                    href={item.href}
                    text={item.text}
                    onClick={handleClose}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </ContentZone>
      </motion.div>
    </Overlay>
  );
};

export default Burger;
