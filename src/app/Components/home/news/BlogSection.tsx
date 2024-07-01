import React from "react";
import ContainerContent from "../../Container";
import Image from "next/image";
import GetDateComponent from "../../GetDateComponent";
import Link from "next/link";
import Button from "../../Button";
import { ArrowRightCircle } from "lucide-react";
import ItemBlog from "./components/ItemBlog";

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
  const url = latestBlog.title.rendered.replaceAll(" ", "-").toLowerCase();
  console.log(latestBlog.title);

  return (
    <ContainerContent url="/blog" className="border-buttom h-full w-full py-8">
      <div className="blog-content grid grid-cols-1 items-start justify-start gap-4 xl:grid-cols-2 xl:gap-8">
        <Link href={`/blog/${latestBlog.id}/${url}`} className="group">
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
        <div className="list-post space-y-4">
          <div className="border-buttom flex w-full items-center justify-between pb-4 xl:pb-8">
            <h1 className="text-2xl font-black">Also read post</h1>
            <Link href={"/blog"} className="">
              <Button
                variant="primary"
                label="See all post"
                className="hover:bg-primary/80"
              >
                See all post
              </Button>
            </Link>
          </div>
          <div className="">
            {data.slice(1, 5).map((item: Props, index: number) => (
              <ItemBlog index={index} data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </ContainerContent>
  );
};

export default BlogSection;
