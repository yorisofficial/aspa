import Image from "next/image"
import Link from "next/link"
import React from "react"

const Branding = () => {
  return (
    <Link href={"/"} className="w-[150px] h-fit">
      <Image
        src={"/brand/ASPA-dark.svg"}
        alt="logo"
        width={300}
        height={180}
        quality={75}
        className={`brand hidden xl:inline-block max-w-32 h-fit object-fill`}
        priority={false}
      />
      <h1 className="text-4xl font-satoshi font-black xl:hidden">ASPA</h1>
    </Link>
  )
}

export default Branding
