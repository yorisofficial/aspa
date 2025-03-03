import BackButton from "@/app/Components/BackButton";
import ContainerContent from "@/app/Components/Container";
import GetDateComponent from "@/app/Components/GetDateComponent";
import { redirect } from "next/navigation";
import Image from "next/image";
import React from "react";
import BlogSection from "@/app/Components/home/news/BlogSection";

export async function generateStaticParams() {
  const url = process.env.ASC_PUBLIC_POST || "";
  const res = await fetch(`${url}/?per_page=6`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data.map((post: any) => ({
    id: post.id.toString(),
  }));
}

async function getData(id: string) {
  const url = process.env.ASC_PUBLIC_POST || "";
  const res = await fetch(`${url}/${id}`);

  if (!res.ok) return undefined;

  return res.json();
}

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug[0]);

  if (!data) {
    redirect("/not-found.tsx");
  }

  return (
    <ContainerContent
      url="/blog"
      className="mx-auto h-fit w-full px-4 xl:space-y-8 xl:px-16"
    >
      <div className="w-full">
        <div className="py-4">
          <div className="flex w-full flex-col items-start justify-start gap-4 md:flex-row md:items-end md:justify-between">
            <div className="">
              <h1
                className="w-full text-2xl font-normal uppercase md:w-3/4 xl:text-4xl"
                dangerouslySetInnerHTML={{ __html: data.title.rendered }}
              ></h1>
              <GetDateComponent data={data.date} />
            </div>
            <span className="flex flex-shrink-0 flex-col text-start md:text-end">
              Written by:
              <strong>ASC</strong>
            </span>
          </div>
          <div className="mt-8 h-[180px] w-full md:h-[300px] md:w-full xl:h-[600px]">
            <Image
              src={data.jetpack_featured_media_url}
              height={1500}
              width={1500}
              priority={false}
              alt={data.title.rendered}
              className="aspect-video h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
      <article className="prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-figcaption: prose max-w-none prose-headings:font-black prose-p:text-sm prose-p:text-black prose-figure:!w-full prose-figcaption:w-full prose-figcaption:text-balance prose-strong:font-bold prose-strong:text-primary prose-img:w-full prose-img:rounded-xl prose-hr:my-2 md:prose-p:text-justify md:prose-p:text-base md:prose-img:w-full">
        <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
      </article>
      <BlogSection />
    </ContainerContent>
  );
};

export default BlogPage;
