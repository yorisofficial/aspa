import React from "react";
import ContainerContent from "../../Container";
import SliderBlogContent from "../../SliderBlogContent";
import Link from "next/link";

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
      <div className="header-content w-full md:w-1/2">
        <span className="text-2xl font-light uppercase md:w-[400px] md:text-4xl">
          READ LATEST news
        </span>
        <p className="text-justify text-sm font-light md:mt-6 md:text-base">
          Read our latest news for surfing community and find more information
          about surf competition around the world
        </p>
        <div className="mt-6">
          <Link
            href={"/blog"}
            aria-label="Read more news"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-light uppercase text-white md:text-base"
          >
            Read more news
          </Link>
        </div>
      </div>
      <SliderBlogContent data={data} />
    </ContainerContent>
  );
};

export default BlogSection;
