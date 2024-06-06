"use client"
import Image from "next/image"
import Link from "next/link"
import {usePathname} from "next/navigation"
import React, {useEffect, useState} from "react"

const Navigation = () => {
  const [isShow, setShow] = useState(false)
  const [isDesktop, setDesktop] = useState(false)

  const menuNav = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Academy",
      link: "/academy",
    },
    {
      title: "Our Program",
      link: "/program",
    },
    {
      title: "Our Team",
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

  return (
    <header
      className={`fixed left-0 top-0 z-40 w-full text-black xl:py-8 ${isDesktop ? "xl:py-0" : ""}`}
    >
      <nav
        className={`mx-auto container transition-all duration-500 ease-in-out ${isDesktop ? "w-full" : "max-w-5xl"}`}
      >
        <div
          className={`w-full items-center justify-between bg-white px-4 py-4 ${isDesktop ? "xl:py-2" : "xl:py-4"} drop-shadow-xl xl:flex`}
        >
          <div className="brand flex items-center justify-between">
            <Link href={"/"}>
              <Image
                src={"/brand/ASPA-dark.svg"}
                alt="logo"
                width={500}
                height={500}
                priority={false}
                className={`brand h-full ${isDesktop ? "w-32" : "w-24"} invert-0 xl:w-32`}
              />
            </Link>
            <div className="cta-button xl:hidden">
              <button
                onClick={handleShow}
                aria-label="toggle-menus"
                className="rounded bg-primary p-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                </svg>
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
                    className={`${pathName === item.link ? "bg-black text-white" : ""} rounded-xl px-6 py-4 hover:bg-black hover:text-white`}
                  >
                    {item.title}
                  </Link>
                ))}
              </ul>
            </div>
          )}
          <div className={`menu-nav hidden items-center gap-4 xl:flex`}>
            {menuNav.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`${pathName === item.link ? "scale-110 font-black text-brand underline underline-offset-4" : ""} group text-base font-medium duration-500 hover:scale-110 hover:text-brand`}
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
