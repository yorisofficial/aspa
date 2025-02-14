"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CaretDown, CaretUp, List, X } from "@phosphor-icons/react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { AspaProgram } from "../lib/program/academy/AspaAcademy";
import { ArrowRight } from "lucide-react";
import SocialComponents from "./SocialComponents";

export const menuNav = [
  {
    title: "Home",
    base: "home",
    link: "/",
  },
  {
    title: "About us",
    base: "about-us",
    link: "/about-us",
  },
  {
    title: "ISA",
    base: "isa-team",
    link: "/isa-team",
  },
  {
    title: "Programs",
    base: "programs",
    link: "/programs",
  },
  {
    title: "Projects",
    base: "projects",
    link: "/projects",
  },
  {
    title: "Blog",
    base: "blog",
    link: "/blog",
  },
  {
    title: "Teams",
    base: "teams",
    link: "/team",
  },
];

export const PreviousProgram = [
  {
    id: 1,
    title: "Rising Star",
    url: "/programs/rising-star",
  },
  {
    id: 2,
    title: "Junior Team Indonesia",
    url: "/programs/isa-world-junior",
  },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isShow, setShow] = useState<boolean>(true);
  const [isMenus, setMenus] = useState<boolean>(false);
  const [isShowDropdown, setShowDropdown] = useState<boolean>(false);
  const [isMenuActive, setMenuActive] = useState<string>("");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous !== undefined && latest > previous && latest > 0) {
      setShow(false);
      setMenus(false);
      setShowDropdown(false);
    } else {
      setShow(true);
      setMenus(false);
      setShowDropdown(false);
    }
  });

  // check pathName
  const pathName = usePathname();

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
      className={`sticky left-0 top-0 z-40 w-full bg-white`}
    >
      <nav className={`flex w-full items-center justify-center`}>
        <div
          className={`nav-container relative flex w-full items-center justify-between px-4 py-4 xl:px-16`}
        >
          <div className="brand-aspa flex w-full items-center justify-between md:gap-6 xl:w-fit">
            <Link href={"/"}>
              <Image
                src={"/brand/ASPA-dark.svg"}
                alt="ASPA Brand"
                width={300}
                height={300}
                quality={75}
                priority={true}
                className="h-full w-40 object-fill"
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
            <div className="desktop-menu hidden xl:block">
              <ul className="flex items-center gap-4">
                {menuNav.map((item, index) => (
                  <motion.li
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileTap={{ scale: 0.8, opacity: 0.8 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    key={index}
                    onClick={() => setMenuActive(item.base)}
                    className={`relative ${pathName === item.base || pathName.includes(item.base) ? "bg-brand text-white" : "border border-black hover:border-brand hover:text-brand"}`}
                  >
                    <Link
                      aria-label="ASPA menu navigation"
                      href={item.link}
                      className={`block duration-500 hover:scale-110 `}
                    >
                      <div className="flex items-center gap-2  px-4 py-2">
                        <span>{item.title}</span>
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <AnimatePresence>
            {isMenus && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ ease: "easeInOut", duration: 0.1 }}
                className={`mobile-menus fixed left-0 top-20 z-40 flex h-fit w-full items-start justify-start xl:hidden`}
              >
                <div className="h-fit min-h-screen w-full space-y-2 bg-white px-4 pt-12">
                  {menuNav.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: "-100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                      transition={{ duration: 0.2, delay: 0.1 * index }}
                      className={`relative flex w-full flex-col items-start justify-start overflow-hidden rounded-lg ${pathName === item.base || pathName.includes(item.base) ? "bg-brand text-white" : ""}`}
                    >
                      <Link
                        onClick={
                          item.base === "program"
                            ? () => setShowDropdown(!isShowDropdown)
                            : () => setMenus(false)
                        }
                        href={item.base === "program" ? "#" : item.link}
                        className={`w-full rounded-md border-2 border-bordersolid p-4 hover:bg-primary hover:text-white ${pathName.includes(item.base) ? "bg-primary text-white" : ""}`}
                      >
                        {item.base === "program" ? (
                          <button className="flex w-full items-center justify-between">
                            {item.title}{" "}
                            {isShowDropdown ? (
                              <CaretUp size={24} />
                            ) : (
                              <CaretDown size={24} />
                            )}
                          </button>
                        ) : (
                          <span>{item.title}</span>
                        )}
                      </Link>

                      <AnimatePresence>
                        {item.base === "program" && isShowDropdown && (
                          <motion.div
                            initial={{ height: 0, originY: 0, opacity: 0 }}
                            animate={{ height: "auto", originY: 0, opacity: 1 }}
                            exit={{ height: 0, originY: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="dropdown w-full bg-white p-3 text-black"
                          >
                            <ul className="flex w-full flex-col">
                              <div className="flex items-center justify-start gap-3">
                                <div className="h-[1px] w-2 bg-primary"></div>
                                <h1 className="text-base font-bold">
                                  Our program
                                </h1>
                              </div>
                              {AspaProgram.map((item, index) => (
                                <motion.li
                                  initial={{ scale: 1 }}
                                  whileTap={{ scale: 0.9 }}
                                  exit={{ scale: 1 }}
                                  key={index}
                                  className="item-program group w-full"
                                >
                                  <Link
                                    onClick={() => {
                                      setShowDropdown(!isShowDropdown);
                                      setMenus(false);
                                    }}
                                    href={`/program/${item.id}`}
                                    aria-label="ASPA item list program"
                                    className="flex w-full items-center justify-start gap-2 py-2 capitalize"
                                  >
                                    <ArrowRight
                                      size={16}
                                      className="duration-500 group-hover:translate-x-1"
                                    />
                                    {item.title.replaceAll("program", "")}
                                  </Link>
                                </motion.li>
                              ))}
                              <li className="item-program mt-4 w-full">
                                <div className="flex items-center justify-start gap-3">
                                  <div className="h-[2px] w-2 bg-primary"></div>
                                  <h1 className="text-base font-bold">
                                    Specialty program
                                  </h1>
                                </div>
                                {PreviousProgram.map((item, index) => (
                                  <Link
                                    key={item.id}
                                    onClick={() => {
                                      setShowDropdown(false);
                                      setMenus(false);
                                    }}
                                    href={item.url}
                                    aria-label="ASPA item list program"
                                    className="group flex w-full items-center justify-start gap-2 py-2 capitalize"
                                  >
                                    <ArrowRight
                                      size={16}
                                      className="duration-500 group-hover:translate-x-1"
                                    />
                                    {item.title}
                                  </Link>
                                ))}
                              </li>
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
          <div className="other-cta hidden items-center justify-center gap-4 md:flex">
            <ToggleSocialMedia />
          </div>
        </div>
      </nav>
    </motion.div>
  );
}

export const ToggleSocialMedia = () => {
  const ref = React.createRef<HTMLDivElement>();
  const [isToggleSocial, setToggleSocial] = useState<Boolean>(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setToggleSocial(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return (
    <div ref={ref}>
      <div className="social-media-btn relative">
        <motion.button
          aria-label="Button toggle social media"
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          exit={{ scale: 1 }}
          type="button"
          onClick={() => setToggleSocial(!isToggleSocial)}
          className="hidden bg-brand px-4 py-2 text-white xl:inline-block"
        >
          Our social media
        </motion.button>
        {isToggleSocial && (
          <div className="absolute right-0 top-full flex h-fit w-[200px] translate-y-4 flex-col items-start gap-2 bg-white p-3 drop-shadow-lg">
            <div className="">
              <span>Our social media</span>
            </div>
            <SocialComponents />
          </div>
        )}
      </div>
    </div>
  );
};
