"use client"
import Image from "next/image"
import Link from "next/link"
import {usePathname} from "next/navigation"
import React, {useEffect, useState} from "react"
import Branding from "./Branding"

const Navigation = () => {
  const [isShow, setShow] = useState(false)
  const [isDesktop, setDesktop] = useState(false)

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
  ]
  const handleShow = () => {
    setShow(!isShow)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setDesktop(true)
      } else {
        setDesktop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // check pathName
  const pathName = usePathname()

  // get active pathName
  const activePath = pathName.split("/").slice(1, 2)

  return (
    <header
      className={`fixed left-0 top-0 z-40 w-full text-black ${isDesktop ? "xl:py-0" : "xl:py-4"}`}
    >
      <nav
        className={`mx-auto container transition-all duration-500 ease-in-out ${isDesktop ? "w-full" : "max-w-7xl"}`}
      >
        <div
          className={`w-full items-center justify-between bg-white px-4 py-4 ${isDesktop ? "xl:py-2 opacity-95" : "xl:py-4 xl:rounded-full"} drop-shadow-xl xl:flex`}
        >
          <div className="brand flex items-center justify-between">
            <Branding isScroll={isDesktop} />
            <div className="cta-button xl:hidden">
              <button
                onClick={handleShow}
                aria-label="toggle-menus"
                className="rounded bg-primary p-4"
              >
                {isShow ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
          {isShow && (
            <div className="mobile-nav absolute left-0 top-20 h-screen w-full bg-white px-4 pt-8 text-black xl:hidden">
              <ul className="flex h-full w-full flex-col gap-4">
                {menuNav.map((item, index) => (
                  <Link
                    onClick={handleShow}
                    key={index}
                    href={item.link}
                    className={`${item.base === pathName.slice(1) ? "bg-black text-white" : ""} rounded-xl px-6 py-4 hover:bg-black hover:text-white`}
                  >
                    {item.title}
                  </Link>
                ))}
              </ul>
            </div>
          )}
          <div className={`desktop-nav hidden items-center gap-4 xl:flex pr-12`}>
            {menuNav.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`${activePath.includes(item.base) ? "scale-110 font-black text-brand underline underline-offset-4" : ""} group text-base font-medium duration-500 hover:scale-110 hover:text-brand`}
              >
                {item.title}
                <div
                  className={`h-[0.10rem] w-0 bg-blue-700 transition-all group-hover:w-full`}
                ></div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
