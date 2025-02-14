"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Moment from "react-moment";

interface Props {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  jetpack_featured_media_url: any;
  rendered: string;
  date: string;
  author: number;
}

const ItemPost = ({ post }: { post: Props }) => {
  return (
    <>
      <Link
        href={`/blog/${post.id}/${post.slug}`}
        target="_parent"
        className="card group flex h-full w-full flex-col items-start justify-between rounded-xl border-2 border-bordersolid bg-white p-4 duration-500 hover:scale-105 hover:rounded-xl hover:drop-shadow-xl"
      >
        <div className="h-fit w-full">
          <div className="h-[200px] w-full overflow-hidden rounded-lg md:h-[300px] xl:h-[200px]">
            <Image
              src={post.jetpack_featured_media_url}
              height={1500}
              width={500}
              priority={false}
              alt={post.title.rendered}
              className="h-full w-full rounded-lg object-cover duration-500 group-hover:scale-110"
            />
          </div>
          <div className="h-full py-4">
            <Moment format="YYYY-MM-DD">{post.date}</Moment>
            <h1
              className="line-clamp-3 text-xl font-light uppercase"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ItemPost;
