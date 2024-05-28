"use client";
import {
  InstagramLogo,
  WhatsappLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterPage = () => {
  return (
    <div className="mt-8 flex h-full w-full flex-col items-center justify-center gap-4 bg-primary py-8 text-white">
      <Image
        src={"/brand/ASPA-white.svg"}
        alt="ASPA Logo"
        width={500}
        height={500}
        priority={false}
        className="h-full w-[200px] object-cover"
      />
      <div className="text-center xl:max-w-[368px]">
        <address>
          Jl Subak Sari Barat, Gg. Sri Kahyangan No.77, Tibubeneng, Kec. Kuta
          Utara, Kabupaten Badung, Bali 80361
        </address>
        <span>Tel : +62 811562426666</span>
      </div>
      <div className="cta-whatsapp">
        <Link
          href={"wa.me/6285156242689"}
          className="flex items-center gap-2 rounded bg-white p-2 text-black"
        >
          <WhatsappLogo size={24} />
          chat on Whatsaap
        </Link>
      </div>
      <div className="list-social">
        <div className="flex items-center gap-8">
          <Link
            href={"https://www.instagram.com/aspa_surfacademy/"}
            aria-label="Connect on Instagram"
          >
            <InstagramLogo size={32} />
          </Link>
          <Link
            href={"https://x.com/asiansurfacademy"}
            aria-label="Connect on Twitter"
          >
            <XLogo size={32} />
          </Link>
          <Link
            href={"https://www.youtube.com/@asiansurfacademy"}
            aria-label="Subscribe ASPA on Youtube"
          >
            <YoutubeLogo size={32} />
          </Link>
        </div>
      </div>
      <div className="copyright-section">
        <span className="text-xs font-light">
          &copy;2024 ASPA All rights reserved
        </span>
      </div>
    </div>
  );
};

export default FooterPage;
