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
        className={`brand min-w-32 h-14 object-fill`}
        priority={false}
      />
    </Link>
  )
}

export default Branding
