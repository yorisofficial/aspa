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

const BlogSection = async () => {
  const data = await getDataBlog();

  return (
    <ContainerContent url="/blog" className="border-buttom h-full w-full py-8">
      <div className="relative mt-8 flex h-full w-full items-center justify-center">
        <div className="absolute right-full top-1/2 -translate-y-1/2 translate-x-1/2">
          <span className="-z-10 w-[20px] text-[100px] font-bold uppercase leading-tight opacity-5">
            the news
          </span>
        </div>
        <div className="relative z-10 flex h-full w-1/4 items-center justify-center">
          <Link
            href={"/blog"}
            aria-label="Read more news"
            className="flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full border border-brand uppercase text-brand duration-300 hover:border-black hover:bg-black hover:text-white"
          >
            see all news
            <ArrowRight size={32} />
          </Link>
        </div>
        <SliderBlogContent data={data} />
      </div>
    </ContainerContent>
  );
};

export default BlogSection;
