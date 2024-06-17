import Image from "next/image"
import Link from "next/link"
import React from "react"

const Branding = () => {
  return (
    <Link href={"/"} className="inline-block">
      <Image
        src="/brand/ASPA-dark.svg"
        alt="ASPA Brand"
        height={300}
        width={300}
        quality={75}
        priority={false}
        className="w-40 h-full object-fill"
      />
    </Link>
  )
}

export default Branding
