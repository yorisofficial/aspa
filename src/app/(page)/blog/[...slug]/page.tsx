import BackButton from "@/app/Components/BackButton";
import ContainerContent from "@/app/Components/Container";
import GetDateComponent from "@/app/Components/GetDateComponent";
import { redirect } from "next/navigation";
import Image from "next/image";
import React from "react";

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
      className="container mx-auto max-w-5xl xl:space-y-8"
    >
      <BackButton url="/blog" back={true}>
        Back to main
      </BackButton>
      <div className="mb-8 rounded-xl border-2 p-4">
        <div className="h-full w-full md:h-[300px] md:w-full">
          <Image
            src={data.jetpack_featured_media_url}
            height={1500}
            width={1500}
            priority={false}
            alt={data.title.rendered}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
        <div className="py-4">
          <GetDateComponent data={data.date} />
          <h1
            className="w-full text-xl font-black md:w-3/4"
            dangerouslySetInnerHTML={{ __html: data.title.rendered }}
          ></h1>
        </div>
      </div>
      <article className="prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-figcaption: prose max-w-none prose-headings:font-black prose-p:text-sm prose-p:text-black prose-figure:!w-full prose-figcaption:w-full prose-figcaption:text-balance prose-strong:font-bold prose-strong:text-primary prose-img:w-full prose-img:max-w-5xl prose-img:rounded-xl md:prose-img:w-full xl:prose-p:text-justify xl:prose-p:text-base">
        <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
      </article>
    </ContainerContent>
  );
};

export default BlogPage;
