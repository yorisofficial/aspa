import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../../Button";
import ContainerContent from "../../Container";
import GetDateComponent from "../../GetDateComponent";

async function getData() {
  const url = process.env.ASC_PUBLIC_POST || "";
  const res = await fetch(`${url}/?per_page=9`, {
    next: { revalidate: 1000 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

const LatestBlog = async () => {
  const data = await getData();
  const latestBlog = data[0];
  const url = latestBlog.title.rendered.replaceAll(" ", "-").toLowerCase();

  return (
    <ContainerContent
      url="/blog"
      className="border-buttom flex w-full max-w-5xl flex-col items-center justify-center py-8"
    >
      <div className="relative h-full w-full space-y-4 xl:max-w-5xl xl:space-y-0">
        <Image
          src={latestBlog.jetpack_featured_media_url}
          width={500}
          height={500}
          priority={false}
          quality={100}
          alt={latestBlog.title.rendered}
          className="h-[300px] w-full rounded-xl object-cover xl:h-[440px]"
        />
        <div className="latest-news relative z-10 flex flex-col rounded-xl bg-primary p-8 text-white xl:absolute xl:left-4 xl:top-1/2 xl:min-h-[400px] xl:w-[40%] xl:-translate-y-1/2 xl:items-center xl:justify-center ">
          <div className="mb-4 w-full">
            <h1 className="text-2xl font-black uppercase text-brand">
              Latest post
            </h1>
          </div>
          <div className="absolute bottom-0 right-0 -z-10">
            <Image
              src={"/assets/acc/title-cover-simple.svg"}
              alt="acc-line"
              width={500}
              height={500}
              priority={false}
              quality={50}
              className="-z-10 h-[300px] w-[300px] opacity-40"
            />
          </div>
          <div className="header mb-4">
            <GetDateComponent data={latestBlog.date} />
            <h1 className="text-base font-bold uppercase xl:text-xl">
              {latestBlog.title.rendered}
            </h1>
          </div>
          <div className="mt-4 flex w-full items-center justify-start">
            <Link href={`/blog/${latestBlog.id}/${url}`} className="">
              <Button variant="invert" label="read latest post">
                Read post
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ContainerContent>
  );
};

export default LatestBlog;
