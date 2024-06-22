import BackButton from "@/app/Components/BackButton";
import ContainerContent from "@/app/Components/Container";
import GetDateComponent from "@/app/Components/GetDateComponent";
import Image from "next/image";
import Link from "next/link";
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

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogPage = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);

  return (
    <ContainerContent
      url="/blog"
      className="container mx-auto max-w-5xl xl:space-y-8"
    >
      <BackButton url="/blog">Back to main</BackButton>
      <div className="mb-8 rounded-xl border-2 p-4">
        <div className="h-[400px] w-full">
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
          <h1 className="w-3/4 text-xl font-black">{data.title.rendered}</h1>
        </div>
      </div>
      <article className="prose prose-headings:font-black prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-p:text-black prose-strong:text-primary prose-img:rounded-xl max-w-none">
        <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
      </article>
    </ContainerContent>
  );
};

export default BlogPage;
