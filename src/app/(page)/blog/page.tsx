import BackButton from "@/app/Components/BackButton";
import ContainerContent from "@/app/Components/Container";
import ItemPost from "@/app/Components/ItemPost";
import React, { Suspense } from "react";

async function getData() {
  const url = process.env.ASC_PUBLIC_POST || "";
  const res = await fetch(`${url}/?per_page=9`, {
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

  return (
    <ContainerContent
      url="blog"
      className="container mx-auto min-h-screen w-full max-w-5xl space-y-8 py-32"
    >
      <BackButton url="/">Back to main</BackButton>
      <div className="w-full space-y-4">
        <h1 className="text-3xl font-black">Blog Page</h1>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
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
