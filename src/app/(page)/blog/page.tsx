import ContainerContent from "@/app/Components/Container";
import DateComponents from "@/app/Components/DateComponents";
import ItemPost from "@/app/Components/ItemPost";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import Moment from "react-moment";

async function getData() {
  const url = process.env.ASC_PUBLIC_POST || "";
  const res = await fetch(`${url}/?per_page=33`, {
    cache: "force-cache",
    next: { revalidate: 1000 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

const BlogPage = async () => {
  const data = await getData();
  const latestNews = data[0];

  return (
    <ContainerContent
      url="blog"
      className="container mx-auto min-h-screen w-full max-w-5xl space-y-8 py-32"
    >
      <div className="w-full space-y-4">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <h1 className="text-center text-4xl font-light uppercase">
            Latest news
          </h1>
          <div className="image-previews w-full">
            <Image
              src={latestNews.jetpack_featured_media_url}
              alt={latestNews.title.rendered}
              width={2400}
              height={800}
              priority
              className="h-[400px] w-full object-cover md:h-[500px]"
            />
          </div>
          <div className="relative flex w-full flex-col items-center justify-center gap-4 text-center">
            <DateComponents data={latestNews.date} />
            <span className="text-center text-4xl font-light uppercase">
              {latestNews.title.rendered}
            </span>
            <Link
              href={`/blog/${latestNews.id}/${latestNews.slug}`}
              className="relative z-10 flex h-[200px] w-[200px] -translate-y-8 flex-col items-center justify-center rounded-full border uppercase duration-300 hover:border-brand hover:text-brand"
            >
              <span className="uppercase">Read the news</span>
            </Link>
          </div>
        </div>
        <div className="mt-32 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.length > 0 &&
            data.map((post: any) => (
              <Suspense key={post.id}>
                <ItemPost post={post} />
              </Suspense>
            ))}
        </div>
      </div>
    </ContainerContent>
  );
};

export default BlogPage;
