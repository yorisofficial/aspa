import React, { Suspense } from "react";
import ContainerContent from "@/app/Components/Container";
import DateComponents from "@/app/Components/DateComponents";
import ItemPost from "@/app/Components/ItemPost";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const url = process.env.ASC_PUBLIC_POST || "";
  const res = await fetch(`${url}/?per_page=50`, {
    next: { revalidate: 1 },
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
      className="container min-h-screen w-full space-y-8 px-4 py-32 md:px-16"
    >
      <div className="w-full space-y-4">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <h1 className="text-center text-4xl font-light uppercase">
            Latest news
          </h1>
          <div className="image-previews mx-auto h-fit w-full max-w-4xl">
            <Image
              src={latestNews.jetpack_featured_media_url}
              alt={`content-${latestNews.title.rendered}`}
              width={2400}
              height={1600}
              priority
              className={`content-${latestNews.title.rendered} w-full object-cover object-center md:h-[400px]`}
            />
          </div>
          <div className="relative flex w-full max-w-5xl flex-col items-center justify-center gap-4 text-center">
            <DateComponents data={latestNews.date} />
            <span className="z-10 text-center text-xl font-light uppercase md:text-4xl">
              {latestNews.title.rendered}
            </span>
            <Link
              href={`/blog/${latestNews.id}/${latestNews.slug}`}
              className="relative z-0 flex h-[200px] w-[200px] -translate-y-8 flex-col items-center justify-center rounded-full border bg-white/0 uppercase duration-300 hover:border-brand hover:bg-brand hover:text-white"
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
