import React from "react";
import ContainerContent from "../../Container";
import Image from "next/image";
import GetDateComponent from "../../GetDateComponent";
import IconArrowDetails from "../../IconArrowDetails";
import Link from "next/link";
import Button from "../../Button";

async function getData() {
  const url = process.env.ASC_PUBLIC_POST || "";
  const res = await fetch(`${url}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface Props {
  url: string;
  id: number;
  title: {
    rendered: string;
  };
  jetpack_featured_media_url: string;
  date: string;
}

const BlogSection = async () => {
  const data = await getData();
  const latestBlog = data[0];

  return (
    <ContainerContent url="/blog" className="border-buttom h-full w-full py-8">
      <div className="blog-content grid grid-cols-1 items-start justify-start gap-4 xl:grid-cols-2 xl:gap-8">
        <Link href={`/blog/${latestBlog.id}`} className="group">
          <div className="latest-post flex w-full flex-col gap-3 py-8 xl:py-0">
            <div className="h-full w-full overflow-hidden rounded-xl ">
              <Image
                src={latestBlog.jetpack_featured_media_url}
                alt={latestBlog.title.rendered}
                height={500}
                width={500}
                quality={100}
                priority={false}
                className="h-[250px] w-full object-cover duration-500 group-hover:scale-110"
              />
            </div>
            <div className="header w-full">
              <GetDateComponent data={latestBlog.date} />
              <h1 className="text-start text-xl font-bold uppercase underline-offset-8 group-hover:underline">
                {latestBlog.title.rendered}
              </h1>
            </div>
          </div>
        </Link>
        <div className="list-post">
          <div className="flex w-full items-center justify-between pb-4">
            <h1 className="text-2xl font-black">Also read post</h1>
            <Link href={"/blog"}>
              <Button variant="primary" label="See all post">
                See all post
              </Button>
            </Link>
          </div>
          {data.slice(1, 5).map((item: Props) => (
            <>
              <Link href={`/blog/${item.id}`} key={item.id}>
                <div className="group relative py-2">
                  <IconArrowDetails className="rounded-full bg-primary/30 p-1 text-white duration-500 group-hover:right-0 group-hover:top-0 group-hover:bg-primary" />
                  <div className="pr-8">
                    <h1 className="text-sm font-normal underline-offset-8 group-hover:underline xl:text-base">
                      {item.title.rendered}
                    </h1>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </ContainerContent>
  );
};

export default BlogSection;
