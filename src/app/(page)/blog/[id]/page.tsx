import BackButton from "@/app/Components/BackButton";
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
    <div className="container mx-auto max-w-5xl py-32">
      <BackButton url="/blog">Back to main</BackButton>
      <div className="mb-8 rounded-xl border-2 p-4">
        <h1>{data.title.rendered}</h1>
        <p>{data.date}</p>
      </div>
      <article className="prose prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-p:text-white prose-strong:text-white">
        <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
      </article>
    </div>
  );
};

export default BlogPage;
