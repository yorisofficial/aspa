"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";

const Navigation = () => {
  const [isShow, setShow] = useState(false);
  const [isScroll, setScroll] = useState(false);

  const menuNav = [
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
  const handleShow = () => {
    setShow(!isShow);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // check pathName
  const pathName = usePathname();

  // get active pathName
  const activePath = pathName.split("/").slice(1, 2);

  return (
    <header
      className={`z-40 transition-all duration-500 ease-in-out ${isScroll ? "fixed left-0 top-0 w-full" : "block"}`}
    >
      <nav
        className={`flex w-full items-center justify-center ${isScroll && "bg-white drop-shadow-lg"}`}
      >
        <div
          className={`nav-container relative flex w-full max-w-5xl items-center justify-between px-4 py-4 xl:px-0`}
        >
          <div className="brand-aspa flex w-full items-center justify-between xl:w-fit">
            <Link href={"/"}>
              <h1 className="text-4xl font-black uppercase">ASPA</h1>
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
              {isShow ? <X size={24} /> : <List size={24} />}
            </motion.button>
          </div>
          <AnimatePresence>
            {isShow && (
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
                        onClick={() => setShow(false)}
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
                    onClick={() => setShow(false)}
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
    </header>
  );
};

export default Navigation;
