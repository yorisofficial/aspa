import Link from "next/link";
import React from "react";

export async function getData() {
  const url =
    process.env.PUBLIC_URL_GIT ||
    "https://yorisofficial.github.io/asc-blog/data-service.json";

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 1, // Revalidate every second
  };
}

interface Props {
  id: string;
  sectionId: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

export default async function page() {
  const data: Props[] = (await getData()).props.data;

  return (
    <div className="mx-auto min-h-screen w-full xl:px-16">
      <ul className="grid w-full grid-cols-4 items-center gap-4">
        {data.map((item, index) => (
          <li
            key={item.id}
            className="bored flex h-32 w-full flex-col items-start justify-between p-4"
          >
            {item.name}
            <Link
              href={item.link}
              target="_blank"
              className="underline underline-offset-4"
            >
              Click here
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
