import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../../Button";
import ContainerContent from "../../Container";

async function getData() {
  const url = process.env.ASC_PUBLIC_POST || "";
  const res = await fetch(`${url}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const LatestBlog = async () => {
  const data = await getData();
  const latestBlog = data[0];

  const getInfoDate = latestBlog.date;
  const getFullYear = getInfoDate.slice(0, 4);
  const getMonth = getInfoDate.slice(5, 7);
  const getDate = getInfoDate.slice(8, 10);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const getNameOfMonth = months[parseInt(getMonth) - 1];
  const datePost = `${getNameOfMonth} ${getDate}, ${getFullYear}`;

  return (
    <ContainerContent
      url="/blog"
      className="border-buttom flex w-full max-w-5xl flex-col items-center justify-center py-8"
    >
      <div className="mb-8 flex w-full flex-col items-start justify-center gap-2 text-start">
        <h1 className="text-start text-xl font-black text-brand">
          Fill your day with the latest news
        </h1>
        <p className="text-sm font-normal md:text-base xl:w-1/2">
          Join our surfing world, explore the latest news, stories, and tips
          from our blog. We are ready to inspire you to catch the wave and fill
          your day with surfing joy.
        </p>
        <div className="mt-4">
          <Link href={"blog"}>
            <Button variant="primary" label="read more our blog">
              Read our blog
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center xl:relative xl:w-full">
        <div className="header hidden h-full w-full xl:inline-block xl:min-h-[500px] xl:w-3/4">
          <Image
            src={latestBlog.jetpack_featured_media_url}
            alt={latestBlog.title}
            height={500}
            width={500}
            priority={false}
            quality={75}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="body flex flex-col items-start justify-center gap-4 space-y-4 rounded-xl bg-primary p-6 text-start text-white xl:absolute xl:left-0 xl:top-1/2 xl:w-1/2 xl:-translate-y-1/2 xl:space-y-0 xl:p-8">
          <div className="inline-block h-[200px] w-full xl:hidden">
            <Image
              src={latestBlog.jetpack_featured_media_url}
              alt={latestBlog.title}
              height={500}
              width={500}
              priority={false}
              quality={75}
              className="h-full w-full rounded-md object-cover"
            />
          </div>
          <h1 className="hidden text-3xl font-black uppercase xl:inline-block">
            Latest news
          </h1>
          <div className="space-y-2 xl:space-y-0">
            <span className="underline underline-offset-4">{datePost}</span>
            <h1 className="text-xl font-normal xl:text-3xl">
              {latestBlog.title.rendered}
            </h1>
          </div>
          <div className="">
            <Link href={`/blog/${latestBlog.id}`}>
              <Button variant="invert" label="read more the latest post">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ContainerContent>
  );
};

export default LatestBlog;
