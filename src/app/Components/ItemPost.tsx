"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  const postContent = post;
  const getInfoDate = postContent.date;
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
    <div>
      <div className="card flex flex-col items-start justify-between rounded-xl border-2 p-4">
        <div className="h-[200px] w-full">
          <Image
            src={post.jetpack_featured_media_url}
            height={500}
            width={500}
            priority={false}
            alt={post.title.rendered}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
        <div className="group py-4">
          <span>{datePost}</span>
          <h1 className="font-black underline-offset-8 group-hover:underline">
            {post.title.rendered}
          </h1>
        </div>
        <div className="mt-4 w-full">
          <Link
            href={`/blog/${post.id}`}
            className="underline underline-offset-8"
          >
            Read the post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemPost;
