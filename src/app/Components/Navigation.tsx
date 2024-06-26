"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

export const menuNav = [
  {
    title: "Home",
    base: "",
    link: "/",
  },
  {
    title: "Academy",
    base: "academy",
    link: "/academy",
  },
  {
    title: "Our Program",
    base: "program",
    link: "/program",
  },
  {
    title: "Blog",
    base: "blog",
    link: "/blog",
  },
  {
    title: "Our Team",
    base: "team",
    link: "/team",
  },
];

const Navigation = () => {
  const { scrollY } = useScroll();
  const [isShow, setShow] = useState(true);
  const [isMenus, setMenus] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous !== undefined && latest > previous && latest > 0) {
      setShow(false);
      setMenus(false);
    } else {
      setShow(true);
      setMenus(false);
    }
  });

  // check pathName
  const pathName = usePathname();

  // get active pathName
  const activePath = pathName.split("/").slice(1, 2);

  const handleShow = () => {
    setMenus(!isMenus);
  };

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={!isShow ? "hidden" : "visible"}
      exit="visible"
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`sticky left-0 top-0 z-40 w-full bg-white ${isShow ? "" : "drop-shadow-xl"}`}
    >
      <nav className={`flex w-full items-center justify-center`}>
        <div
          className={`nav-container relative flex w-full max-w-5xl items-center justify-between px-4 py-4 xl:px-0`}
        >
          <div className="brand-aspa flex w-full items-center justify-between xl:w-fit">
            <Link href={"/"}>
              <Image
                src={"/brand/ASPA-dark.svg"}
                alt="ASPA Brand"
                width={300}
                height={300}
                quality={75}
                priority={true}
                className="h-[70px] w-40 object-fill xl:h-full"
              />
            </Link>
            <motion.button
              id="toggle-menu"
              aria-label="Button toggle menu"
              title="toggle menu navigation"
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={handleShow}
              className="block rounded-md bg-primary p-4 text-white xl:hidden"
            >
              {isMenus ? <X size={24} /> : <List size={24} />}
            </motion.button>
          </div>
          <AnimatePresence>
            {isMenus && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ ease: "easeInOut", duration: 0.1 }}
                className="mobile-menu fixed left-0 top-20 z-40 flex h-full w-full items-start justify-start xl:hidden"
              >
                <div className="min-h-screen w-full space-y-2 bg-white px-4 pt-12">
                  {menuNav.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: "-100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                      transition={{ duration: 0.2, delay: 0.1 * index }}
                      whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
                      className="flex w-full flex-col items-start justify-start"
                    >
                      <Link
                        onClick={() => setMenus(false)}
                        href={item.link}
                        className={`w-full rounded-md border-2 border-bordersolid p-4 hover:bg-primary hover:text-white ${activePath.includes(item.base) ? "bg-primary text-white" : ""}`}
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="h-full min-h-screen w-[25%] ">
                  <button
                    id="toggle-menu"
                    aria-label="Button toggle menu"
                    title="toggle menu navigation"
                    onClick={() => setMenus(false)}
                    className="toggle-menu flex h-full min-h-screen w-full items-center justify-center"
                  ></button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="desktop-menu hidden xl:block">
            <ul className="flex items-center gap-4">
              {menuNav.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={`duration-500 hover:scale-110 ${activePath.includes(item.base) ? "font-bold text-brand underline underline-offset-8" : ""}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navigation;
