"use client";
import React, { Suspense } from "react";
import ItemService from "./ItemService";
import Loading from "../loading";

interface Props {
  id: number;
  title: string;
  desc: string;
  pathImage: string;
}

const ListService = ({ data }: { data: Props[] }) => {
  return (
    <div className="list-service grid w-full grid-cols-2 gap-4 xl:gap-8">
      {data.map((item) => (
        <Suspense key={item.id} fallback={<Loading />}>
          <ItemService dataItem={item} />
        </Suspense>
      ))}
    </div>
  );
};

export default ListService;
