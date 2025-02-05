import React from "react";
import ContainerContent from "../../Container";
import SliderBlogContent from "../../SliderBlogContent";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export async function getDataBlog() {
  let limit = 8;
  const url = process.env.ASC_PUBLIC_POST || "";
  const res = await fetch(`${url}/?per_page=${limit}`, {
    next: { revalidate: 3600 * 24 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function BlogSection() {
  const data = await getDataBlog();

  return (
    <ContainerContent url="/blog" className="border-buttom h-full w-full py-8">
      <div className="relative mt-8 flex h-full w-full items-center justify-center gap-4 md:gap-5">
        <div className="absolute right-full top-1/2 -translate-y-1/2 translate-x-1/2">
          <span className="-z-10 w-[20px] text-[100px] font-bold uppercase leading-tight opacity-5">
            the news
          </span>
        </div>
        <BtnSeeAllPost className={`hidden md:flex`} />
        <SliderBlogContent data={data} />
      </div>
      <BtnSeeAllPost className={`mt-6 flex md:hidden`} />
    </ContainerContent>
  );
}

export default BlogSection;

export function BtnSeeAllPost({ className }: { className: string }) {
  return (
    <>
      <div className={`relative z-20`}>
        <Link
          href={"/blog"}
          aria-label="Read more news"
          className={`${className} h-[100px] w-[100px] flex-col items-center justify-center whitespace-nowrap rounded-full border border-primary bg-white p-4 text-sm font-light uppercase text-primary transition-all hover:bg-primary hover:text-white md:h-[200px] md:w-[200px] md:text-xl`}
        >
          see all news
          <ArrowRight size={24} className="h-6 w-6 md:h-8 md:w-8" />
        </Link>
      </div>
    </>
  );
}
