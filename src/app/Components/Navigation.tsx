"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import { motion } from "framer-motion";

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
      } else {
        setScroll(false);
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
              <Image
                src="/brand/ASPA-dark.svg"
                alt="Asian Surf Performance Academy"
                quality={75}
                width={300}
                height={300}
                priority={false}
                className="h-fit w-32 object-contain"
              />
            </Link>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleShow}
              className="block rounded-md bg-primary p-4 text-white xl:hidden"
            >
              {isShow ? <X size={24} /> : <List size={24} />}
            </motion.button>
          </div>
          {isShow && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ ease: "easeInOut", duration: 0.1 }}
              className="mobile-menu absolute left-0 top-20 z-40 flex h-full w-full items-start justify-start xl:hidden"
            >
              <div className="min-h-screen w-full space-y-2 bg-white pt-12">
                {menuNav.map((item, index) => (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ delay: 0.1 * index }}
                    whileTap={{ scale: 0.9 }}
                    key={index}
                    className="flex w-full flex-col items-start justify-start px-8"
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
              <div className="min-h-screen w-[20%] bg-white/5 text-white backdrop-blur-sm">
                <button
                  id="toggle-menu"
                  aria-label="Button toggle menu"
                  title="toggle menu navigation"
                  onClick={() => setShow(false)}
                  className="flex h-full min-h-screen w-full items-center justify-center"
                >
                  <X size={32} />
                </button>
              </div>
            </motion.div>
          )}
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
