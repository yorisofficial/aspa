"use client";
import React, { Suspense } from "react";
import ItemTeam from "./ItemTeam";

interface Props {
  id: number;
  full_name: string;
  nickname: string;
  title: string;
  location?: string;
  profile: string;
}

const ListTeam = ({
  data,
  categories,
}: {
  data: Props[];
  categories: string;
}) => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {data.map((item, index) => (
          <Suspense key={item.id}>
            <ItemTeam index={index} data={item} categories={categories} />
          </Suspense>
        ))}
      </div>
    </>
  );
};

export default ListTeam;
