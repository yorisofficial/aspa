import Image from "next/image";
import Link from "next/link";
import React from "react";
import GetDateComponent from "./GetDateComponent";

interface Props {
  id: number;
  jetpack_featured_media_url: any;
  rendered: string;
  date: string;
  author: number;
  title: {
    rendered: string;
  };
}

const ItemPost = ({ post }: { post: Props }) => {
  const url = post.title.rendered.replaceAll(" ", "-").toLowerCase();

  return (
    <>
      <Link
        href={`/blog/${post.id}/${url}`}
        className="card group flex h-full flex-col items-start justify-between rounded-xl border-2 border-bordersolid bg-white p-4 duration-500 hover:scale-105 hover:rounded-xl hover:drop-shadow-xl"
      >
        <div className="">
          <div className="h-[200px] w-full overflow-hidden rounded-lg">
            <Image
              src={post.jetpack_featured_media_url}
              height={500}
              width={500}
              priority={false}
              alt={post.title.rendered}
              className="h-full w-full rounded-lg object-cover duration-500 group-hover:scale-110"
            />
          </div>
          <div className="h-full py-4">
            <GetDateComponent data={post.date} />
            <h1 className="font-black underline-offset-8 group-hover:underline">
              {post.title.rendered}
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ItemPost;
